<template>
<main>
    <section class="bg-green-300">
        <div class="container mx-auto py-40 text-center md:text-left">
            <h1 class="font-black text-white text-7xl">{{article.title}}</h1>
            <p class="text-white mt-14 text-xl">{{article.description}}</p>
            <p class="text-white mt-14 text-xl"> Article last updated at : {{formatDate(article.updatedAt)}}</p>
        </div>
    </section>
    <section>
        <div class="container mx-auto  py-40">
            <nuxt-content :document="article" class="max-w-3xl mx-auto"/>
        </div>
    </section>
</main>
</template>

<script>
export default {
    async asyncData({ $content, params}){
        const article = await $content('articles', params.slug).fetch();

        const [prev,next] = await $content('articles')
            .only(['title', 'slug'])
            .sortBy('createdAt', 'asc')
            .surround(params.slug)
            .fetch()

        return {article,
        prev,
        next
        };
    },
    methods: {
        formatDate(date){
            const options = {year: 'numeric', month: 'long', day:'numeric'}
            return new Date(date).toLocaleString('en', options)
        }
    }
}
</script>

<style>
  .nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
  }
  .nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
  }
  .nuxt-content p {
    margin-bottom: 20px;
  }
  .icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}

</style>