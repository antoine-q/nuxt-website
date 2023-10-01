export default {
    modules: ['@nuxt/content','@nuxtjs/gtm'],
    target: 'static',
    buildModules: ['@nuxtjs/tailwindcss', '@nuxtjs/google-fonts'],
    components: true,
    googleFonts: {
        display: "swap",
        families: {
            Lato: {
                wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
            },
            "Roboto Mono": {
                wght: [100, 200, 300, 400, 500, 600, 700, 800, 900]
            }
        }
    },
    plugins: [
        '~/plugins/gtm.js'
    ],
    head: {
        meta: [
            {charset : 'utf-8'},
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {name: 'robots', content: 'nodindex, nofollow'},
            {name: 'language', content: 'French'},
        ],
        link: [
            {rel: 'icon', type: 'image/png', sizes: '16x16', href:'favicon/favicon-16x16.png'},
            {rel: 'icon', type: 'image/png', sizes: '32x32', href:'favicon/favicon-32x32.png'},
            {rel: 'icon', type: 'image/x-icon', href:'favicon/favicon.ico'}
        ]
    }
}