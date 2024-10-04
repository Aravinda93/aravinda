<template>
  <div
    class="flex items-center space-x-2 bg-gray-100 dark:bg-gray-900 p-3 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:scale-105"
  >
    <!-- Icon -->
    <div v-if="icon" class="flex-shrink-0">
      <Icon
        :name="icon"
        class="w-6 h-6 text-gray-800 dark:text-gray-100 transition-all duration-150 hover:text-blue-500 dark:hover:text-blue-400 hover:scale-125"
      />
    </div>

    <!-- Skill text -->
    <span
      class="text-sm font-semibold text-gray-800 dark:text-yellow-200 transition-colors duration-500"
    >
      {{ text }}
    </span>
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