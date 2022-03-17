<template>
  <main>
    <div class="group relative">
      <section class="bg-green-300 relative">
        <div class="container mx-auto py-20 text-center md:text-left">
          <h1 class="font-black text-white text-3xl md:text-7xl">{{ homeData.title }}</h1>
          <div class="max-w-xl" v-html="homeData.description"></div>
          <NuxtLink
            to="/contact"
            class="
              transition
              inline-block
              mt-10
              px-10
              py-3
              border border-white
              text-white text-xl
              hover:bg-white hover:text-green-300
            "
            >{{ homeData.button }}</NuxtLink
          >
        </div>
      </section>
      <div class="hidden md:block wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </div>
    <section>
      <div
        class="
          container
          mx-auto
          px-4
          py-10
          md:py-40
          flex flex-col-reverse
          md:flex-row
        "
      >
        <div class="w-full md:w-1/2">
          <img
            :src="homeData['section-1-img']"
            class="w-full md:w-96"
            alt="Antoine Queru French It Engineer"
          />
        </div>
        <div class="w-full md:w-1/2">
          <h2 class="font-black text-3xl md:text-6xl text-center md:text-right">
            {{ homeData["section-1-title"] }}
          </h2>
          <div
            v-html="homeData['section-1-content']"
            class="mt-14 text-xl text-center md:text-right"
          ></div>
        </div>
      </div>
    </section>
    <section id="blog">
            <div class="container mx-auto mt-5 md:pt-10 flex flex-col md:flex-row">
                <div class="w-full md:w-1/2">
                    <h2 class="font-black text-3xl md:text-6xl text-center md:text-left">Derniers articles</h2>
                </div>
                <div class="w-full md:w-1/2">

                </div>
                
            </div>
            <div class="container mx-auto md:mb-40  py-10 flex flex-row flex-wrap justify-center">
                <ul class="flex flex-row flex-wrap">
                <li
                    v-for="article of articles"
                    :key="article.slug"
                    class="box-border p-3 w-content md:w-1/2 w-full"
                >
                    <div
                        class="
                            hover:border-gray-500
                            bg-white
                        "
                    >
                        <NuxtLink
                            :to="{
                                name: 'blog-slug',
                                params: { slug: article.slug },
                            }"
                        >
                            <img
                                :src="article.img"
                                class="w-full"
                            />
                            <div class="p-4">
                                <h3 class="text-4xl font-black">{{ article.title }}</h3>
                                <p class="italic mt-2">
                                    Publié le {{formatDate(article.createdAt)}}
                                </p>
                                <p class="my-2">{{ article.description }}</p>
                            </div>
                        </NuxtLink>
                    </div>
                </li>
            </ul>
            </div>
        </section>
    <div class="group relative">
      <div class="hidden md:block wave-2">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <section class="bg-blue-300">
        <div class="container mx-auto py-10 md:py-20">
          <div>
            <h2 class="font-black text-white text-center md:text-left text-3xl md:text-6xl">
              {{ homeData["section-2-title"] }}
            </h2>
          </div>
          <div class="py-14 flex flex-row flex-wrap justify-center">
            <div
              v-for="techno of technos"
              :key="techno.slug"
            >
              <div class="block bg-white rounded-full p-10 m-2 hover:shadow-xl transition duration-500 transform hover:scale-110 ease-in-out">
                <img
                  :src="techno.img"
                  :alt="`Logo of ${techno.title}`"
                  :title="techno.title"
                  width="70"
                  height="70"
                  class="block"
                />
              </div>
            </div>
          </div>
          <div class="text-center">
            <NuxtLink
              to="/about#technos"
              class="
                transition
                inline-block
                mt-10
                px-10
                py-3
                border border-white
                text-white text-xl
                hover:bg-white hover:text-blue-300
              "
              >{{ homeData["section-2-btn"] }}</NuxtLink
            >
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      script: [
        { src: "https://identity.netlify.com/v1/netlify-identity-widget.js" },
      ],
    };
  },
  async asyncData({ $content, params }) {
    const homeData = await $content("home").fetch();
    const technos = await $content("technos").only(["title", "img"])
    .where({home: {$eq: true}})
    .fetch();

    const articles = await $content("articles")
    .limit(2)
    .only(["title", "description", "img", "slug", "author", "createdAt"])
    .sortBy("createdAt", "desc")
    .fetch();

    return {
      homeData,
      technos,
      articles,
    };
  },
  methods: {
        formatDate(date){
            const options = {year: 'numeric', month: 'long', day:'numeric'}
            return new Date(date).toLocaleString('fr', options)
        }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
.wave {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
}

.wave svg {
  position: relative;
  display: block;
  width: calc(142% + 1.3px);
  height: 123px;
}

.wave .shape-fill {
  fill: #6ee7b7;
}

.wave-2 {
    position: absolute;
    bottom: 99.9%;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.wave-2 svg {
    position: relative;
    display: block;
    width: calc(232% + 1.3px);
    height: 245px;
}

.wave-2 .shape-fill {
    fill: #93C5FD;
}

</style>
