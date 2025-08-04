import { defineConfig } from 'vitepress'

// https://vitepress.vuejs.org/config/app-configs
export default {
  title: "我的学习笔记",
  description: "记录我的学习过程",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      { text: "算法笔记", link: "/algorithm" }
    ]
  }
}
