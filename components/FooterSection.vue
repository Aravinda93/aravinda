<template>
  <footer
    class="bg-gradient-to-b from-gray-100 to-gray-200 dark:bg-gradient-to-b dark:from-gray-700 dark:to-gray-900 p-12 text-center"
  >
    <!-- Title -->
    <h2
      class="pb-8 text-4xl font-extrabold tracking-tight text-gray-800 dark:text-yellow-200 transition-transform transform hover:scale-105"
    >
      Connect with Me
    </h2>

    <!-- Decorative Line -->
    <hr
      class="mx-auto w-24 border-t-4 border-yellow-500 dark:border-yellow-400 mb-8"
    />

    <!-- Social Links -->
    <div class="flex flex-row justify-center space-x-20">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/aravinda-baliga-b-1a682189/"
        class="flex flex-col items-center group transform transition duration-300 hover:scale-110"
      >
        <Icon
          name="mdi:linkedin"
          class="w-16 h-16 text-blue-700 dark:text-white group-hover:rotate-12"
        />
        <span
          class="mt-2 text-xl font-semibold text-gray-800 dark:text-gray-200"
        >
          LinkedIn
        </span>
      </a>

      <a
        target="_blank"
        href="https://github.com/aravinda93"
        class="flex flex-col items-center group transform transition duration-300 hover:scale-110"
      >
        <Icon
          name="mdi:github"
          class="w-16 h-16 text-gray-900 dark:text-white group-hover:rotate-12"
        />
        <span
          class="mt-2 text-xl font-semibold text-gray-800 dark:text-gray-200"
        >
          GitHub
        </span>
      </a>

      <div
        class="relative flex flex-col items-center group transform transition duration-300 hover:scale-110"
      >
        <!-- Pop-up menu -->
        <div
          v-if="showOptions"
          class="absolute bottom-full mb-2 right-0 w-48 rounded-lg shadow-md border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-800 z-50"
          ref="optionsElement"
        >
          <div class="py-2">
            <a
              href="CV_DE.pdf"
              target="_blank"
              @click="toggleOptionsMenu"
              class="flex items-center px-4 py-2 space-x-2 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer"
            >
              <Icon name="circle-flags:de" height="20" width="20" />
              <span>German</span>
            </a>

            <hr class="border-gray-300 dark:border-slate-700" />

            <a
              href="CV_EN.pdf"
              target="_blank"
              @click="toggleOptionsMenu"
              class="flex items-center px-4 py-2 space-x-2 hover:bg-gray-100 dark:hover:bg-slate-700 cursor-pointer"
            >
              <Icon name="circle-flags:en" height="20" width="20" />
              <span>English</span>
            </a>
          </div>
        </div>

        <!-- Button to toggle menu -->
        <Icon
          name="vscode-icons:file-type-pdf2"
          class="w-16 h-16 text-red-600 dark:text-white group-hover:rotate-12"
          @click="toggleOptionsMenu"
        />
        <span
          class="mt-2 text-xl font-semibold text-gray-800 dark:text-gray-200"
        >
          Resume
        </span>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";

const showOptions = ref(false);
const optionsElement = ref(null);

const toggleOptionsMenu = () => {
  showOptions.value = !showOptions.value;
};

onClickOutside(optionsElement, (event) => (showOptions.value = false));
</script>
