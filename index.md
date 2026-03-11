---
layout: home

hero:
  name: "Black Bad Code"
  text: "Attention Is All You Need"
  tagline: "如果它能产生情感，那么它就是真实的。"
  actions:
    - theme: brand
      text: 开启阅读
      link: /markdown-examples
    - theme: alt
      text: GitHub
      link: https://vitepress.dev/zh/

features:
  - icon: ⚡️
    title: 极速开发
    details: 基于 Vite，即时热更新，毫秒级响应。
  - icon: 🖖
    title: Vue 驱动
    details: 在 Markdown 中直接使用 Vue 组件。
  - icon: 📦
    title: 静态生成
    details: 构建结果是极简的静态 HTML。
---

<style>
/* 强制增加文字宽度限制，防止自动换行 */
:root {
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
}
.VPHero .text {
  max-width: 100% !important;
  letter-spacing: -0.02em;
}
.VPHero .name {
  color: var(--vp-c-brand-1);
}
</style>
