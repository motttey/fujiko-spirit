<template>
  <nav
    class="fixed left-0 top-0 h-150 w-6 z-20 bg-white/60 backdrop-blur flex flex-col items-center justify-center gap-32"
  >
    <div
      v-for="section in navItems"
      :key="section.id"
      class="relative flex items-center justify-center w-full"
    >
      <button
        class="w-4 h-4 flex text-right items-center justify-center border-2 border-black transition-all duration-300 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] z-20"
        :class="activeSection === section.id ? 'bg-white' : 'bg-black'"
        @click="scrollToSection(section.id)"
      >
        <div v-if="activeSection === section.id" class="w-2 h-2 bg-black" />
        <span
          class="whitespace-nowrap -rotate-90 -translate-y-16 text-[10px] md:text-xs font-black tracking-widest transition-colors duration-300"
          :class="activeSection === section.id ? 'text-black' : 'text-gray-400'"
          style="width: 120px; text-align: center"
        >
          {{ section.label.toUpperCase() }}
        </span>
      </button>
    </div>
  </nav>
  <div id="container" class="bg-white">
    <div
      class="bg-white border-t-5 border-b-2 border-yellow-200 text-gray-700 px-4 py-3 px-10 mb-2"
      role="alert"
    >
      <p class="font-bold">カンヅメカンからのお知らせ</p>
      <p class="text-sm">
        <span class="font-bold"
          >フジコ・スピリットの第3号(最新号)を通信販売開始</span
        >しました!
        <a
          class="text-blue-600 font-semibold"
          target="_blank"
          href="https://yjmtomoaki.booth.pm/items/7826525"
          >[ともあき・ザ・ビッグシティのBOOTH]</a
        >より購入いただけます. <br />
      </p>
    </div>
    <div
      id="abstract"
      data-section
      class="w-full flex justify-center pb-3 pl-0 pr-0 transition sm:bottom-0 sm:left-0"
    >
      <div class="flex flex-row justify-center items-center">
        <div class="grid grid-cols-1 sm:grid-cols-2">
          <div
            class="h-[300px] min-h-[300px] flex-shrink-0 sm:h-screen items-center text-center"
          >
            <img
              class="cover-img w-full h-full object-center object-cover"
              loading="lazy"
              src="~/assets/img/fs3_hyoushi_landing.webp"
              alt="FS3号 表紙画像"
            />
          </div>
          <div
            class="p-6 mx-8 my-4 items-center align-middle bg-contain bg-no-repeat max-w-none"
          >
            <h2 class="text-lg md:text-2xl font-bold">
              藤子不二雄オマージュマガジン
            </h2>
            <h1 class="text-2xl md:text-3xl font-bold">フジコ・スピリット</h1>
            <p class="text-right text-md md:text-lg font-semibold max-w-lg">
              by
              <a
                class="text-blue-600"
                href="https://webcatalog-free.circle.ms/Circle/16802791"
                >カンヅメカン</a
              >
            </p>
            <blockquote class="text-md text-gray-900 dark:text-white my-4">
              <p class="text-justify text-sm max-w-lg">
                ドラえもん、オバQ、怪物くんなど数多の名作漫画を生み出した藤子不二雄先生。そんな藤子先生の作品に感化されたファンによる、オリジナル・一次創作合同誌です。<br />
                <br />
                第三弾のテーマは<span class="font-bold">「殻を破れ！」</span>
                <br />
                漫画、イラスト、小説、絵画など。一次創作であればなんでもあり！なんと38名のクリエイターが集結！
                <br />
                ページは<span class="font-bold">驚異の289ページ！</span><br />
                読み応え抜群な不思議な合同誌です！<br />
              </p>
              <p class="text-right mt-4 text-md font-bold max-w-lg">
                ― 主催 ともあき・ザ・ビッグシティ (<a
                  class="text-blue-600"
                  href="https://twitter.com/yjmtomoaki"
                  target="_blank"
                  >@yjmtomoaki</a
                >)
              </p>
            </blockquote>
            <div
              class="img-container flex flex-row justify-center items-center"
            >
              <img
                class="my-4 max-w-md w-full object-full"
                src="~/assets/img/fs3_hyoushi.webp"
                alt="FS3号の表紙/裏表紙"
              />
            </div>
            <h3 class="mt-8 mb-4 text-l md:text-xl font-bold">詳細情報</h3>
            <p class="my-4 text-md font-semibold md:text-l">
              第3号をC107で頒布しました.
              <a
                class="text-blue-600"
                href="https://yjmtomoaki.booth.pm/items/7826525"
                target="_blank"
                >BOOTH</a
              >でも絶賛通販中です! <br />
              <a
                class="text-blue-600 font-semibold"
                href="https://yjmtomoaki.booth.pm/items/7826525"
                target="_blank"
                >お得な全巻セット</a
              >もございますので, この機会に購入をご検討ください.
            </p>
            <ul class="space-y-1 max-w-md text-sm list-disc list-inside">
              <li>
                頒布場所:
                <span class="font-semibold"
                  >C107 1日目(12/30) 東4イ03-a
                  <a
                    class="text-blue-600"
                    href="https://webcatalog-free.circle.ms/Circle/11908281"
                    target="_blank"
                    >パラレルソレイユ</a
                  >
                </span>
              </li>
              <li>
                頒布価格:
                <span class="font-semibold">2,000円 (通販は2,200円)</span>
              </li>
              <li>内容: <span class="font-semibold">A5 289ページ</span></li>
              <!--
              <li>
                通販: <span class="font-semibold">
                  <a class="text-blue-600" href="https://yjmtomoaki.booth.pm/items/4446490">[BOOTH]</a>
                </span>
              </li> 
              -->
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="authors" data-section class="scroll-smooth my-16">
      <div class="max-w-6xl mx-auto px-5">
        <h2 class="text-3xl font-bold text-center mb-10">執筆者・作品紹介</h2>

        <div class="grid grid-cols-1 md:grid-cols-2 border-t border-gray-200">
          <div
            v-for="(item, index) in FS3_AUTHOR_LIST"
            :key="index"
            :class="[
              'flex items-center justify-between p-4 border-b border-gray-200 transition-colors',
              index % 2 === 0 ? 'bg-white' : 'bg-gray-800',
              [0, 1].includes((index - 1) % 4)
                ? 'md:bg-white'
                : 'md:bg-gray-800',
            ]"
          >
            <div class="flex-1 pr-4">
              <div class="flex items-center gap-2">
                <span
                  class="w-[50px] whitespace-nowrap inline-flex justify-center text-[10px] px-2 py-0.5 rounded bg-gray-200 text-gray-800 font-bold leading-none"
                >
                  {{ item.type }}
                </span>
                <span
                  :class="[
                    'text-sm md:text-md font-semibold mr-2',
                    index % 2 === 0 ? 'text-gray-900' : 'text-gray-100',
                    [0, 1].includes((index - 1) % 4)
                      ? 'md:text-gray-900'
                      : 'md:text-gray-100',
                  ]"
                  >{{ item.title }}</span
                >
              </div>
            </div>

            <div class="flex-shrink-0 text-right">
              <span
                :class="[
                  'text-sm md:text-md font-semibold',
                  index % 2 === 0 ? 'text-gray-900' : 'text-gray-100',
                  [0, 1].includes((index - 1) % 4)
                    ? 'md:text-gray-700'
                    : 'md:text-gray-300',
                ]"
                >{{ item.author }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="backNumber" data-section class="scroll-smooth my-16">
      <div id="distributions">
        <div class="mx-5 md:mx-15 my-12 text-center lign-middle">
          <h2 class="text-3xl font-bold text-center mb-10">バックナンバー</h2>

          <div class="flex justify-center items-center align-middle">
            <div
              class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch align-middle"
            >
              <div
                v-for="(item, index) in FS_BACK_NUMBER"
                :key="index"
                class="relative max-w-sm my-6 mx-5 rounded overflow-hidden shadow-lg"
                :class="item.soldout ? 'bg-gray-200' : 'bg-white'"
              >
                <div
                  v-if="item.soldout"
                  class="absolute top-0 left-0 w-full bg-red-600 text-white text-center py-1 text-sm font-bold z-10 shadow-sm"
                >
                  SOLD OUT
                </div>
                <a :href="item.url" target="”_blank”">
                  <img
                    class="publish-content-img w-full min-h-[84px] object-contain"
                    :src="getImageUrl(item.src)"
                    :alt="item.name"
                    loading="lazy"
                  />
                </a>
                <div class="mx-5 mt-5">
                  <div class="font-bold text-lg mb-2 text-left">
                    {{ item.name }}
                  </div>
                  <p class="text-gray-700 text-sm text-left font-semibold">
                    {{ item.description }}
                  </p>
                  <p
                    v-if="item.subdescription"
                    class="text-gray-700 text-sm text-left mt-2"
                  >
                    {{ item.subdescription }}
                  </p>
                  <!---
                  <p class="text-gray-700 text-sm text-left">
                    <a class="text-blue-600" :href="item.url" target=”_blank”>[詳細情報]</a>
                  </p>
                  -->
                  <p
                    v-if="item.onlineOrderUrl"
                    class="text-gray-700 text-sm text-left"
                  >
                    <a
                      class="text-blue-600"
                      :href="item.onlineOrderUrl"
                      target="”_blank”"
                      >[オンライン販売]</a
                    >
                  </p>
                </div>
                <div class="px-6 pt-4 pb-2 text-left">
                  <span
                    v-if="item.new"
                    class="inline-block bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2"
                  >
                    新刊
                  </span>
                  <span
                    v-if="item.size || item.pages"
                    class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  >
                    {{ item.size }} {{ item.pages }}
                  </span>
                  <span
                    v-if="item.price"
                    class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2 mb-2"
                  >
                    {{ item.price }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="footer" class="self-end space-y-2 mt-50 bg-gray-800 text-right">
      <p
        class="mx-5 text-md md:text-lg inline-block align-bottom text-white font-semibold"
      >
        © 2025 Tagosaku Mochiduki / ともあき・ザ・ビッグシティ
      </p>
    </div>
  </div>
  >
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { FS_BACK_NUMBER, FS3_AUTHOR_LIST } from "./assets/data/metadata";

const getImageUrl = (src: string) => {
  const baseURL = useRuntimeConfig().app.baseURL || "/";
  const base = baseURL.endsWith("/") ? baseURL.slice(0, -1) : baseURL;
  return `${base}/img/${src}.webp`;
};

const navItems = [
  { id: "abstract", label: "Top" },
  { id: "authors", label: "Authors" },
  { id: "backNumber", label: "Back Number" },
] as const;

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

// スクロール箇所のナビゲーションをactiveにする
const activeSection = ref<string>(navItems[0].id);
let observer: IntersectionObserver | null = null;

onMounted(async () => {
  await nextTick();

  const options = {
    root: null,
    // 判定位置の調整：画面中央（上部から40%〜60%の位置）にセクションが来たらアクティブにする
    rootMargin: "-40% 0px -40% 0px",
    threshold: [0, 0.1, 0.5],
  };

  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        activeSection.value = entry.target.id;
      }
    });
  }, options);

  const sections = document.querySelectorAll("[data-section]");
  sections.forEach((section) => {
    observer?.observe(section);
  });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});

useHead({
  bodyAttrs: {
    class: {
      "bg-gray-800": true,
    },
  },
});

// 検索結果のog image設定
const site = useSiteConfig();
const ogPath = "/img/fs3_hyoushi_landing.webp";
const ogUrl = new URL(ogPath, site.url).toString();

useSeoMeta({
  title: "Top",
  description:
    "ドラえもんや藤子不二雄作品に感化されたクリエイターによる一次創作合同「フジコ・スピリット」の紹介ページ",
  ogImage: ogUrl,
  twitterCard: "summary_large_image",
  twitterImage: ogUrl,
  robots: "index,follow,max-image-preview:large"
});
</script>
