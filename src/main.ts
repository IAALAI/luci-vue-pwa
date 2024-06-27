import { createApp } from 'vue'
import App from './App.vue'
import router from "@/route"
import pinia from "@/store"
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css'

import './style.css'

createApp(App)
    .use(createVuetify({
        components,
        directives,
        icons: {
            defaultSet: 'mdi',
        },
        theme: {
            defaultTheme: 'iaTheme',
            themes: {
                iaTheme: {
                    dark: true,
                    colors: {
                        background: '#333',
                        surface: '#333',
                    },
                }
            },
        }
    }))
    .use(pinia)
    .use(router)
    .mount('#app')
