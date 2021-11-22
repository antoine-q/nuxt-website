<template>
<main>
    <section class="bg-green-300">
        <div class="container mx-auto py-40">
            <h1 class="font-black text-white text-7xl">{{ homeData.title }}</h1>
              <div v-html="homeData.description"></div>
            
              <NuxtLink to="/contact" class=" transition inline-block mt-10 px-10 py-3 border border-white text-white text-xl hover:bg-white hover:text-green-300">{{homeData.button}}</NuxtLink>
            
        </div>
    </section>
    <section>
      <div class="container mx-auto py-40 flex flex-row">
        <div class="w-1/2">

        </div>
        <div class="w-1/2">
          <h2 class="font-black text-6xl  text-right">{{ homeData['section-1-title'] }}</h2>
          <div v-html="homeData['section-1-content']"></div>
        </div>
      </div>
    </section>
    <section class="bg-blue-300">
      <div class="container mx-auto py-40">
        <div>
          <h2 class="font-black text-white text-6xl">Some technos I ❤</h2>
        </div>
        <div class=" py-14 flex flex-row flex-wrap justify-center">
          <div class="m-3 w-1/4 bg-white p-5 flex items-center">
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/NuxtJS_Logo.png" alt="Logo of NuxtJs" class="w-1/2 mx-auto">
            
          </div>
          </div>
          <div class="m-3 w-1/4 bg-white p-5 flex items-center">
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png" alt="Logo of Laravel" class="w-1/2 mx-auto">
            
          </div>
          </div>
          <div class="m-3 w-1/4 bg-white p-5 flex items-center">
          <div>
            <img src="https://upload.wikimedia.org/wikipedia/fr/thumb/2/2e/Java_Logo.svg/1200px-Java_Logo.svg.png" alt="Logo of Java" class="w-1/2 mx-auto">
            
          </div>
          </div>
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
