<template>
    <section class="bg-green-300">
        <div class="container mx-auto py-40 text-center md:text-left">
            <h1 class="font-black text-white text-7xl">{{title}}</h1>
            <p class="text-white mt-14 text-xl">{{subtitle}}</p>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: "Antoine Queru"
        },
        subtitle: {
            type: String
        }
    }
}
</script>