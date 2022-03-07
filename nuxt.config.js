export default {
    modules: ['@nuxt/content'],
    target: 'static',
    buildModules: ['@nuxtjs/tailwindcss', "@nuxtjs/svg"],
    components: true,
    head: {
        title: 'Antoine Queru - French Developper',
        meta: [
            {charset : 'utf-8'},
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {name: 'robots', content: 'nodindex, nofollow'}
        ],
        link: [
            {rel: 'icon', type: 'image/png', sizes: '16x16', href:'favicon/favicon-16x16.png'},
            {rel: 'icon', type: 'image/png', sizes: '32x32', href:'favicon/favicon-32x32.png'},
            {rel: 'icon', type: 'image/x-icon', href:'favicon/favicon.ico'}
        ]
    }
}