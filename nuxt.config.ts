// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  app: {
    head: {
      title: 'PT. PJPT SENOPATI',
      meta: [
        {
          name: 'description',
          content: 'To Do Activities'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.png' }
      ]
    }
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@pinia/nuxt',
    // '@vee-validate/nuxt',
    '@nuxt/ui'
  ],
  ui: {
    global: true
  },
  // veeValidate: {
  //   autoImports: true,
  //   componentNames: {
  //     Form: 'VeeForm',
  //     Field: 'VeeField',
  //     FieldArray: 'VeeFieldArray',
  //     ErrorMessage: 'VeeErrorMessage',
  //   },
  // },
  tailwindcss: {
    configPath: 'tailwind.config',
    exposeConfig: true,
    config: {},
    viewer: true
  },
  css: [
    '~/assets/scss/style.scss',
    '~/assets/css/stm.css'
  ],
  image: {
    dir: 'assets/img'
  },
  build: {
    transpile: ['lodash-es'],
  }
})