<template>
    <main>
      <SeoHead :title="homeData.seo.title" :description="homeData.seo.description" :image="homeData.seo.image"/>
        <div class="group relative">
            <section class="bg-green-300 relative">
                <div
                    class="container mx-auto max-w-6xl py-20 px-4 xl:px-0 text-center md:text-left"
                >
                    <h1 class="font-black text-white text-4xl md:text-5xl">
                        {{ homeData.title }}
                    </h1>
                    <div class="max-w-xl" v-html="homeData.description"></div>
                    <NuxtLink
                        to="/contact"
                        class="transition duration-300 ease-in-out inline-block mt-5 px-8 py-2 rounded-full text-lg font-bold bg-green-400 text-white hover:text-green-400 hover:bg-white active:bg-grey-100"
                        >{{ homeData.button }}</NuxtLink
                    >
                </div>
            </section>
            <WaveHomeTop/>
        </div>
        <section>
            <div
                class="container mx-auto max-w-6xl px-4 xl:px-0 py-10 md:py-20 flex flex-col-reverse md:flex-row md:items-center"
            >
                <div class="w-full md:w-1/2 flex justify-center">
                    <img
                        :src="homeData['section-1-img']"
                        class="w-96"
                        alt="Antoine Queru French It Engineer"
                    />
                </div>
                <div class="w-full md:w-1/2">
                    <h2
                        class="font-black text-3xl md:text-4xl text-center md:text-left"
                    >
                        {{ homeData["section-1-title"] }}
                    </h2>
                    <div
                        v-html="homeData['section-1-content']"
                        class="mt-8 text-lg text-center md:text-left text-gray-700"
                    ></div>
                </div>
            </div>
        </section>
        <section id="blog">
            <div
                class="container px-4 xl:px-0 mx-auto max-w-6xl mt-5 md:pt-10 flex flex-col md:flex-row"
            >
                <div class="w-full md:w-1/2">
                    <h2
                        class="font-black text-3xl md:text-4xl text-center md:text-left"
                    >
                        Derniers articles
                    </h2>
                </div>
                <div class="w-full md:w-1/2"></div>
            </div>
            <div
                class="container mx-auto max-w-6xl md:mb-30 py-10 flex flex-row flex-wrap justify-center"
            >
                <ul class="flex flex-row flex-wrap">
                    <li
                        v-for="article of articles"
                        :key="article.slug"
                        class="box-border p-3 w-content md:w-1/2 w-full"
                    >
                        <div class="hover:border-gray-500 bg-white">
                            <NuxtLink
                                :to="{
                                    name: 'blog-slug',
                                    params: { slug: article.slug },
                                }"
                            >
                                <img :src="article.img" class="w-full" />
                            </NuxtLink>
                            <div class="p-4">
                                <NuxtLink
                                    :to="{
                                        name: 'blog-slug',
                                        params: { slug: article.slug },
                                    }"
                                    class="hover:text-green-500 transition duration-300 ease-in-out"
                                >
                                    <h3 class="text-2xl font-black">
                                        {{ article.title }}
                                    </h3>
                                </NuxtLink>
                                <p class="italic mt-2 text-gray-800">
                                    Publié le {{ formatDate(article.date) }}
                                </p>
                                <p class="my-2 text-gray-700">
                                    {{ article.description }}
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <div class="group relative">
            <WaveHomeBottom/>
            <section class="bg-green-400">
                <div
                    class="container mx-auto max-w-6xl px-4 xl:px-0 py-10 md:pt-20 md:pb-52"
                >
                    <div>
                        <h2
                            class="font-black text-white text-center md:text-left text-3xl md:text-4xl"
                        >
                            {{ homeData["section-2-title"] }}
                        </h2>
                    </div>
                    <div class="py-10 flex flex-row flex-wrap justify-around">
                        <div v-for="techno of technos" :key="techno.slug">
                            <div
                                class="block bg-white rounded-full p-8 m-2 hover:shadow-xl transition duration-300 transform hover:scale-105 ease-in-out"
                            >
                                <img
                                    :src="techno.img"
                                    :alt="`Logo of ${techno.title}`"
                                    :title="techno.title"
                                    width="45"
                                    height="45"
                                    class="block"
                                />
                            </div>
                        </div>
                    </div>
                    <div class="text-center">
                        <NuxtLink
                            to="/about#technos"
                            class="transition duration-300 ease-in-out inline-block mt-5 px-8 py-2 rounded-full text-lg font-bold bg-green-500 text-white hover:text-green-400 hover:bg-white active:bg-grey-100"
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
            title: this.homeData.seo.title,
            script: [
                {
                    src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
                },
            ],
        };
    },
    async asyncData({ $content, params }) {
        const homeData = await $content("home").fetch();
        const technos = await $content("technos")
            .only(["title", "img"])
            .where({ home: { $eq: true } })
            .fetch();

        const articles = await $content("articles")
            .limit(2)
            .only(["title", "description", "img", "slug", "author", "date"])
            .sortBy("date", "desc")
            .fetch();

        return {
            homeData,
            technos,
            articles,
        };
    },
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleString("fr", options);
        },
    },
};
</script>

<style scoped>
* {
    box-sizing: border-box;
}

</style>
