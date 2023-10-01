<template>
<div>
    <div class="group">
    <footer class="pt-10 p-10 text-center md:text-left bg-light text-black text-xs">
        <div class="flex flex-col-reverse md:flex-row flex-wrap container mx-auto ">
            <div class="footer-copyright w-full md:w-1/2 mt-10 ">
                © 2022 | Antoine Queru
            </div>
            <div class="footer-menu w-full md:w-1/2">
                <ul>
                    <li><NuxtLink to="/contact">Contact</NuxtLink></li>
                    <li><NuxtLink to="/about">À propos</NuxtLink></li>
                    <li><NuxtLink to="/infos/legal-notice">Mentions légales</NuxtLink></li>
                </ul>
            </div>
        </div>
    </footer>
    </div>
</div>
</template>

<style>
.wave-3 {
    position: absolute;
    bottom: 99.8%;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
    transform: rotate(180deg);
}

.wave-3 svg {
    position: relative;
    display: block;
    width: calc(232% + 1.3px);
    height: 108px;
}

.wave-3 .shape-fill {
    fill: #6ee7b7;
}
</style>