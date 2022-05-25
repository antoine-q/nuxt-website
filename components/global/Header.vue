<template>
<div class="group relative">
    <section class="bg-green-300">
        <div class="container mx-auto max-w-6xl py-20 px-4 xl:px-0 text-center">
            <TitleH1 :title="this.title"/>
            <slot/>
        </div>
    </section>
    <component :is="this.wave"/>
</div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            required: true,
        },
        wave:{
            required: true,
        }
    }
}
</script>