<template>
  <div class="w-full flex justify-center pb-3 pl-0 pr-0 transition sm:fixed sm:bottom-0 sm:left-0">
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
</template>
