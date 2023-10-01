<template>
<div class="group relative">
    <section id="header">
        <div class="container mx-auto  py-20 px-4 xl:px-0 text-black grid grid-cols-2">
            <div>
                <TitleH1 :title="this.title"/>
                <slot/>
            </div>
            <div>

            </div>
        </div>
    </section>
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

<style>
#header{
    /* Hero top */

background: linear-gradient(104.44deg, #9F96FF -3.84%, #F0EAFC -3.83%, #61CEF2 34.61%, #F538B9 72.81%);
overflow: hidden;
position: relative;


}
#header::after{
    z-index: 0;
    top: 100%;
    position: absolute;
    content: " ";
    display: block;
    background-color: white;
    width: 110%;
    height: 19rem;
    transform: rotate(354deg);
    transform-origin: left;
}
</style>