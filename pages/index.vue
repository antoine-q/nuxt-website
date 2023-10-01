<template>
    <main>
        <SeoHead :title="homeData.seo.title" :description="homeData.seo.description" :image="homeData.seo.image" />
        <Header :title="homeData.title" wave="wave-home-top">
            <div class=" text-black max-w-xl py-10 text-lg" v-html="homeData.description"></div>
            <ButtonPrimary :internal="true" link="/contact" :title="homeData.button"
                addedclass="bg-black text-white hover:text-black hover:bg-white active:bg-grey-100" />
        </Header>
        <div class="text-xl font-mono font-bold text-black text-center py-20">
            Vous souhaitez mettre en avant votre activité sur internet ?
        </div>
        <section>
            <div class="container mx-auto  px-4 xl:px-0 py-10 md:py-20 grid lg:grid-cols-2">

                <div>
                    <p class="text-primary pb-2 text-lg">Landing page</p>
                    <h2 class="font-mono font-black text-3xl text-center md:text-left">
                        Propulsez un produit
                    </h2>
                    <div v-html="homeData['section-1-content']"
                        class="mt-8  text-center md:text-left text-gray-700 leading-relaxed"></div>
                    <ButtonPrimary :internal="true" link="/contact" title="Je me lance !"
                        addedclass="bg-primary text-white hover:bg-accent active:bg-accent" />
                </div>
                <div>
                    <img src="/img/lp.png" alt="Landing Page" class="block w-10/12 mx-auto py-10 lg:py-0">
                </div>
            </div>
        </section>
        <section>
            <div class="container mx-auto  px-4 xl:px-0 py-10 md:py-20 grid lg:grid-cols-2">
                <div class="order-2 lg:order-1">
                    <img src="/img/blog.png" alt="Blog" class="block w-10/12 mx-auto py-10 lg:py-0">
                </div>
                <div class="order-1 lg:order-2">
                    <p class="text-accent pb-2 text-lg">Blog</p>
                    <h2 class="font-mono font-black text-3xl text-center md:text-left">
                        Exprimez vous
                    </h2>
                    <div class="mt-8  text-center md:text-left text-gray-700 leading-relaxed">
                        Vous souhaitez un site plus dynamique et vous voulez être en mesure de modifier son contenu au fil
                        du temps comme rajouter des pages et avoir un blog… Ne cherchez plus, un site créé à l'aide d’un
                        Système de Gestion de Contenu comme wordpress qui domine 40% du web est fait pour vous. Grâce à son
                        back office intuitif vous aurez le contrôle total sur votre site internet.
                    </div>
                    <ButtonPrimary :internal="true" link="/contact" title="Je me présente"
                        addedclass="bg-accent text-white hover:bg-primary active:bg-primary" />


                </div>

            </div>
        </section>
        <section>
            <div class="container mx-auto  px-4 xl:px-0 py-10 md:py-20 grid lg:grid-cols-2">

                <div>
                    <p class="text-primary pb-2 text-lg">E-Commerce</p>
                    <h2 class="font-mono font-black text-3xl text-center md:text-left">
                        Vendez en ligne
                    </h2>
                    <div class="mt-8  text-center md:text-left text-gray-700 leading-relaxed">
                        Vous souhaitez vendre sur Internet, la vente sur internet requiert une solution adaptée qui saura
                        présenter vos produits et vous permettre de gérer efficacement tout le processus de vente ainsi que
                        votre catalogue produit. Le tout présenté de la meilleure manière pour inciter les internautes à
                        commander chez vous.
                    </div>
                    <ButtonPrimary :internal="true" link="/contact" title="Je vends mes produits"
                        addedclass="bg-primary text-white hover:bg-accent active:bg-accent" />


                </div>
                <div>
                    <img src="/img/ecommerce.png" alt="Ecommerce" class="block w-10/12 mx-auto py-10 lg:py-0">
                </div>
            </div>
        </section>
        <section class="bg-dark text-white">
            <div class="container mx-auto py-20 ">
                <h2 class="font-mono font-black text-3xl text-center md:text-left">
                    Vous avez un doute ou une question sur votre futur site ?
                </h2>
                <div class="mt-8  text-center md:text-left leading-relaxed">
                    Laissez vous guider l’esprit tranquille, contactez un expert qui saura vous proposer la meilleure
                    solution pour votre besoin !
                </div>
                <div>
                    <ButtonPrimary :internal="true" link="/contact" title="Je contacte un expert"
                        addedclass="bg-primary text-white hover:bg-accent active:bg-accent" />
                </div>


            </div>
        </section>
        <div class="text-xl font-mono font-bold text-black text-center pt-20">
            Vous souhaitez mettre en avant votre activité sur internet ?
        </div>
        <section>
            <div class="container mx-auto  px-4 xl:px-0 py-10 md:py-20 grid lg:grid-cols-2">

                <div>
                    <p class="text-primary pb-2 text-lg">Hébergement</p>
                    <h2 class="font-mono font-black text-3xl text-center md:text-left">
                        Choisissez une solution<br> adaptée à votre site
                    </h2>
                    <div class="mt-8  text-center md:text-left text-gray-700 leading-relaxed">
                        Vous avez un site internet mais vous ne savez pas si celui-ci est correctement hébergé, est ce que
                        votre hébergement est adapté à celui-ci? Est-il vulnérable ? Contactez moi afin de faire un point
                        sur la situation. Si vous souhaitez aller plus loin, je peux également vous proposer de gérer votre
                        hébergement, vous ne serez plus embêté par ces problèmes techniques complexes et stressants.
                    </div>
                    <ButtonPrimary :internal="true" link="/contact" :title="homeData.button"
                        addedclass="bg-primary text-white hover:bg-accent active:bg-accent" />

                </div>
                <div>
                </div>
            </div>
        </section>
        <section class="bg-dark text-white">
            <div class="container mx-auto py-20">
                <h2 class="font-mono font-black text-3xl text-center md:text-left">
                    Encore un mail de votre service d’hébergement ?
                </h2>
                <div class="mt-8  text-center md:text-left leading-relaxed">
                    Vous cherchez à mettre à jour votre vesion de PHP ou a vous assurez que votre site n’est pas vulnérable
                    ?
                </div>
                <div>
                    <ButtonPrimary :internal="true" link="/contact" title="Contactez moi !"
                        addedclass="bg-primary text-white hover:bg-accent active:bg-accent" />
                </div>

            </div>
        </section>
        <div class="text-xl font-mono font-bold text-black text-center pt-20">
            Vous avez un problème informatique ?
        </div>
        <section>
            <div class="container mx-auto  px-4 xl:px-0 py-10 md:py-20 grid lg:grid-cols-2">

                <div>
                    <p class="text-primary pb-2 text-lg">Support</p>
                    <h2 class="font-mono font-black text-3xl text-center md:text-left">
                        Corrigez vos problèmes<br>informatiques
                    </h2>
                    <div class="mt-8  text-center md:text-left text-gray-700 leading-relaxed">
                        Vous avez un problème sur votre ordinateur ? Celui-ci est lent ? Votre Wifi fonctionne mal ? Vous
                        souhaitez tout simplement un renseignement pour acheter un nouvel équipement ? N’hésitez pas à me
                        contacter pour vous conseiller dans la résolution de vos problèmes?
                    </div>
                    <ButtonPrimary :internal="true" link="/contact" :title="homeData.button"
                        addedclass="bg-primary text-white hover:bg-accent active:bg-accent" />

                </div>
                <div>
                </div>
            </div>
        </section>
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
