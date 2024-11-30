import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Pilotis Imóveis",
      meta: [
        { name: "description", content: "Descubra quanto cobrar de aluguel em Brasília." },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { property: 'og:site_name',  content: 'Pilotis Imóveis'},
        { property: 'og:title',  content: 'Pilotis Imóveis'},
        { property: 'og:description',  content: 'Descubra quanto cobrar de aluguel em Brasília.'},
        { property: 'og:image',  content: '/OG.jpg'},
        { property: 'og:image:alt',  content: 'Imagem de página para Pilotis Imóveis'},
        { name: 'twitter:image',  content: '/OG.jpg'},
        { name: 'twitter:image:alt',  content: 'Imagem de página para Pilotis Imóveis'},
        { name: 'twitter:description', content: 'Descubra quanto cobrar de aluguel em Brasília.' }
      ],
      script: [
       
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
    }
  },
  css: [
    '/public/css/theme.scss',
    '/public/css/style.scss',
  ],
  components: {
    "dirs": [
      "~/components"
    ]
  },
  modules: [
  ],
  generate: {
    routes: [
      '/rss.xml',
    ]
  }
});
