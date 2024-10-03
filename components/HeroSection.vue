<template>
  <section
    class="bg-gradient-to-r dark:from-yellow-800 dark:to-yellow-950 from-gray-400 to-gray-600"
  >
    <!-- Main content with Image and Title -->
    <div
      class="flex flex-col md:flex-row items-center justify-center gap-8 px-6 py-12 text-black dark:text-yellow-200 md:px-12 lg:grid-cols-3 lg:px-24 xl:px-32"
    >
      <!-- Left Section: Greeting and Image -->
      <div
        class="flex justify-center items-center flex-col md:flex-row space-x-0 md:space-x-6 space-y-4 md:space-y-0"
      >
        <h1 class="text-3xl md:text-5xl font-extrabold text-center">
          Hello!
          <span
            class="block text-4xl md:text-6xl text-yellow-500 dark:text-yellow-300 transition-transform transform hover:scale-105 animate-pulse"
          >
            I'm Aravinda
          </span>
        </h1>

        <img
          src="/images/photo.jpg"
          alt="Aravinda Bantwal Baliga"
          class="rounded-full w-40 h-40 md:w-48 md:h-48 object-cover shadow-2xl transition-transform duration-500 hover:scale-110"
        />
      </div>
    </div>

    <!-- About Me Section -->
    <div
      class="text-center px-6 py-12 md:px-48 bg-gradient-to-b from-gray-100 to-gray-200 dark:bg-gradient-to-b dark:from-gray-700 dark:to-gray-800"
    >
      <!-- About Me Title -->
      <h2
        class="pb-6 text-4xl font-bold tracking-tight text-gray-800 dark:text-yellow-200 transition-transform transform hover:scale-105"
      >
        About Me
      </h2>

      <!-- About Me Description -->
      <p
        class="text-lg text-gray-700 dark:text-gray-300 md:text-xl lg:text-2xl"
      >
        Experienced
        <span class="font-extrabold text-gray-900 dark:text-yellow-200">
          full-stack developer
        </span>
        with expertise in building scalable, reactive, high-performance
        applications using front-end and back-end technologies.
        <span class="font-extrabold text-gray-900 dark:text-yellow-200">
          Fluent in English and German.
        </span>
      </p>
    </div>
  </section>
</template>