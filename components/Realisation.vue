<template>
  <div class="w-full md:w-1/2 p-5">
      <a class="w-full relative" :href="this.link" target="_blank" rel="noopener noreferrer">
          <p class="text-2xl font-black  pb-3 text-center" v-html="this.title"></p>
          <img class="border border-green-400" :src="this.img" :alt="this.title">
      </a>      
  </div>
</template>

<script>
export default {
    props:{
        img:{
            type: String,
            required: true,
        },
        link:{
            type: String,
            required: true,
        },
        title:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        }
    }
}
</script>

<style>

</style>