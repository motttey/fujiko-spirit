<template>
  <div class="w-full flex justify-center pb-3 pl-0 pr-0 transition sm:bottom-0 sm:left-0">
    <div 
      class="flex flex-row justify-center items-center"
      id="abstract"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2">
        <div class="h-[300px] min-h-[300px] flex-shrink-0 sm:h-screen items-center text-center">
          <img 
            class="cover-img w-full h-full object-center object-cover"
            loading="lazy"
            src="~/assets/img/fs3_hyoushi_landing.webp" 
            alt="FS3号 表紙画像"
          />
        </div>
        <div class="p-6 mx-8 my-6 items-center align-middle bg-contain bg-no-repeat max-w-none">
          <h2 class="text-lg md:text-2xl font-bold">藤子不二雄オマージュマガジン</h2>
          <h1 class="text-2xl md:text-3xl font-bold">フジコ・スピリット</h1>
          <p class="text-right text-md md:text-lg font-semibold max-w-lg">by 
            <a class="text-blue-600" href="https://webcatalog-free.circle.ms/Circle/16802791">カンヅメカン</a>
          </p>
          <blockquote class="text-md text-gray-900 dark:text-white my-10">
            <p class="text-justify text-sm font-semibold max-w-lg">
              ドラえもん、オバQ、怪物くんなど<br/>
              数多の名作漫画を生み出した<br/>
              藤子不二雄先生。<br/>
              そんな藤子先生の作品に<br/>
              感化されたファンによる<br/>
              オリジナル・一次創作合同誌です！<br/>
              今回のテーマは「殻をやぶれ！」<br/>
              なんと人数は驚異の38名！<br/>
              総ページ数は289ページ！<br/>
              楽しめ！<br/>
            </p>
            <p class="text-right text-md font-bold max-w-lg">
              ― 主催 ともあき・ザ・ビッグシティ (<a class="text-blue-600" href="https://twitter.com/yjmtomoaki" target="_blank">@yjmtomoaki</a>)
            </p>
          </blockquote>
          <img 
            class="my-4 items-center text-center max-w-sm w-full object-full"
            src="~/assets/img/fs3_hyoushi.webp" 
            alt="FS3号の表紙/裏表紙"
          />
          <h2 class="mt-8 mb-4 text-xl md:text-2xl font-bold">
            詳細情報
          </h2>
          <p class="my-4 text-l md:text-xl">最新号(第3号)をC107で頒布します!</p>
          <ul class="space-y-1 max-w-md text-sm list-disc list-inside">
            <li>
              コミックマーケット107 (C107)
            </li>
            <li>
              頒布場所: <span class="font-semibold">1日目(12/30) 東4イ03-a パラレルソレイユ</span>
            </li>
            <li>
              頒布価格: <span class="font-semibold">2,000円</span>
            </li>
            <li>
              内容: <span class="font-semibold">A5 289ページ</span>
            </li>
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
  <div class="scroll-smooth my-8">
    <div id="distributions">
      <div class="mx-5 md:mx-15 my-12 text-center lign-middle">
        <h1 class="text-3xl items-center font-medium">バックナンバー</h1>
        <div class="flex justify-center items-center align-middle">
          <div 
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch align-middle"
          >
            <div class=
              "max-w-sm my-6 mx-5 rounded overflow-hidden shadow-lg" 
              v-for="(item, index) in FS_BACK_NUMBER"
              v-bind:key="index"
            > 
              <a :href="item.url" target=”_blank”>
                <img 
                  class="publish-content-img w-full min-h-[84px] object-contain"
                  :src="getImageUrl(item.src)" 
                  :alt="item.name"
                  loading="lazy"
                />
              </a>
              <div class="mx-5 mt-5">
                <div class="font-bold text-lg mb-2 text-left">
                  {{item.name}}
                </div>
                <p class="text-gray-700 text-sm text-left font-semibold">
                  {{item.description}}
                </p>
                <p 
                  class="text-gray-700 text-sm text-left mt-2"
                  v-if="item.subdescription"
                >
                  {{item.subdescription}}
                </p>
                <!---
                <p class="text-gray-700 text-sm text-left">
                  <a class="text-blue-600" :href="item.url" target=”_blank”>[詳細情報]</a>
                </p>
                -->
                <p class="text-gray-700 text-sm text-left" v-if="item.onlineOrderUrl">
                  <a class="text-blue-600" :href="item.onlineOrderUrl" target=”_blank”>[オンライン販売]</a>
                  <span 
                    class="inline-block bg-gray-600 rounded-full mx-2 px-2 py-0 text-sm font-semibold text-gray-100 mr-2 mb-2"
                    v-if="item.soldout"
                  >
                    売り切れ
                  </span>
                </p>
              </div>
              <div class="px-6 pt-4 pb-2 text-left">
                <span 
                  class="inline-block bg-red-600 rounded-full px-3 py-1 text-sm font-semibold text-gray-100 mr-2 mb-2"
                  v-if="item.new"
                >
                  新刊
                </span>
                <span 
                  class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                  v-if="item.size || item.pages"
                >
                  {{item.size}} {{item.pages}}
                </span>
                <span 
                    class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-bold text-gray-700 mr-2 mb-2"
                    v-if="item.price"
                  >
                    {{item.price}}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default defineComponent({
  async setup() {
    const FS_BACK_NUMBER = [
    {
        "id": 1,
        "name": "フジコ・スピリット第0号",
        "description": "パイロット版",
        "subdescription": "コミックマーケット101頒布",
        "src": "fs0_hyoushi",
        "url": "https://yjmtomoaki.booth.pm/items/4446490",
        "new": false,
        "soldout": true,
        "size": "A5",
        "pages": "48ページ",
        "price": "580円",
        "onlineOrderUrl": "https://yjmtomoaki.booth.pm/items/4446490"
       },
       {
        "id": 2,
        "name": "フジコ・スピリット第1号",
        "description": "テーマ「すこし・ふしぎ」",
        "subdescription": "コミックマーケット103頒布",
        "src": "fs1_hyoushi",
        "url": "https://www.pixiv.net/artworks/103332022",
        "new": false,
        "soldout": false,
        "size": "A5",
        "pages": "208ページ",
        "price": "1,800円",
        "onlineOrderUrl": "https://yjmtomoaki.booth.pm/items/4446490"
       },
       {
        "id": 3,
        "name": "フジコ・スピリット第2号",
        "description": "テーマ「インターネット」",
        "subdescription": "サンクリ2025Winter頒布",
        "src": "fs2_hyoushi",
        "url": "https://www.pixiv.net/artworks/66256659",
        "new": false,
        "soldout": false,
        "size": "A5",
        "pages": "210ページ",
        "price": "1,800円",
        "onlineOrderUrl": "https://yjmtomoaki.booth.pm/items/5330491"
       },
    ]

    const getImageUrl = (src: string) => {
      const imageUrl = new URL(`./assets/img/${src}.webp`, import.meta.url).href
      return imageUrl
    }

    return {
      FS_BACK_NUMBER,
      getImageUrl
    }
  }
})
</script>
