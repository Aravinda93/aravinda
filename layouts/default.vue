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
  </div>
</template>

<script setup>
const colorMode = useColorMode(); //To toggle the theme using the nuxtjs colormode
</script>
