<template>
    <main>
        <div class="group relative">
            <section class="bg-green-300">
                <div class="container mx-auto max-w-6xl px-4 xl:px-0 py-16 md:py-20 text-center md:text-left">
                <h1 class="font-black text-white text-4xl md:text-5xl">À propos</h1>
                </div>
            </section>
        <div class="hidden md:block custom-shape-divider-top-1642675248">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
        <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
    </svg>
</div>
        </div>
        <section>
            <div class="container mx-auto max-w-6xl pt-16 md:pt-40 pb-16 px-4 xl:px-0 flex flex-col-reverse md:flex-row">
                <div class="w-full md:w-1/2">

                </div>
                <div class="px-5 md:px-0 w-full md:w-1/2">
                    <h2 class="font-black text-3xl md:text-4xl text-left md:text-right">Mes réalisations</h2>
                </div>
                
            </div>
            <div class="container max-w-6xl mx-auto flex flex-wrap flex-col md:flex-row items-center">
                <div class="block h-96 w-full md:w-1/3 p-3"><div class="bg-green-300 block w-full h-full"></div> </div>
                <div class="block h-96 w-full md:w-1/3 p-3">
                    <div class="bg-green-300 block w-full h-full">
                        <div class="flex items-center justify-center h-full">
                            <div class="text-white text-2xl font-bold">
                                À venir ...
                            </div>
                        </div>
                    </div> 
                </div>
                <div class="block h-96 w-full md:w-1/3 p-3"><div class="bg-green-300 block w-full h-full"></div> </div>
            </div>
        </section>
        <section id="technos">
            <div class="container max-w-6xl mx-auto pt-10 md:pt-20 px-4 xl:px-0 flex flex-col md:flex-row">
                <div class="w-full md:w-1/2">
                    <h2 class="font-black text-3xl md:text-4xl text-center md:text-left">Technos</h2>
                </div>
                <div class="w-full md:w-1/2">

                </div>
                
            </div>
            <div class="container mx-auto max-w-6xl md:mb-40 py-10 flex flex-row flex-wrap justify-center">
                    <div
                v-for="techno of technos"
                :key="techno.slug"
                >
                <div class="block bg-white rounded-full p-10 m-2 transition duration-500 transform hover:scale-110 ease-in-out">
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
    const technos = await $content("technos").only(["title", "img"]).fetch();

    return {
        technos,
    };
    },
    data(){
        return {
            title: "Mes différents projets et mes technos favorites, Nuxt, Laravel, Vue - Antoine Queru"
        }
    },
    head() {
        return {
            title: this.title,
            meta: [
                {
                    hid: 'contact-description',
                    name: 'description',
                    content: 'Découvrez les technos que j\'utilise et que j\'apprécie au cours de mes différents projets, sites internet applications web. Développement Laravel Vue Nuxt Javascript PHP.'
                },
                {
                hid: 'contact-tw-title',
                name:'twitter:title',
                content: this.title,
                },
                {
                hid: 'contact-tw-description',
                name: 'twitter:description',
                content: 'Découvrez les technos que j\'utilise et que j\'apprécie au cours de mes différents projets, sites internet applications web. Développement Laravel Vue Nuxt Javascript PHP.',
                },
                {
                hid: 'contact-og-title',
                property : 'og:title',
                content: this.title,
                },
                {
                hid: 'contact-og-description',
                property : 'og:description',
                content: 'Découvrez les technos que j\'utilise et que j\'apprécie au cours de mes différents projets, sites internet applications web. Développement Laravel Vue Nuxt Javascript PHP.',
                },
            ]
        }
    }
}
</script>

<style>
    .custom-shape-divider-top-1642675248 {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1642675248 svg {
    position: relative;
    display: block;
    width: calc(300% + 1.3px);
    height: 135px;
}

.custom-shape-divider-top-1642675248 .shape-fill {
    fill: #6EE7B7;
}
</style>