// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  components: [
    {
      path: "~/components",
      pathPrefix: false, // Disables auto-prefixing for subfolders
    },
  ],
  css: ["@/assets/styles/main.scss"], // Global SCSS
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@/assets/styles/_variables.scss";`,
        },
      },
    },
  },
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Commissioner:wght@200;400;600;800&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;800&display=swap",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.cdnfonts.com/css/cabinet-grotesk-variable",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.cdnfonts.com/css/analogue", // Analogue font from cdnfonts
        },
      ],
    },
  },
})
