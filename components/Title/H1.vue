<template>
  <h1 v-html="this.title" :class="this.addClass" class="font-black text-white text-5xl md:text-5xl"></h1>
</template>

<script>
export default {
    props: {
        addClass:{
            type: String,
            required: false
        },
        title: {
            type: String,
            required: false 
        }
    }

}
</script>