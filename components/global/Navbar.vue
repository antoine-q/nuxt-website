<template>
    <nav class="filter mt-0 md:mt-7 mb-4 fixed md:static w-full bg-white drop-shadow-sm md:drop-shadow-none">
        <div class="container mx-auto flex flex-wrap flex-col md:flex-row justify-end">
            <ul class="desktop-nav hidden md:flex flex-wrap flex-row justify-end">
                <NuxtLink to="/" class="p-3 font-bold text-xl">Antoine</NuxtLink>
                <NuxtLink to="/blog" class="p-3 font-bold text-xl"
                    >Blog</NuxtLink
                >
                <NuxtLink to="/about" class="p-3 font-bold text-xl"
                    >À propos</NuxtLink
                >
                <NuxtLink to="/contact" class="p-3 font-bold text-xl"
                    >Contact</NuxtLink
                >
            </ul>
            <div class="md:hidden flex items-center my-4 w-min self-end">
                <button class="outline-none mobile-menu-button" v-on:click="toggle_mobile_menu()">
                    <svg
                        class="w-10 h-10 text-gray-500 mr-5"
                        x-show="!showMenu"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        viewBox="0 0 24 24"
                        stroke="#000000"
                    >
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            
        </div>
        <div class="hidden mobile-menu transition ease-in-out duration-150 w-full">
                <ul class="flex flex-wrap    flex-col justify-center text-center">
                <NuxtLink to="/" class="p-3 font-bold text-xl">Antoine</NuxtLink>
                <NuxtLink to="/blog" class="p-3 font-bold text-xl"
                    >Blog</NuxtLink
                >
                <NuxtLink to="/about" class="p-3 font-bold text-xl"
                    >About</NuxtLink
                >
                <NuxtLink to="/contact" class="p-3 font-bold text-xl"
                    >Contact</NuxtLink
                >
            </ul>
        </div>
    </nav>
</template>

<style scoped>
.desktop-nav a.nuxt-link-exact-active::after,
.desktop-nav a:hover::after {
    opacity: 1;
}
.desktop-nav a::after {
    content: "";
    width: 100%;
    height: 2px;
    background-color: black;
    display: block;
    opacity: 0;
}
</style>

<script>
export default {
    methods: {
        toggle_mobile_menu: function(){
            const menu = document.querySelector('.mobile-menu');
            menu.classList.toggle('hidden');
        },
        remove_banner: function(){
            const banner = document.querySelector('.banner');
            banner.classList.add('hidden');
        }
    }
}
</script>
