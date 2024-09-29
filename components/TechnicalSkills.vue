<template>
  <div
    class="group relative flex flex-col items-center justify-center px-4 py-6 rounded-xl bg-white bg-opacity-20 backdrop-blur-lg shadow-lg dark:bg-gray-800 dark:bg-opacity-20 transition-transform duration-500 ease-in-out transform hover:scale-125 hover:shadow-2xl hover:z-40"
  >
    <Icon
      v-if="icon"
      :icon="icon"
      class="w-12 h-12 text-gray-800 dark:text-gray-200 transition-colors duration-500"
    />

    <span
      :class="icon ? 'mt-4' : ''"
      class="text-lg font-semibold text-gray-800 dark:text-gray-200 transition-colors duration-500"
    >
      {{ text }}
    </span>

    <!-- Floating animation effect -->
    <div
      class="absolute inset-0 z-[-1] w-full h-full rounded-xl bg-gradient-to-r opacity-0 blur-lg group-hover:opacity-80 transition-opacity duration-700"
    />
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

const props = defineProps({
  icon: {
    type: String,
    required: false, // Icon associated with the skill
  },
  text: {
    type: String,
    required: false, // Text associated with the skill
  },
});
</script>