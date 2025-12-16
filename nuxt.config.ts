import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  app:{
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=M+PLUS+2:wght@100;200;300;400;500;600;700;800;900&display=swap' }
      ],
      htmlAttrs: {
        lang: 'ja',
      },
      title: '藤子不二雄オマージュマガジン フジコ・スピリット',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'copyright', content: '2025 Motigetsu Robot Factory.' },
        { key: 'tw-card', name: 'twitter:card', content: 'summary_large_image'},
        { key: 'tw-site', name: 'twitter:site', content: '@mt_tg' },
        { key: 'og:url', property: 'og:url', content: 'https://motttey.github.io/c101/' },
        { key: 'og:site-name', property: 'og:site_name', content: '藤子不二雄オマージュマガジン フジコ・スピリット' },
        { key: 'og:title', property: 'og:title', content: '藤子不二雄オマージュマガジン フジコ・スピリット' },
        { key: 'og:type', property: 'og:type', content: 'article' },
        { key: 'og:description', property: 'og:description', content: 'サークル「カンヅメカン」によるドラえもんや藤子不二雄作品に関する一次創作合同「フジコ・スピリット」の紹介ページ' },
        { key: 'og:image', property: 'og:image', content: 'https://motttey.github.io/c101/_nuxt/hyoushi.d0bb9595.jpg' },
        { key: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { key: 'robots', name: 'robots', content: 'index, follow'},
        { key: 'author', property: 'author', content: '望月田吾作' },
        { key: 'keywords', property: 'keywords', content: '同人誌,合同誌,ドラえもん,藤子不二雄,コミケ,矢島ともあき,望月田吾作' },
        { key: 'description', name: 'description', content: 'サークル「カンヅメカン」によるドラえもんや藤子不二雄作品に関する一次創作合同「フジコ・スピリット」の紹介ページ' }
      ],
    },
  }
})
