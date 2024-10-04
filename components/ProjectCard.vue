<template>
  <div
    class="bg-gray-200 dark:bg-gray-800 max-w-4xl w-full p-8 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl duration-500"
  >
    <!-- Project Name and Description -->
    <div class="flex items-center mb-6 space-x-4">
      <div
        class="w-16 h-16 rounded-full shadow-lg bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center"
      >
        <span class="text-white text-2xl font-bold">{{ projectInitials }}</span>
      </div>
      <div class="flex flex-col">
        <h3
          class="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white"
        >
          {{ projectName }}
        </h3>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          {{ projectDescription }}
        </p>
      </div>
    </div>

    <!-- Technology Stack -->
    <div class="mb-6">
      <div class="flex flex-wrap gap-3">
        <span
          v-for="(tech, index) in techStack"
          :key="index"
          class="bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full shadow-md text-sm"
        >
          {{ tech }}
        </span>
      </div>
    </div>

    <!-- Tasks and Highlights -->
    <ul
      class="space-y-4 text-md text-gray-700 dark:text-gray-300 leading-relaxed"
    >
      <li
        v-for="(highlight, index) in highlights"
        :key="index"
        class="flex items-start"
      >
        <span class="mr-3 text-blue-500 dark:text-yellow-300">•</span>
        {{ highlight }}
      </li>
    </ul>

    <!-- Project Link -->
    <div class="flex items-center justify-end space-x-4 space-y-4 mt-4">
      <!-- GitHub Link -->
      <a
        v-if="githubLink"
        target="_blank"
        :href="githubLink"
        class="mt-4 flex items-center justify-center w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full text-gray-900 dark:text-white group hover:bg-gray-300 dark:hover:bg-gray-600 transition-transform transform hover:scale-110 hover:rotate-12"
      >
        <Icon name="mdi:github" class="w-10 h-10" />
      </a>

      <a
        v-if="projectLink"
        :href="projectLink"
        target="_blank"
        class="inline-block text-lg font-semibold text-blue-500 dark:text-yellow-300 hover:underline hover:text-blue-700 dark:hover:text-yellow-400 transition-colors hover:scale-105 transform"
      >
        Visit Project →
      </a>
    </div>
  </div>
</template>
  
<script setup>
const props = defineProps({
  projectName: { type: String, required: false },
  projectDescription: { type: String, required: false },
  techStack: { type: Array, required: false },
  highlights: { type: Array, required: false },
  projectLink: { type: String, required: false },
  githubLink: { type: String, required: false },
});

const projectInitials = computed(() =>
  props.projectName
    .split(" ")
    .map((word) => word[0])
    .join("")
    .substring(0, 3)
);
</script> 