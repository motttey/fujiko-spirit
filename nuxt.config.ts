import tailwindcss from "@tailwindcss/vite";

const DEPLOYMENT_URL = "https://fujiko-spirit.pages.dev/";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
      htmlAttrs: {
        lang: "ja",
      },
      title: "藤子不二雄オマージュマガジン フジコ・スピリット",
      meta: [
        { charset: "utf-8" },
        {
          name: "copyright",
          content: "Tomoaki the Big City / Tagosaku Mochiduki",
        },
        {
          key: "tw-card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        { key: "tw-site", name: "twitter:site", content: "@mt_tg" },
        {
          key: "og:url",
          property: "og:url",
          content: DEPLOYMENT_URL,
        },
        {
          key: "og:site-name",
          property: "og:site_name",
          content: "藤子不二雄オマージュマガジン フジコ・スピリット",
        },
        {
          key: "og:title",
          property: "og:title",
          content: "藤子不二雄オマージュマガジン フジコ・スピリット",
        },
        { key: "og:type", property: "og:type", content: "website" },
        {
          key: "og:description",
          property: "og:description",
          content:
            "サークル「カンヅメカン」によるドラえもんや藤子不二雄作品に関する一次創作合同「フジコ・スピリット」の紹介ページ",
        },
        {
          key: "og:image",
          property: "og:image",
          content: `${DEPLOYMENT_URL}img/fs3_hyoushi.webp`,
        },
        {
          key: "viewport",
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        { key: "author", name: "author", content: "望月田吾作" },
        {
          key: "keywords",
          name: "keywords",
          content:
            "同人誌,一次創作,ドラえもん,藤子不二雄,藤子・F・不二雄,藤子不二雄A,コミケ,矢島ともあき,望月田吾作,フジコ・スピリット,フジコスピリット",
        },
        {
          key: "description",
          name: "description",
          content:
            "サークル「カンヅメカン」によるドラえもんや藤子不二雄作品に関する一次創作合同「フジコ・スピリット」の紹介ページ",
        },
      ],
    },
  },

  fonts: {
    defaults: {
      weights: [400, 600, 700],
      styles: ["normal"],
      subsets: ["japanese"],
    },
    families: [{ name: "M PLUS 2", provider: "google" }],
  },

  site: {
    url: DEPLOYMENT_URL,
    name: "藤子不二雄オマージュマガジン フジコ・スピリット",
    description:
      "サークル「カンヅメカン」によるドラえもんや藤子不二雄作品に関する一次創作合同「フジコ・スピリット」の紹介ページ",
    defaultLocale: "ja",
  },

  gtag: {
    id: "G-XL0B6P06EX",
    config: {
      page_title: "藤子不二雄オマージュマガジン フジコ・スピリット",
    },
  },

  modules: [
    "@nuxt/fonts",
    "@nuxt/eslint",
    "@nuxtjs/seo",
    "nuxt-link-checker",
    "nuxt-gtag",
    "@nuxtjs/sitemap",
  ],
});
