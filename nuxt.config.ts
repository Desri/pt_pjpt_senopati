// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  devtools: { enabled: true },
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
    '@nuxt/eslint',
    '@vee-validate/nuxt',
    '@nuxt/ui'
  ],
  ui: {
    global: true
  },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
  eslint: {
    config: {
      stylistic: true
    }
  },
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