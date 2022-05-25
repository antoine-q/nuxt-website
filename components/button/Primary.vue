<template>
    <NuxtLink v-if="this.internal" :to="this.link" :class="this.style">{{this.title}}</NuxtLink>
    <a v-else :href="this.link" :class="this.style">{{this.title}}</a>
</template>

<script>
export default {
    props: {
        link:{
            required: true,
        },
        title:{
            required: true,
        },
        internal: {
            type: Boolean,
            required: false,
            default: false

        }
    },
    data(){
        return {
            style: "transition duration-300 ease-in-out inline-block mt-5 px-8 py-2 rounded-full text-lg font-bold bg-green-400 text-white hover:text-green-400 hover:bg-white active:bg-grey-100"
        }
    }
}
</script>