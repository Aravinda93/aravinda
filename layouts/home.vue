<template>
  <div
    class="h-full"
    :class="`${colorMode.preference === 'dark' ? 'dark' : ''}`"
  >
    <header
      class="hero min-h-[30%] bg-cover bg-top md:min-h-[35%] lg:bg-center"
    >
      <div class="pt-0 md:pt-2"></div>
      <TopNav />
      <h2
        v-if="message"
        class="mx-auto pt-24 text-center text-7xl font-bold tracking-wide text-yellow-100 md:text-8xl lg:max-w-[60%] lg:pt-32 lg:text-9xl"
      >
        {{ message }}
      </h2>
      <h2
        v-else
        class="pt-24 text-center text-4xl md:text-9xl font-bold tracking-wide text-yellow-100 md:text-[12em] lg:pt-32"
      >
        Welcome!!!
      </h2>
    </header>

    <main><slot /></main>
  </div>
</template>

<script setup>
const layoutCustomProps = useAttrs();
const message = layoutCustomProps.message;

const colorMode = useColorMode(); //To toggle the theme using the nuxtjs colormode
</script>

<style scoped>
.hero {
  background-image: linear-gradient(rgba(0, 0, 0, 0) 10%, rgba(9, 0, 37, 1) 80%),
    url("/images/hero.jpg");
}
</style>
