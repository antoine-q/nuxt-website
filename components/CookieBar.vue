<template>
	<div id="cookiebar" class="fixed w-full bottom-0 bg-white py-5 shadow flex items-center" v-if="isOpen">
		<div class="flex flex-row w-full justify-evenly items-center">
			<p>
				Ce site internet utilise des cookies permettant de mesurer le trafic. Vous pouvez consulter notre politique de cookies sur la page des mentions légales.
			</p>
			<div class="btn-container">
				<button class="transition duration-300 ease-in-out inline-block mt-5 px-8 py-2 rounded-full text-lg font-bold bg-green-400 text-white hover:text-white hover:bg-green-600 active:bg-grey-100" @click="accept">
					J'accepte
				</button>
				<button class="underline px-4 text-sm text-green-400" @click="decline">
					Je refuse
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import * as Cookie from 'tiny-cookie'

const STORAGE_TYPES = {
    local: 'localStorage',
    cookies: 'cookies',
}

export default {
    props:{
        storageName: {
            type: String,
            default: 'cookies:accepted'
        },
        storageType: {
            type: String,
            default: STORAGE_TYPES.local
        },
        cookieOptions:{
            type: Object,
            default: () => {},
            required: false,
        }
    },
    computed:{
        canUseLocalStorage () {
            return this.storageType === STORAGE_TYPES.local && this.supportsLocalStorage && process.client;
        }
    },
    created (){
        if (this.canUseLocalStorage){
            try{
                const localStorageTest = '__check-localStorage';
                if (typeof window !== 'undefined'){
                    window.localStorage.setItem(localStorageTest,localStorageTest);
                    window.localStorage.removeItem(localStorageTest);
                }
            } catch (e){
                this.supportsLocalStorage = false;
            }
        }

        if (!this.getVisited()) {
            this.isOpen = true
            
        }
        this.$initgtag();
    },
    methods: {
        registerData(key,value){
            if(this.canUseLocalStorage){
                localStorage.setItem(key, value);
            } else {
                Cookie.set(key,value, {...this.cookieOptions, expires: '1Y' });
            }
        },
        setVisited(){
            this.registerData(this.storageName,true);
        },
        setAccepted(){
            this.registerData(this.storageName, true);
        },
        setDeclined(){
            this.registerData(this.storageName,false);
        },
        setRevoked(){
            if(this.canUseLocalStorage){
                localStorage.removeItem(this.storageName);
            } else {
                Cookie.remove(this.storageName);
            }
        },
        getVisited(){
            let visited = false;
            if(this.canUseLocalStorage){
                visited = localStorage.getItem(this.storageName);
            } else {
                visited = Cookie.get(this.storageName);
            }

            if(typeof visited === 'string'){
                visited = JSON.parse(visited);
            }

            return !(visited === null || visited === undefined);
        },
        accept(){
            this.setVisited();
            this.setAccepted();
            this.isOpen = false;
            this.$emit('accept');
            this.$initgtag();
        },
        close(){
            this.isOpen = false;
            this.$emit('close');            
        },
        decline(){
            this.setVisited();
            this.setDeclined();
            this.isOpen = false;
            this.$emit('decline');
            this.$initgtag();
        },
        revoke(){
            this.setRevoked(); 
            this.isOpen = true;
            this.$emit('revoke');
        },
        open(){
            if(!this.getVisited()){
                this.isOpen = true;
            }
        }
    },
    data (){
        return{
            supportsLocalStorage: true,
            isOpen: false,
        }
    }
}
</script>

<style>
    #cookiebar{
        z-index: 100;
        min-height: 90px;
    }
</style>