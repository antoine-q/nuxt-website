<template>
    <main>
        <SeoHead :title="aboutData.seo.title" :description="aboutData.seo.description" :image="aboutData.seo.image"/>
        <Header title="À propos" wave="wave-about">
        </Header>
        <section>
            <div
                class="container mx-auto max-w-6xl pt-16 md:pt-40 pb-16 px-4 xl:px-0 flex flex-col-reverse md:flex-row"
            >
                <div class="px-5 md:px-0 w-full">
                    <h2 class="font-black text-3xl md:text-4xl">
                        Mes réalisations
                    </h2>
                </div>
            </div>
            <div
                class="container max-w-6xl mx-auto flex flex-wrap md:flex-row flex-col items-center"
            >
                <Realisation
                    v-for="realisation in realisations"
                    :key="realisation.title"
                    :title="realisation.title"
                    :description="realisation.description"
                    :link="realisation.link"
                    :img="realisation.img"
                />
            </div>
        </section>
        <section id="technos">
            <div
                class="container max-w-6xl mx-auto pt-10 md:pt-20 px-4 xl:px-0 flex flex-col md:flex-row"
            >
                <div class="w-full md:w-1/2">
                    <h2
                        class="font-black text-3xl md:text-4xl text-center md:text-left"
                    >
                        Technos
                    </h2>
                </div>
                <div class="w-full md:w-1/2"></div>
            </div>
            <div
                class="container mx-auto max-w-6xl md:mb-40 py-10 flex flex-row flex-wrap justify-center"
            >
                <div v-for="techno of technos" :key="techno.slug">
                    <div
                        class="block bg-white rounded-full p-10 m-2 transition duration-500 transform hover:scale-110 ease-in-out"
                    >
                        <img
                            :src="techno.img"
                            :alt="`Logo of ${techno.title}`"
                            :title="techno.title"
                            width="100"
                            height="100"
                            class="block"
                        />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const technos = await $content("technos")
            .only(["title", "img"])
            .fetch();
        const realisations = await $content("realisations").fetch();

        const aboutData = await $content("about").fetch();

        return {
            technos,
            realisations,
            aboutData,
        };
    },
    head() {
        return {
            title: this.aboutData.seo.title,
        };
    },
};
</script>

<style>

</style>
