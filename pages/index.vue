<template>
<main>
    <section class="bg-green-300">
        <div class="container mx-auto py-40 text-center md:text-left">
            <h1 class="font-black text-white text-7xl">{{ homeData.title }}</h1>
              <div v-html="homeData.description"></div>
              <NuxtLink to="/contact" class="transition inline-block mt-10 px-10 py-3 border border-white text-white text-xl hover:bg-white hover:text-green-300">{{homeData.button}}</NuxtLink>        
        </div>
    </section>
    <section>
      <div class="container mx-auto py-10 md:py-40 flex flex-col-reverse md:flex-row">
        <div class="w-full md:w-1/2">
          <img :src="homeData['section-1-img']" class="w-full md:w-3/4" alt="Antoine Queru French It Engineer">
        </div>
        <div class="w-full md:w-1/2">
          <h2 class="font-black text-6xl text-center md:text-right">{{ homeData['section-1-title'] }}</h2>
          <div v-html="homeData['section-1-content']" class="mt-14 text-xl text-center md:text-right"></div>
        </div>
      </div>
    </section>
    <section class="bg-blue-300">
      <div class="container mx-auto py-40">
        <div>
          <h2 class="font-black text-white text-center md:text-left text-6xl">{{homeData['section-2-title']}}</h2>
        </div>
        <div class=" py-14 flex flex-row flex-wrap justify-center">
          <div v-for="techno of technos" :key="techno.slug" class="m-3 w-full md:w-1/4 bg-white p-8 flex items-center">
          <div>
            <img :src="techno.img" :alt="`Logo of ${techno.title}`" class="w-1/2 mx-auto">
          </div>
          </div>
        </div>
        <div class="text-center">
        <NuxtLink to="/about" class=" transition inline-block mt-10 px-10 py-3 border border-white text-white text-xl hover:bg-white hover:text-blue-300">{{homeData['section-2-btn']}}</NuxtLink>
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
      const technos = await $content('technos').only(['title', 'img']).fetch();

      return {
        homeData, technos
      }
    }
}
</script>

<style>
* {
    box-sizing: border-box;
}
</style>
