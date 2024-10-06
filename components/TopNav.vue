<template>
  <nav
    class="sticky top-0 z-50 mx-auto w-full md:w-4/5 h-auto p-4 rounded-2xl shadow-xl transition-shadow duration-500 ease-in-out bg-gray-200 bg-opacity-60 dark:bg-gray-800 dark:bg-opacity-50 backdrop-blur-lg hover:shadow-2xl hover:shadow-yellow-500/50 dark:hover:shadow-yellow-300/50"
  >
    <ul
      class="flex flex-wrap md:flex-nowrap h-auto items-center justify-around gap-4 text-lg font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-200 transition-colors duration-500 ease-in-out"
    >
      <!-- Home -->
      <li class="group">
        <NuxtLink
          class="relative cursor-pointer duration-500 px-2"
          to="/"
          active-class="text-yellow-400"
        >
          Home
          <span
            class="absolute left-0 -bottom-2 w-full h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-500 ease-in-out mt-4"
          ></span>
        </NuxtLink>
      </li>

      <span
        class="inline-block h-8 border-l-2 border-yellow-200 dark:border-gray-500"
      />

      <!-- Work Experience -->
      <li class="group">
        <NuxtLink
          class="relative cursor-pointer duration-500 px-2"
          to="/experience"
          active-class="text-yellow-400"
        >
          Experience
          <span
            class="absolute left-0 -bottom-2 w-full h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-500 ease-in-out"
          ></span>
        </NuxtLink>
      </li>

      <span
        class="inline-block h-8 border-l-2 border-yellow-200 dark:border-gray-500"
      />

      <!-- Projects -->
      <li class="group">
        <NuxtLink
          class="relative cursor-pointer duration-500 px-2"
          to="/projects"
          active-class="text-yellow-400"
        >
          Projects
          <span
            class="absolute left-0 -bottom-2 w-full h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-500 ease-in-out"
          ></span>
        </NuxtLink>
      </li>

      <span
        class="inline-block h-8 border-l-2 border-yellow-200 dark:border-gray-500"
      />

      <!-- Privacy -->
      <li class="group">
        <NuxtLink
          class="relative cursor-pointer duration-500 px-2"
          to="/privacy"
          active-class="text-yellow-400"
        >
          Privacy
          <span
            class="absolute left-0 -bottom-2 w-full h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-500 ease-in-out"
          ></span>
        </NuxtLink>
      </li>

      <span
        class="inline-block h-8 border-l-2 border-yellow-200 dark:border-gray-500"
      />

      <!-- Theme Toggle -->
      <li class="group">
        <ThemeToggle />
      </li>
    </ul>
  </nav>
</template>

<script setup>
// The ThemeToggle component will manage dark/light mode switching.
</script>

<style scoped>
/* Styling for the hover effect and scale animations */
.group:hover .scale-x-0 {
  transform: scaleX(1);
}
</style>