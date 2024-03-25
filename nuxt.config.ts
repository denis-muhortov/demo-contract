// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: "ru",
      },
      meta: [
        // <meta name="viewport" content="width=device-width, initial-scale=1">
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      title: "Главное архитектурно-планировочное управление Москомархитектуры",
      script: [
        // <script src="https://myawesome-lib.js"></script>
        // { src: 'https://awesome-lib.js' }
      ],
      link: [
        // <link rel="stylesheet" href="https://myawesome-lib.css">
        // { rel: "stylesheet", href: "https://awesome-lib.css" },
      ],
      // please note that this is an area that is likely to change
      style: [
        // <style type="text/css">:root { color: red }</style>
        // { children: ':root { color: red }' }
      ],
      noscript: [
        // <noscript>JavaScript is required</noscript>
        // { children: 'JavaScript is required' }
      ],
    },
    pageTransition: {
      name: "page",
      mode: "out-in",
    },
  },
  components: [
    "~/components",
    "~/components/items",
    "~/components/modules",
    "~/components/blocks",
    "~/components/layoutComponents",
    "~/components/popups",
  ],
  sourcemap: true,
  vite: {
    optimizeDeps: {
      include: [
      ],
    },
  },

  modules: [
    "@pinia/nuxt",
    "@nuxt/devtools",
    '@unlazy/nuxt',
    '@vueuse/motion/nuxt',
  ],
  ssr: true,

  css: [
    // CSS file in the project
    "@/assets/css/main.css",
  ],
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },

  devtools: {
    // Enable devtools (default: true)
    enabled: true,
    // VS Code Server options
    vscode: {},
    // ...other options
  },


  imports: {
    dirs: ["./stores"],
  },

  pinia: {
    autoImports: ["defineStore", ["defineStore", "definePiniaStore"]],
  },

});
