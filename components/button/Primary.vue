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

        },
        addedclass:{
            required: false,
        }
    },
    data(){
        return {
            style: this.addedclass + "transition duration-300 ease-in-out inline-block mt-5 px-8 py-2 font-mono rounded-full text-sm font-bold"
        }
    }
}
</script>