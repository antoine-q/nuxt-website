<template>
<main>
    <section class="bg-green-300">
        <div class="container mx-auto py-40">
            <h1 class="font-black text-white text-7xl">{{ homeData.title }}</h1>
              {{ homeData.description }}
            
              <NuxtLink to="/contact" class=" transition inline-block mt-10 px-10 py-3 border border-white text-white text-xl hover:bg-white hover:text-green-300">{{homeData.button}}</NuxtLink>
            
        </div>
    </section>
    <section>
      <div class="container mx-auto py-40 flex flex-row">
        <div class="w-1/2">

        </div>
        <div class="w-1/2">
          <h2 class="font-black text-6xl  text-right">{{ homeData.section-1-title }}</h2>
          

        </div>
      </div>
    </section>
    <section class="bg-blue-300">
      <div class="container mx-auto py-40">
        <div>
          <h2 class="font-black text-white text-6xl">Technos I ❤</h2>
        </div>
        <div class=" py-14 flex flex-row flex-wrap justify-center">
          <div class="m-3 w-1/4 h-20 bg-white"></div>
          <div class="m-3 w-1/4 h-20 bg-white"></div>
          <div class="m-3 w-1/4 h-20 bg-white"></div>
          <div class="m-3 w-1/4 h-20 bg-white"></div>
        </div>
      </div>
    </section>
</main>
</template>

<script>
export default {
    head() {
    return {
      script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
    };
    
  },
  async asyncData({$content, params}){
      const homeData = await $content('home').fetch();

      return {
        homeData
      }
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}
</style>
