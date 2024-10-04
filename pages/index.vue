<template>
  <!-- Hero section for introduction -->
  <HeroSection />

  <!-- Technical Skills -->
  <section
    class="p-10 bg-gray-100 dark:bg-gray-900 transition-colors duration-500"
  >
    <h2
      class="text-center pb-6 text-4xl font-bold tracking-tight text-gray-800 dark:text-yellow-200 transition-transform transform hover:scale-105"
    >
      Technical Skills
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
      <!-- Front-end Section -->
      <div
        class="rounded-lg p-4 bg-white dark:bg-gray-800 shadow-lg dark:shadow-xl hover:shadow-2xl transform transition hover:scale-105"
      >
        <div class="flex items-center space-x-4 pb-4">
          <TechnicalSkills :icon="'mdi:computer-classic'" />
          <h3 class="text-xl font-extrabold text-gray-900 dark:text-yellow-200">
            Front-end
          </h3>
        </div>

        <div class="space-y-2">
          <TechnicalSkills :icon="'devicon:html5'" :text="'HTML'" />
          <TechnicalSkills :icon="'devicon:css3'" :text="'CSS'" />
          <TechnicalSkills :icon="'devicon:javascript'" :text="'JavaScript'" />
          <TechnicalSkills :icon="'devicon:vuejs'" :text="'Vue.js'" />
          <TechnicalSkills :icon="'devicon:nuxtjs'" :text="'Nuxt'" />
          <TechnicalSkills :icon="'devicon:nuxtjs'" :text="'Nuxt Content'" />
          <TechnicalSkills
            :icon="'devicon:tailwindcss'"
            :text="'Tailwind CSS'"
          />
          <TechnicalSkills :icon="'devicon:hugo'" :text="'Hugo'" />
          <TechnicalSkills :icon="'devicon:angularjs'" :text="'Angular'" />
          <TechnicalSkills :icon="'devicon:jquery'" :text="'jQuery'" />
          <TechnicalSkills :icon="'devicon:typescript'" :text="'TypeScript'" />
          <TechnicalSkills :text="'AJAX'" />
          <TechnicalSkills :text="'NPM'" />
          <TechnicalSkills :text="'SwaggerUI'" />
          <TechnicalSkills :text="'WebSocket'" />
          <TechnicalSkills :text="'i18n'" />
          <TechnicalSkills :icon="'mdi:dots-horizontal'" />
        </div>
      </div>

      <!-- Back-end Section -->
      <div
        class="rounded-lg p-4 bg-white dark:bg-gray-800 shadow-lg dark:shadow-xl hover:shadow-2xl transform transition hover:scale-105"
      >
        <div class="flex items-center space-x-4 pb-4">
          <TechnicalSkills :icon="'vscode-icons:folder-type-server'" />

          <h3 class="text-xl font-extrabold text-gray-900 dark:text-yellow-200">
            Back-end & Database
          </h3>
        </div>

        <div class="space-y-2">
          <TechnicalSkills :icon="'devicon:java'" :text="'Java'" />
          <TechnicalSkills :icon="'devicon:python'" :text="'Python'" />
          <TechnicalSkills :icon="'devicon:php'" :text="'PHP'" />
          <TechnicalSkills :icon="'devicon:quarkus'" :text="'Quarkus'" />
          <TechnicalSkills :icon="'devicon:spring'" :text="'Spring'" />
          <TechnicalSkills
            :icon="'devicon-plain:microsoftsqlserver-wordmark'"
            :text="'SQL Server'"
          />
          <TechnicalSkills :icon="'devicon:mysql-wordmark'" :text="'MySQL'" />
          <TechnicalSkills :text="'Cerner CCL'" />
          <TechnicalSkills :text="'Jackson'" />
          <TechnicalSkills :text="'SAX'" />
          <TechnicalSkills :text="'JAXB'" />
          <TechnicalSkills :text="'OpenAPI'" />
          <TechnicalSkills :text="'Jena'" />
          <TechnicalSkills :text="'Lombok'" />
          <TechnicalSkills :text="'Xalan'" />
          <TechnicalSkills :text="'Keycloak'" />
          <TechnicalSkills :icon="'mdi:dots-horizontal'" />
        </div>
      </div>

      <!-- Tools Section -->
      <div
        class="rounded-lg p-4 bg-white dark:bg-gray-800 shadow-lg dark:shadow-xl hover:shadow-2xl transform transition hover:scale-105"
      >
        <div class="flex items-center space-x-4 pb-4">
          <TechnicalSkills :icon="'fluent-emoji:toolbox'" />
          <h3 class="text-xl font-extrabold text-gray-900 dark:text-yellow-200">
            Tools & Others
          </h3>
        </div>

        <div class="space-y-2">
          <TechnicalSkills :icon="'devicon:git'" :text="'GitHub/GitLab'" />
          <TechnicalSkills :icon="'devicon:jira'" :text="'JIRA/Plane'" />
          <TechnicalSkills :icon="'devicon:confluence'" :text="'Confluence'" />
          <TechnicalSkills :icon="'devicon:docker'" :text="'Docker/Podman'" />
          <TechnicalSkills :icon="'devicon:maven'" :text="'Maven'" />
          <TechnicalSkills
            :icon="'devicon:xcode'"
            :text="'IntelliJ IDEA, VS Code, Postman, Eclipse'"
          />
          <TechnicalSkills
            :icon="'mdi:format-align-justify'"
            :text="'XML, JSON, YAML, CSV, XSD, XSLT'"
          />
          <TechnicalSkills
            :icon="'mdi:microsoft'"
            :text="'Word, Excel, PowerPoint, OneNote'"
          />
          <TechnicalSkills
            :icon="'mdi:settings-outline'"
            :text="'macOS, Windows, Linux'"
          />
          <TechnicalSkills :icon="'mdi:dots-horizontal'" />
        </div>
      </div>
    </div>
  </section>

  <!-- Footer/Links Section-->
  <FooterSection />
</template>

<script setup>
useHead({
  title: "Aravinda | Home",
});
</script>
