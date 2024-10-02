<template>
  <nav
    class="sticky mx-auto h-16 w-full md:w-4/5 rounded-2xl p-4 shadow-lg transition-shadow duration-500 ease-in-out dark:bg-gray-800 dark:bg-opacity-30 bg-white bg-opacity-30 backdrop-blur-lg hover:shadow-2xl hover:shadow-yellow-500/50 dark:hover:shadow-yellow-300/50"
  >
    <ul
      class="flex h-full items-center justify-around text-lg font-semibold uppercase tracking-wider text-gray-800 dark:text-gray-200 transition-colors duration-500 ease-in-out"
    >
      <!-- Home -->
      <li class="group">
        <NuxtLink
          class="relative cursor-pointer duration-500"
          to="/"
          active-class="text-yellow-400"
        >
          Home
          <span
            class="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-500 ease-in-out"
          ></span>
        </NuxtLink>
      </li>

      <span
        class="hidden md:inline-block h-8 border-l-2 border-yellow-200 dark:border-gray-500"
      ></span>

      <!-- Work Experience -->
      <li class="group">
        <NuxtLink
          class="relative cursor-pointer duration-500"
          to="/experience"
          active-class="text-yellow-400"
        >
          Experience
          <span
            class="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-500 ease-in-out"
          ></span>
        </NuxtLink>
      </li>

      <span
        class="hidden md:inline-block h-8 border-l-2 border-yellow-200 dark:border-gray-500"
      ></span>

      <!-- Projects -->
      <li class="group">
        <NuxtLink
          class="relative cursor-pointer duration-500"
          to="/projects"
          active-class="text-yellow-400"
        >
          Projects
          <span
            class="absolute left-0 bottom-0 w-full h-1 bg-yellow-400 scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-500 ease-in-out"
          ></span>
        </NuxtLink>
      </li>

      <span
        class="hidden md:inline-block h-8 border-l-2 border-yellow-200 dark:border-gray-500"
      />

      <li class="group">
        <ThemeToggle />
      </li>
    </ul>
  </nav>
</template>