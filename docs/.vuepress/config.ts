import { defineConfig } from 'vuepress/config'

export default defineConfig({
    title: 'PilibiliPress',
    base: '/pilibili-press/',
    description: 'A Wonderful Pilibili Press',
    themeConfig: {
        repo: "Wecle/pilibili-press",
        sidebar: [
            {
                title: "前言",
                path: '/'
            },
            {
                title: "设计",
                path: '/'
            }
        ]
    }
})
