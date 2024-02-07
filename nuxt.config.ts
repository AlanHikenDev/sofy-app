// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'vuetify-nuxt-module'
  ],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
      theme: {
        themes: {
          light: {
            dark: true,
            colors: {
              //primary: colors.red.darken1, // #E53935
              // secondary: colors.red.lighten4, // #FFCDD2
            }
          },
        },
      },
    }
  } 
})
