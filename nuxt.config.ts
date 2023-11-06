// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@element-plus/nuxt', '@nuxtjs/i18n', 'dayjs-nuxt'],
  i18n: {
      vueI18n: './i18n.config.ts'
  },
  css: [
    '@/assets/css/reset.css',
    'element-plus/dist/index.css',
    'element-plus/theme-chalk/display.css',
  ],
  nitro: {
    // 服务端请求转发
    routeRules: {
      '/server/**': {
        proxy: 'http://api.yinchunyu.com/**'
      }
    }
  },
  runtimeConfig: {
    public: {
      baseURL: '/server/'
    }
  }
})
