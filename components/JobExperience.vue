<template>
  <div
    class="bg-gray-200 dark:bg-gray-800 max-w-4xl w-full p-8 rounded-xl shadow-lg transition-all transform hover:scale-105 hover:shadow-2xl duration-500"
  >
    <div class="flex items-center mb-6 space-x-4">
      <img
        :src="companyLogo"
        alt="Company Logo"
        class="w-16 h-16 rounded-full shadow-lg"
      />
      <div
        class="p-6 dark:bg-gray-800 rounded-lg shadow-md transition-transform transform hover:scale-105 duration-500"
      >
        <h3
          class="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white"
        >
          {{ companyName }}
        </h3>
        <div
          class="flex flex-col md:flex-row md:space-x-4 text-md sm:text-lg text-gray-600 dark:text-gray-400 mt-2"
        >
          <p>{{ duration }}</p>
          <p class="hidden md:block">|</p>
          <p>City: {{ city }}</p>
          <p class="hidden md:block">|</p>
          <p>Country: {{ country }}</p>
        </div>

        <div
          class="flex flex-col md:flex-row md:space-x-4 text-md sm:text-lg text-gray-600 dark:text-gray-400 mt-2"
        >
          <p>
            Website:
            <a
              :href="website"
              target="_blank"
              class="text-blue-500 hover:underline dark:text-yellow-300"
            >
              {{ website }}
            </a>
          </p>
        </div>
      </div>
    </div>

    <ul
      class="space-y-4 text-md text-gray-700 dark:text-gray-300 leading-relaxed"
    >
      <li v-for="(task, index) in tasks" :key="index" class="flex items-start">
        <span class="mr-3 text-blue-500 dark:text-yellow-300">•</span>
        {{ task }}
      </li>
    </ul>
  </div>
</template>

<script setup>
const props = defineProps({
  companyName: { type: String, required: true },
  companyLogo: { type: String, required: true },
  duration: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  website: { type: String, required: true },
  tasks: { type: Array, required: true },
});
</script>