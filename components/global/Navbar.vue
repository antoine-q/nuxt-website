<template>
    <nav class="mt-7 mb-4">
        <div class="container mx-auto flex justify-between">
            <p class="text-2xl p-3 font-bold">
                🚧 Website under construction 🚧
            </p>
            <ul class="flex flex-wrap flex-row justify-end">
                <NuxtLink to="/" class="p-3 font-bold text-xl">Tonka</NuxtLink>
                <NuxtLink to="/blog" class="p-3 font-bold text-xl">Blog</NuxtLink>
                <NuxtLink to="/about" class="p-3 font-bold text-xl">About</NuxtLink>
                <NuxtLink to="/contact" class="p-3 font-bold text-xl">Contact</NuxtLink>
                
            </ul>
        </div>
    </nav>
</template>

<style scoped>
a.nuxt-link-exact-active::after,a:hover::after{
    
    
    
    opacity: 1;
    
}
a::after{
    content: "";
    width: 100%;
    height: 2px;
    background-color: black;
    display: block;
    opacity: 0;
    }
</style>