<template>
  <div
    class="group relative flex flex-col items-center justify-center p-6 rounded-xl bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg shadow-lg dark:shadow-xl transition-transform duration-500 ease-in-out transform hover:scale-110 hover:shadow-2xl hover:z-40 hover:text-red-500"
  >
    <!-- Icon or empty div for spacing -->
    <div v-if="icon" class="w-12 h-12">
      <Icon
        :name="icon"
        class="w-full h-full text-gray-700 dark:text-yellow-200 transition-colors duration-500"
      />
    </div>
    <div v-else class="h-0"></div>

    <!-- Skill text -->
    <span
      :class="icon ? 'mt-4' : ''"
      class="text-center text-lg font-semibold text-gray-900 dark:text-yellow-100 transition-colors duration-500"
    >
      {{ text }}
    </span>

    <!-- Gradient floating effect -->
    <div
      class="absolute inset-0 z-[-1] w-full h-full rounded-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-0 group-hover:opacity-90 transition-opacity duration-700 blur-md"
    />
  </div>
</template>

<script setup>
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