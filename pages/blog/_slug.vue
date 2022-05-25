<template>
    <main>
        <SeoHead :title="article.title" :description="article.description" :image="article.img"/>
        <Header :title="article.title" wave="wave-blog">
            <p
                class="text-white mt-14 text-lg text-left max-w-3xl mx-auto"
            >
                {{ article.description }}
            </p>
            <p class="text-white mt-14 text-md italic">
                Dernière mise à jour le :
                {{ formatDate(article.updatedAt) }}
            </p>
        </Header>
        <section>
            <div class="container mx-auto pt-40 mt-20 px-5 md:px-0">
                <nuxt-content :document="article" class="max-w-3xl mx-auto" />
            </div>
        </section>
        <section>
            <div class="container mx-auto max-w-3xl pt-20 pb-0 md:pb-40">
                <div
                    class="flex flex-col md:flex-row bg-green-400 text-white py-7 px-5 md:rounded-lg"
                >
                    <div class="hidden md:block">
                        <img
                            :src="author.authorimg"
                            :alt="author.name"
                            width="90"
                            height="90"
                            class="rounded-full object-cover aspect-square"
                        />
                    </div>
                    <div class="md:pl-5">
                        <div class="text-xl">
                            Article écrit par&nbsp;
                            <h5 class="inline-block font-bold">
                                {{ author.name }}
                            </h5>
                        </div>
                        <div class="text-lg">
                            {{ author.bio }}
                        </div>
                        <div class="flex flex-row pt-2">
                            <div v-html="author.coffeebutton"></div>
                            <a
                                :href="author.linkedin"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center"
                            >
                                <img
                                    src="/icons/linkedin-logo.svg"
                                    width="25"
                                    height="25"
                                    class="mx-2"
                                    alt="Linkedin"
                                />
                            </a>
                            <a
                                :href="author.github"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex items-center"
                            >
                                <img
                                    src="/icons/github-logo.svg"
                                    width="25"
                                    height="25"
                                    class="mx-2"
                                    alt="Github"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content("articles", params.slug).fetch();

        const author = await $content("authors", article.authorslug).fetch();

        return { article, author };
    },
    methods: {
        formatDate(date) {
            const options = { year: "numeric", month: "long", day: "numeric" };
            return new Date(date).toLocaleString("fr", options);
        },
    },
    head() {
        return {
            title: this.article.title,
        };
    },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Lora:wght@400;600&display=swap");
.nuxt-content h2 {
    font-weight: bold;
    font-size: 32px;
}
.nuxt-content h3 {
    font-weight: bold;
    font-size: 25px;
}
.nuxt-content p {
    margin-bottom: 20px;
    font-family: "Lora", serif;
}

.aspect-square {
    aspect-ratio: 1 / 1;
}
</style>
