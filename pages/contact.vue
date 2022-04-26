<template>
    <main>
        <SeoHead :title="contactData.seo.title" :description="contactData.seo.description" :image="contactData.seo.image"/>
        <div class="group relative">
            <section class="bg-green-300">
                <div
                    class="container mx-auto max-w-6xl py-16 px-4 xl:px-0 md:py-20 text-center md:text-left"
                >
                    <h1 class="font-black text-white text-4xl md:text-5xl">
                        Contact
                    </h1>
                </div>
            </section>
            <WaveContact/>
        </div>
        <section>
            <div class="container mx-auto py-16 md:py-40">
                <h2 class="font-black text-3xl md:text-4xl mb-10 text-center">
                    Contactez moi ! 📬
                </h2>
                <form
                    method="POST"
                    name="contact"
                    data-netlify="true"
                    data-netlify-recaptcha="true"
                    class="flex flex-col max-w-2xl mx-auto"
                >
                    <label for="firstname" class="mt-3 ml-3 text-xl font-bold"
                        >Nom :</label
                    >
                    <input
                        type="text"
                        name="name"
                        id="firstname"
                        class="p-2 m-2 border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-300 rounded-md"
                    />
                    <label for="email" class="mt-3 ml-3 text-xl font-bold"
                        >Email :</label
                    >
                    <input
                        type="email"
                        name="email"
                        id="email"
                        class="p-2 m-2 border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-300 rounded-md"
                    />
                    <label for="message" class="mt-3 ml-3 text-xl font-bold"
                        >Message :</label
                    >
                    <textarea
                        name="message"
                        id="message"
                        class="p-2 m-2 border-2 border-green-500 focus:outline-none focus:ring-2 focus:ring-green-300 rounded-md"
                        rows="10"
                    ></textarea>
                    <div data-netlify-recaptcha="true"></div>
                    <input
                        type="submit"
                        value="Envoyer "
                        class="transition cursor-pointer duration-300 ease-in-out inline-block mt-5 m-2 px-8 py-2 rounded-lg text-lg font-bold bg-green-500 text-white hover:bg-green-600 active:bg-grey-100"
                    />
                </form>
            </div>
        </section>
    </main>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const contactData = await $content("contact").fetch();
        return {
            contactData
        }
    },
    data() {
        return {
            title: "Contactez moi, développeur Web a Troyes - Antoine Queru",
        };
    },
    head() {
        return {
            title: this.contactData.seo.title,
        };
    },
};
</script>

<style>
.custom-shape-divider-top-1642675201 {
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1642675201 svg {
    position: relative;
    display: block;
    width: calc(124% + 1.3px);
    height: 118px;
}

.custom-shape-divider-top-1642675201 .shape-fill {
    fill: #6ee7b7;
}
</style>
