<template>
  <div>
    <section
      class="grid px-12 py-12 text-yellow-100 md:px-16 lg:grid-cols-3 lg:px-48 xl:px-72"
    >
      <div class="col-span-2">
        <h2 class="text-4xl md:text-5xl">
          I'm Arvind <br />
          — <br />
          Software Developer
        </h2>
      </div>
    </section>

    <section
      class="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] py-12"
    >
      <h2
        class="pb-6 text-center text-4xl text-yellow-100 md:text-5xl lg:text-6xl"
      >
        About Me
      </h2>
      <p
        class="px-5 text-lg text-gray-300 md:px-24 md:text-xl lg:px-48 lg:text-2xl xl:px-96"
      >
        Experienced
        <span class="font-extrabold text-yellow-100">
          full-stack web developer
        </span>
        with expertise in building scalable, reactive, high-performance
        applications using front-end and back-end technologies. Proficient in
        Java, JavaScript, Spring, Quarkus, and RESTful API development with
        Agile project management. Master's degree in Web Engineering.
        <span class="font-extrabold text-yellow-100"
          >Fluent in English and German.</span
        >
      </p>
    </section>

    <!-- Technology Section-->
    <section class="px-5 pb-12">
      <h2
        class="py-12 text-4xl text-yellow-100 md:text-5xl lg:px-24 lg:text-6xl xl:px-36"
      >
        Technical skills {{ colorMode.preference }}
      </h2>

      <div class="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
        <!-- Front-end -->
        <div
          class="rounded-lg border-2 border-dashed border-yellow-100 p-2 px-6"
        >
          <div class="flex h-fit flex-row pb-6 justify-center items-center">
            <TechnicalSkills :icon="'fluent-emoji:laptop'" />

            <h3
              class="text-balance pl-6 text-xl font-extrabold text-yellow-100"
            >
              Front-end
            </h3>
          </div>

          <div class="grid grid-cols-4 gap-2">
            <!-- HTML -->
            <TechnicalSkills :icon="'devicon:html5'" :text="'HTML'" />

            <!-- CSS -->
            <TechnicalSkills :icon="'devicon:css3'" :text="'CSS'" />

            <!-- JavaScript -->
            <TechnicalSkills
              :icon="'devicon:javascript'"
              :text="'JavaScript'"
            />

            <!-- TypeScript -->
            <TechnicalSkills
              :icon="'devicon:typescript'"
              :text="'TypeScript'"
            />

            <!-- Hugo -->
            <TechnicalSkills :icon="'devicon:hugo'" :text="'Hugo'" />

            <!-- Node.js -->
            <TechnicalSkills :icon="'devicon:nodejs'" :text="'Node.js'" />

            <!-- Vue.js -->
            <TechnicalSkills :icon="'devicon:vuejs'" :text="'Vue.js'" />

            <!-- Nuxt -->
            <TechnicalSkills :icon="'devicon:nuxtjs'" :text="'Nuxt.js'" />

            <!-- Angular -->
            <TechnicalSkills :icon="'devicon:angularjs'" :text="'Angular.js'" />

            <!-- jQuery -->
            <TechnicalSkills :icon="'devicon:jquery'" :text="'jQuery'" />

            <!-- Tailwindcss -->
            <TechnicalSkills
              :icon="'devicon:tailwindcss'"
              :text="'Tailwind CSS'"
            />

            <!-- SwaggerUI -->
            <TechnicalSkills :icon="'devicon:swagger'" :text="'SwaggerUI'" />

            <!-- Nuxt Content-->
            <TechnicalSkills :text="'Nuxt Content'" />

            <!-- PrimeVue -->
            <TechnicalSkills :text="'PrimeVue'" />

            <!-- AJAX, -->
            <TechnicalSkills :text="'AJAX'" />

            <!-- NPM -->
            <TechnicalSkills :text="'NPM'" />

            <!-- WebSocket -->
            <TechnicalSkills :text="'WebSocket'" />

            <!-- i18n, -->
            <TechnicalSkills :text="'i18n'" />

            <!-- Others -->
            <TechnicalSkills :icon="'mdi:dots-horizontal'" :text="'etc.'" />
          </div>
        </div>

        <!-- Backend -->
        <div
          class="rounded-lg border-2 border-dashed border-yellow-100 p-2 px-6"
        >
          <div class="flex h-fit flex-row pb-6 justify-center items-center">
            <TechnicalSkills :icon="'vscode-icons:folder-type-server'" />

            <h3
              class="text-balance pl-6 text-xl font-extrabold text-yellow-100"
            >
              Back-end
            </h3>
          </div>

          <div class="flex flex-row flex-wrap justify-around space-y-2">
            <!-- Java -->
            <TechnicalSkills :icon="'devicon:java'" :text="'Java'" />

            <!-- Quarkus -->
            <TechnicalSkills :icon="'devicon:quarkus'" :text="'Quarkus'" />

            <!-- Spring -->
            <TechnicalSkills :icon="'devicon:spring'" :text="'Spring'" />

            <!-- Python -->
            <TechnicalSkills :icon="'devicon:python'" :text="'Python'" />

            <!-- PHP -->
            <TechnicalSkills :icon="'devicon:php'" :text="'PHP'" />

            <!-- Jackson -->
            <TechnicalSkills :text="'Jackson'" />

            <!-- SAX -->
            <TechnicalSkills :text="'SAX'" />

            <!-- JAXB -->
            <TechnicalSkills :text="'JAXB'" />

            <!-- Jakarta -->
            <TechnicalSkills :text="'Jakarta'" />

            <!-- Moxy, -->
            <TechnicalSkills :text="'Moxy'" />

            <!-- OpenAPI -->
            <TechnicalSkills :text="'OpenAPI'" />

            <!-- Jena -->
            <TechnicalSkills :text="'Jena'" />

            <!-- Lombok -->
            <TechnicalSkills :text="'Lombok'" />

            <!-- Xalan -->
            <TechnicalSkills :text="'Xalan'" />

            <!-- JUnit -->
            <TechnicalSkills :text="'JUnit'" />

            <!-- Jinja -->
            <TechnicalSkills :text="'Jinja'" />

            <!-- Mutiny -->
            <TechnicalSkills :text="'Mutiny'" />

            <!-- Others -->
            <TechnicalSkills :icon="'mdi:dots-horizontal'" :text="'etc.'" />
          </div>
        </div>

        <!-- Databases -->
        <div
          class="rounded-lg border-2 border-dashed border-yellow-100 p-2 px-6"
        >
          <div class="flex h-fit flex-row pb-6 justify-center items-center">
            <TechnicalSkills :icon="'devicon:azuresqldatabase'" />

            <h3
              class="text-balance pl-6 text-xl font-extrabold text-yellow-100"
            >
              Databases and Analytics
            </h3>
          </div>
          <div class="flex flex-row flex-wrap justify-around">
            <!-- MS SQL Server-->
            <TechnicalSkills
              :icon="'devicon-plain:microsoftsqlserver-wordmark'"
              :text="'SQL Server'"
            />

            <!-- MY SQL-->
            <TechnicalSkills
              :icon="'devicon:mysql-wordmark'"
              :text="'My SQL'"
            />

            <!-- Cerner CCL -->
            <TechnicalSkills :text="'Cerner CCL'" />
          </div>
        </div>

        <!-- Management and tools -->
        <div
          class="rounded-lg border-2 border-dashed border-yellow-100 p-2 px-6"
        >
          <div class="flex h-fit flex-row pb-6 justify-center items-center">
            <TechnicalSkills :icon="'vscode-icons:folder-type-tools-opened'" />

            <h3
              class="text-balance pl-6 text-xl font-extrabold text-yellow-100"
            >
              Management and Tools
            </h3>
          </div>

          <div class="flex flex-row flex-wrap justify-around">
            <!-- Docker -->
            <TechnicalSkills :icon="'devicon:docker'" :text="'Docker'" />

            <!-- Podman -->
            <TechnicalSkills :icon="'devicon:podman'" :text="'Podman'" />

            <!-- Maven -->
            <TechnicalSkills :icon="'devicon:maven'" :text="'Maven'" />

            <!-- Keycloak -->
            <TechnicalSkills :text="'Keycloak'" />

            <!-- GitLab -->
            <TechnicalSkills :icon="'devicon:gitlab'" :text="'GitLab'" />

            <!-- GitHub -->
            <TechnicalSkills :icon="'devicon:github'" :text="'GitHub'" />

            <!-- Jira -->
            <TechnicalSkills :icon="'devicon:jira'" :text="'Jira'" />

            <!-- Confluence -->
            <TechnicalSkills
              :icon="'devicon:confluence'"
              :text="'Confluence'"
            />

            <!-- XML -->
            <TechnicalSkills :icon="'devicon:xml'" :text="'XML'" />

            <!-- JSON -->
            <TechnicalSkills :icon="'devicon:json'" :text="'JSON'" />

            <!-- YAML -->
            <TechnicalSkills :icon="'devicon:yaml'" :text="'YAML'" />

            <!-- CSV -->
            <TechnicalSkills :icon="'catppuccin:csv'" :text="'CSV'" />

            <!-- IntelliJ IDEA -->
            <TechnicalSkills :text="'IntelliJ IDEA'" />

            <!-- VS Code -->
            <TechnicalSkills :icon="'devicon:vscode'" :text="'VS Code'" />

            <!-- macOS -->
            <TechnicalSkills :text="'macOS'" />

            <!-- Windows -->
            <TechnicalSkills :text="'Windows'" />

            <!-- Linux -->
            <TechnicalSkills :text="'Linux'" />
          </div>
        </div>
      </div>
    </section>

    <!-- Links Section-->
    <section class="pb-12">
      <h2
        class="px-5 py-12 text-center text-4xl text-yellow-100 md:text-5xl lg:px-24 lg:text-6xl xl:px-36"
      >
        Links
      </h2>
      <div
        class="mx-auto grid w-fit justify-center gap-x-24 gap-y-8 px-5 md:grid-cols-2 lg:grid-cols-3"
      >
        <a target="_blank" href="">
          <Icon icon="mdi:linkedin" class="w-16 h-16" />
          <span>Linkedin</span>
        </a>

        <a target="_blank" href="">
          <Icon icon="mdi:github" class="w-16 h-16" />
          <span>GitHub</span>
        </a>

        <a target="_blank" href="">
          <Icon icon="vscode-icons:file-type-pdf2" class="w-16 h-16" />
          <span>Resume</span>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";

definePageMeta({
  layout: "home",
});

const colorMode = useColorMode();
</script>
