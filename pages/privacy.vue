<template>
  <div
    class="flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100"
  >
    <div class="w-full max-w-4xl">
      <ContentDoc>
        <template v-slot="{ doc }">
          <article
            class="prose prose-lg lg:prose-xl dark:prose-invert mx-auto bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <div class="text-base leading-relaxed text-justify">
              <ContentRenderer :value="doc" />
            </div>
          </article>
        </template>
      </ContentDoc>
    </div>
  </div>
</template>

<style scoped>
:deep(.prose a) {
  @apply text-blue-500 underline hover:text-blue-700;
}
</style>