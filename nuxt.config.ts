import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    build: {
        transpile: ['vuetify'],
    },
    modules: [
        '@nuxtjs/tailwindcss',
        (_options, nuxt) => {
            nuxt.hooks.hook('vite:extendConfig', (config) => {
                // @ts-expect-error
                config.plugins.push(vuetify({ autoImport: true }))
            })
        },
    ],
    vite: {
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
    extends: [
        'nuxt-emoji'
    ],
    runtimeConfig: {
        public: {
            SERVER_URL: process.env.SERVER_URL,
        }
    }
})
