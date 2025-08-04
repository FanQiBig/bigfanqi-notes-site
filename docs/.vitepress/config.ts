import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "BifFanQi的学习笔记",
  description: "记录我的学习过程及知识分享",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }]
  ],
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "算法",
        items: [
          { text: "排序", link: "/algorithm/sort" },
          { text: "动态规划", link: "/algorithm/dp" }
        ]
      },
      {
        text: "数据结构",
        items: [
          { text: "树", link: "/data-structure/tree" },
          { text: "图", link: "/data-structure/graph" }
        ]
      },
      {
        text: "LeetCode",
        items: [
          { text: "每日一题", link: "/leetcode/daily-2025-08-04" },
        ]
      },
      {
        text: "蓝桥",
        items: [
          { text: "备考记录", link: "/lanqiao/daily-2025-08-04" },
        ]
      },
      {
        text: "天梯",
        items: [
          { text: "每日一题", link: "/天梯/daily-2025-08-04" },
        ]
      }
    ]
  }
})
