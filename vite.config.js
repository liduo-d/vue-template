import {defineConfig, loadEnv} from "vite";
import vue from '@vitejs/plugin-vue';

import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
    process.env = {...process.env, ...loadEnv(mode, process.cwd())};
    return {
        base: './',
        plugins: [vue()],
        // server config
        server: {
            host: '0.0.0.0',
            port: 9527,
            https: false,
            proxy: {
                '/api': {
                    target: process.env.VITE_APP_BASE_URL,
                    changeOrigin: true
                }
            }
        },
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        },
        css: {
            preprocessorOptions: {
                scss: {
                    // additionalData: `@import @/styles/theme.scss`,
                    javascriptEnabled: true
                }
            }
        }
    }
})
