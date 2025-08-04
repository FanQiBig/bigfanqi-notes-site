import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "我的学习笔记",
  description: "记录我的学习过程",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "算法笔记", link: "/algorithm" }
    ]
  }
})
