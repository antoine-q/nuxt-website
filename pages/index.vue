<template>
<main>
    <section class="bg-green-300">
        <div class="container mx-auto py-40">
            <h1 class="font-black text-white text-7xl">Tonka</h1>
            <p class="text-white mt-14 text-xl">
                👋 Hi, my name is Tonka, i'm a french developper.
            </p>
            <p class="text-white mt-5 text-xl">
              I love making beautiful and unique websites with a nice UI.
            </p>
            
              <NuxtLink to="/contact" class=" transition inline-block mt-10 px-10 py-3 border border-white text-white text-xl hover:bg-white hover:text-green-300">Contact-me !</NuxtLink>
            
        </div>
    </section>
    <section>
      <div class="container mx-auto py-40 flex flex-row">
        <div class="w-1/2">

        </div>
        <div class="w-1/2">
          <h2 class="font-black text-6xl  text-right">About me</h2>
          <p class="mt-14 text-right">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque debitis, doloremque dignissimos ducimus voluptate odio quaerat tempore perspiciatis nostrum architecto commodi optio provident labore porro consequatur. Fugit distinctio velit explicabo ducimus voluptate accusantium adipisci pariatur inventore libero aperiam a aspernatur, ab sint ipsa sequi beatae vitae molestias enim cupiditate commodi, maiores minima. Autem veniam vel officiis? Praesentium sed, facilis incidunt tempore dolores libero deleniti vel quisquam officiis harum magnam suscipit possimus ipsum enim earum odio, dignissimos quibusdam natus accusantium molestiae sint expedita voluptatum. Debitis quos et, delectus dicta unde minus aliquid esse numquam aspernatur, beatae, nostrum voluptatum adipisci perspiciatis maxime explicabo est! Consectetur nam minima dicta nisi saepe nesciunt omnis provident animi labore, quam, eum magnam soluta amet aliquam voluptate eius suscipit at culpa odit, reiciendis doloribus praesentium voluptatem. Dignissimos, aut. Ab maiores, unde tenetur, numquam minima harum itaque animi temporibus fuga vero, voluptatibus consequuntur ex dolore eaque architecto necessitatibus!
          </p>

          <p class="mt-14 text-right">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque rerum, tempore laudantium exercitationem natus eaque aut reprehenderit. Necessitatibus, enim sapiente!
          </p>

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
}
</script>

<style>
* {
    box-sizing: border-box;
}
</style>
