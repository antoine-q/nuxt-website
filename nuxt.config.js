export default {
    modules: ['@nuxt/content'],
    target: 'static',
    buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
    components: true,
    googleFonts: {
        display: "swap",
        families: {
            Lato: {
            wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
            }
        }
    },
    head: {
        title: 'Antoine Queru -  Développeur web fullstack à Troyes en Champagne, France',
        meta: [
            {charset : 'utf-8'},
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {name: 'robots', content: 'nodindex, nofollow'},
            {name: 'language', content: 'French'},
            {name:'description', content: 'Antoine Queru, développeur web front end et back end à Troyes en Champagne. Développement de sites Internet, Landing pages et application Web'},
            {name:'twitter:description', content: 'Antoine Queru, développeur web front end et back end à Troyes en Champagne. Développement de sites Internet, Landing pages et application Web'},
            {property:'og:description', content: 'Antoine Queru, développeur web front end et back end à Troyes en Champagne. Développement de sites Internet, Landing pages et application Web'},
            {property:'og:title', content: 'Antoine Queru -  Développeur web fullstack à Troyes en Champagne, France'},
            {name:'twitter:title', content: 'Antoine Queru -  Développeur web fullstack à Troyes en Champange, France'},
        ],
        link: [
            {rel: 'icon', type: 'image/png', sizes: '16x16', href:'favicon/favicon-16x16.png'},
            {rel: 'icon', type: 'image/png', sizes: '32x32', href:'favicon/favicon-32x32.png'},
            {rel: 'icon', type: 'image/x-icon', href:'favicon/favicon.ico'}
        ]
    }
}