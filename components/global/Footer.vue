<template>
<div>
    <div class="group relative">
      <div class="hidden md:block wave-3">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    <footer class="pt-10 p-10 text-center md:text-left bg-green-300 text-white">
        <div class="flex flex-col-reverse md:flex-row flex-wrap container mx-auto ">
            <div class="footer-copyright w-full md:w-1/2 mt-10 text-center">
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