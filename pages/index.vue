<template>
  <!-- Hero section for introduction -->
  <HeroSection />

  <!-- Technology Section-->
  <section
    class="p-10 bg-gray-100 dark:bg-gray-900 transition-colors duration-500"
  >
    <h2
      class="text-center pb-6 text-4xl font-bold tracking-tight text-gray-800 dark:text-yellow-200 transition-transform transform hover:scale-105"
    >
      Technical Skills
    </h2>

    <div class="grid gap-8 lg:grid-cols-2 xl:grid-cols-4">
      <!-- Front-end -->
      <div
        class="rounded-lg p-6 shadow-lg bg-white dark:bg-gray-800 dark:shadow-xl hover:shadow-2xl hover:scale-105 transform transition duration-500 ease-in-out"
      >
        <div class="flex justify-center items-center space-x-4 pb-4">
          <TechnicalSkills :icon="'fluent-emoji:laptop'" />
          <h3
            class="text-2xl font-extrabold text-gray-900 dark:text-yellow-200"
          >
            Front-end
          </h3>
        </div>

        <div class="grid grid-cols-4 gap-4">
          <TechnicalSkills :icon="'devicon:html5'" :text="'HTML'" />
          <TechnicalSkills :icon="'devicon:css3'" :text="'CSS'" />
          <TechnicalSkills :icon="'devicon:javascript'" :text="'JavaScript'" />
          <TechnicalSkills :icon="'devicon:hugo'" :text="'Hugo'" />
          <TechnicalSkills :icon="'devicon:vuejs'" :text="'Vue.js'" />
          <TechnicalSkills :icon="'devicon:nuxtjs'" :text="'Nuxt.js'" />
          <TechnicalSkills :icon="'devicon:angularjs'" :text="'Angular.js'" />
          <TechnicalSkills :icon="'devicon:jquery'" :text="'jQuery'" />
          <TechnicalSkills :icon="'devicon:typescript'" :text="'TypeScript'" />
          <TechnicalSkills
            :icon="'devicon:tailwindcss'"
            :text="'Tailwind CSS'"
          />
          <TechnicalSkills :icon="'devicon:swagger'" :text="'SwaggerUI'" />
          <TechnicalSkills :text="'Nuxt Content'" />
          <TechnicalSkills :text="'PrimeVue'" />
          <TechnicalSkills :text="'AJAX'" />
          <TechnicalSkills :text="'NPM'" />
          <TechnicalSkills :text="'WebSocket'" />
          <TechnicalSkills :text="'i18n'" />
          <TechnicalSkills :icon="'mdi:dots-horizontal'" :text="'etc.'" />
        </div>
      </div>

      <!-- Backend -->
      <div
        class="rounded-lg p-6 shadow-lg bg-white dark:bg-gray-800 dark:shadow-xl hover:shadow-2xl hover:scale-105 transform transition duration-500 ease-in-out"
      >
        <div class="flex justify-center items-center space-x-4 pb-4">
          <TechnicalSkills :icon="'vscode-icons:folder-type-server'" />
          <h3
            class="text-2xl font-extrabold text-gray-900 dark:text-yellow-200"
          >
            Back-end
          </h3>
        </div>

        <div class="grid grid-cols-4 gap-4">
          <TechnicalSkills :icon="'devicon:java'" :text="'Java'" />
          <TechnicalSkills :icon="'devicon:quarkus'" :text="'Quarkus'" />
          <TechnicalSkills :icon="'devicon:spring'" :text="'Spring'" />
          <TechnicalSkills :icon="'devicon:python'" :text="'Python'" />
          <TechnicalSkills :icon="'devicon:php'" :text="'PHP'" />
          <TechnicalSkills :text="'Jackson'" />
          <TechnicalSkills :text="'SAX'" />
          <TechnicalSkills :text="'JAXB'" />
          <TechnicalSkills :text="'Jakarta'" />
          <TechnicalSkills :text="'Moxy'" />
          <TechnicalSkills :text="'OpenAPI'" />
          <TechnicalSkills :text="'Jena'" />
          <TechnicalSkills :text="'Lombok'" />
          <TechnicalSkills :text="'Xalan'" />
          <TechnicalSkills :text="'JUnit'" />
          <TechnicalSkills :text="'Jinja'" />
          <TechnicalSkills :text="'Mutiny'" />
          <TechnicalSkills :icon="'mdi:dots-horizontal'" :text="'etc.'" />
        </div>
      </div>

      <!-- Databases and Platforms section -->
      <div
        class="rounded-lg p-6 shadow-lg bg-white dark:bg-gray-800 dark:shadow-xl hover:shadow-2xl hover:scale-105 transform transition duration-500 ease-in-out"
      >
        <div class="flex justify-center items-center space-x-4 pb-4">
          <TechnicalSkills :icon="'devicon:azuresqldatabase'" />
          <h3
            class="text-2xl font-extrabold text-gray-900 dark:text-yellow-200"
          >
            Databases & Platforms
          </h3>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <TechnicalSkills :icon="'devicon:mysql-wordmark'" :text="'MySQL'" />
          <TechnicalSkills
            :icon="'devicon-plain:microsoftsqlserver-wordmark'"
            :text="'SQL Server'"
          />
          <TechnicalSkills :text="'Cerner CCL'" />
          <TechnicalSkills :icon="'devicon:docker'" :text="'Docker'" />
          <TechnicalSkills :icon="'devicon:podman'" :text="'Podman'" />
          <TechnicalSkills :icon="'devicon:maven'" :text="'Maven'" />
          <TechnicalSkills :text="'Keycloak'" />
          <TechnicalSkills :text="'GitLab'" />
          <TechnicalSkills :icon="'devicon:github'" :text="'GitHub'" />
          <TechnicalSkills :icon="'devicon:jira'" :text="'Jira'" />
          <TechnicalSkills :icon="'devicon:confluence'" :text="'Confluence'" />
        </div>
      </div>

      <!-- Tools & Technologies Section -->
      <div
        class="rounded-lg p-6 shadow-lg bg-white dark:bg-gray-800 dark:shadow-xl hover:shadow-2xl hover:scale-105 transform transition duration-500 ease-in-out"
      >
        <div class="flex justify-center items-center space-x-4 pb-4">
          <TechnicalSkills :icon="'vscode-icons:folder-type-tools-opened'" />

          <h3
            class="text-2xl font-extrabold text-gray-900 dark:text-yellow-200"
          >
            Tools & Technologies
          </h3>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <TechnicalSkills :icon="'devicon:xml'" :text="'XML'" />
          <TechnicalSkills :icon="'devicon:json'" :text="'JSON'" />
          <TechnicalSkills :icon="'devicon:yaml'" :text="'YAML'" />
          <TechnicalSkills :icon="'catppuccin:csv'" :text="'CSV'" />
          <TechnicalSkills :text="'IntelliJ IDEA'" />
          <TechnicalSkills :icon="'devicon:vscode'" :text="'VS Code'" />
          <TechnicalSkills :text="'macOS'" />
          <TechnicalSkills :text="'Windows'" />
          <TechnicalSkills :text="'Linux'" />
        </div>
      </div>
    </div>
  </section>

  <!-- Footer/Links Section-->
  <FooterSection />
</template>
