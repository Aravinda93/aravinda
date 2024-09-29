export default {
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/apollo",
    "@nuxtjs/turnstile",
    "unplugin-fonts/nuxt",
    "@nuxtjs/color-mode",
  ],

  css: ["@/assets/index.css"],

  //To support the dark/light mode theme using @nuxtjs/color-mode
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "dark",
  },

  app: {
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
        },
      ],
    },
  },

  //Get the config from .env files
  runtimeConfig: {
    apiSecret: "123",
    public: {
      apiBase: process.env.API_URL || "http://localhost:8080/",
    },
  },

  // auto import components
  components: [
    {
      path: "~/components",
      pathPrefix: false,
    },
  ],

  turnstile: {
    siteKey: "0x4AAAAAAAUBxBNAPgRBo5hj",
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://cms.mihai.ltd/graphql",
      },
    },
  },

  compatibilityDate: "2024-09-26",
};
