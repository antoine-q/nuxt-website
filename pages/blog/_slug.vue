<template>
    <main>
        <div class="group relative">
            <section class="bg-green-300">
                <div class="container mx-auto py-20 text-center">
                    <h1 class="font-black text-white text-4xl md:text-5xl">
                        {{ article.title }}
                    </h1>
                    <p
                        class="text-white mt-14 text-lg text-left max-w-3xl mx-auto"
                    >
                        {{ article.description }}
                    </p>
                    <p class="text-white mt-14 text-md italic">
                        Dernière mise à jour le :
                        {{ formatDate(article.updatedAt) }}
                    </p>
                </div>
            </section>
            <div class="hidden lg:block slug-wave">
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
            <div class="container mx-auto pt-40 mt-20 px-5 md:px-0">
                <nuxt-content :document="article" class="max-w-3xl mx-auto" />
            </div>
        </section>
        <section>
            <div class="container mx-auto max-w-3xl pt-20 pb-0 md:pb-40">
                <div class="flex flex-col md:flex-row bg-green-400 text-white py-7 px-5 md:rounded-lg">
                    <div class="hidden md:block">
                        <img :src="author.authorimg" :alt="author.name" width="90" height="90" class="rounded-full object-cover aspect-square"/>
                    </div>
                    <div class="md:pl-5">
                        <div class="text-xl">
                            Article écrit par&nbsp;<h5 class="inline-block font-bold">{{ author.name }}</h5>
                        </div>
                        <div class="text-lg">
                            {{ author.bio }}
                        </div>
                        <div class="flex flex-row pt-2">
                            <div v-html="author.coffeebutton"></div>
                            <a :href="author.linkedin" target="_blank" rel="noopener noreferrer" class="flex items-center">
                                <img src="/icons/linkedin-logo.svg" width="25" height="25" class="mx-2" alt="Linkedin">
                            </a>
                            <a :href="author.github" target="_blank" rel="noopener noreferrer" class="flex items-center">
                                <img src="/icons/github-logo.svg" width="25" height="25" class="mx-2" alt="Github">
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

.slug-wave {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.slug-wave svg {
    position: relative;
    display: block;
    width: calc(182% + 1.3px);
    height: 183px;
}

.slug-wave .shape-fill {
    fill: #6ee7b7;
}

.aspect-square{
    aspect-ratio: 1 / 1;
}
</style>
