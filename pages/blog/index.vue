<template>
    <main>
        <section class="bg-green-300">
            <div class="container mx-auto py-40">
            <h1 class="font-black text-white text-7xl">Blog</h1>
            </div>
        </section>
        <section>
            <div class="container mx-auto py-40">
                <h2 class="font-black text-6xl mb-24">Lasts articles</h2>
            <ul class="flex flex-row flex-wrap">
                <li
                    v-for="article of articles"
                    :key="article.slug"
                    class="box-border p-3 w-content w-1/3"
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
                                <p class="italic">
                                    by : {{ article.author.name }}
                                </p>
                                <p>{{ article.description }}</p>
                            </div>
                        </NuxtLink>
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
        const articles = await $content("articles")
            .only(["title", "description", "img", "slug", "author"])
            .sortBy("createdAt", "asc")
            .fetch();

        return {
            articles,
        };
    },
};
</script>
