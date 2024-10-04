<template>
  <div
    class="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    :class="`${colorMode.preference === 'dark' ? 'dark' : ''}`"
  >
    <header class="hero min-h-1/4 bg-cover bg-top lg:bg-center xl:bg-bottom">
      <div class="pt-0 md:pt-2"></div>
      <TopNav />
    </header>

    <main><slot /></main>

    <CookieBanner />

    <footer
      class="border-t lg:border-gray-900/10 dark:border-gray-50/[0.2] dark:bg-gray-900 flex items-center justify-center"
    >
      <section class="px-4 lg:px-8">
        <div
          class="w-full py-4 text-center md:text-left flex flex-col space-y-4 md:space-y-0 md:space-x-20 items-center md:flex-row"
        >
          <div class="text-xs text-gray-900 dark:text-gray-400">
            <div>
              Copyright ©2024
              <span class="text-blue-500 dark:text-yellow-300">•</span>
              Aravinda
              <span class="text-blue-500 dark:text-yellow-300">•</span>

              <NuxtLink to="/privacy" target="_blank"> Privacy </NuxtLink>
            </div>
            <div
              class="flex flex-col md:flex-row space-x-2 items-center md:float-right"
            ></div>
          </div>
        </div>
      </section>
    </footer>
  </div>
</template>

<script setup>
const colorMode = useColorMode(); //To toggle the theme using the nuxtjs colormode
</script>
