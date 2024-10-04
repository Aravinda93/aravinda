<template>
  <div
    v-if="isVisible"
    class="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-4xl z-50 p-4 flex flex-col md:flex-row justify-between items-center space-y-4 bg-blue-50 dark:bg-blue-900 text-blue-900 dark:text-blue-50 shadow-lg rounded-t-xl opacity-90 ease-in-out transition duration-500"
  >
    <div class="flex flex-col text-center space-y-2">
      <p class="text-sm font-semibold">
        This site doesn't collect any data directly or indirectly, but it's
        hosted on GitHub Pages which may collect data.
      </p>
      <a
        href="https://docs.github.com/privacy"
        target="_blank"
        class="underline text-blue-700 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-200 transition duration-150 ease-in-out text-sm"
      >
        Learn more
      </a>
    </div>

    <button
      @click="hideBanner"
      class="px-5 py-3 ml-4 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400 text-white font-semibold rounded-lg transition duration-150 ease-in-out text-sm"
    >
      Got it!
    </button>
  </div>
</template>
  
  
<script setup>
const isVisible = ref(true);

function hideBanner() {
  isVisible.value = false;
}
</script>