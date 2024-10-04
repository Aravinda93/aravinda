export default {
  ssr: true,
  target: "static",
  compatibilityDate: "2024-10-01",

  modules: [
    "@nuxtjs/tailwindcss",
    "unplugin-fonts/nuxt",
    "@nuxt/icon",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "@nuxt/content",
  ],

  //To support the dark/light mode theme using @nuxtjs/color-mode
  colorMode: {
    classSuffix: "",
    preference: "system",
    fallback: "dark",
  },

  router: {
    base: "/aravinda/",
  },

  // Favicon icon for the tab
  app: {
    baseURL: "/aravinda/",
    head: {
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: `images/photo.jpg`,
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
};
