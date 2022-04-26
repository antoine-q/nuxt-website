<template>
    <main>
        <SeoHead :title="blogData.seo.title" :description="blogData.seo.description" :image="blogData.seo.image"/>
        <div class="group relative">
            <section class="bg-green-300">
                <div
                    class="container mx-auto max-w-6xl px-4 xl:px-0 py-16 md:py-20 text-center md:text-left"
                >
                    <h1 class="font-black text-white text-4xl md:text-5xl">
                        Blog
                    </h1>
                </div>
            </section>
            <WaveBlog/>
        </div>
        <section>
            <div
                class="container mx-auto max-w-6xl px-4 xl:px-0 px-4 py-10 md:py-40 mt-20"
            >
                <h2
                    class="font-black text-3xl md:text-4xl mb-10 md:mb-20 text-left"
                >
                    Derniers articles
                </h2>
                <ul class="flex flex-row flex-wrap">
                    <li
                        v-for="article of articles"
                        :key="article.slug"
                        class="box-border p-3 w-content w-full md:w-1/2 lg:w-1/3"
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
                            <div class="py-4">
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
                                <p class="italic mt-2 text-gray-800 text-sm">
                                    Publié le {{ formatDate(article.date) }}
                                </p>
                                <p class="my-2 text-gray-700 text-sm">
                                    {{ article.description }}
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const blogData = await $content("blog").fetch();
        const articles = await $content("articles")
            .only([
                "title",
                "description",
                "img",
                "slug",
                "author",
                "createdAt",
                "date",
            ])
            .sortBy("date", "desc")
            .fetch();

        return {
            articles,
            blogData
        };
    },
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleString("fr", options);
        },
    },
    head() {
        return {
            title: this.blogData.seo.title,
        };
    },
};
</script>