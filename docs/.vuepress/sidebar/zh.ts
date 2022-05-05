import { defineSidebarConfig } from "vuepress-theme-hope";

export const zh = defineSidebarConfig({
  "/": [
    "",
    "home",
    "slide",
    {
      text: "如何使用",
      icon: "creative",
      prefix: "guide/",
      link: "guide/",
      children: "structure",
    },
  ],
  "/posts/": [
    {
      text: "视频剪辑",
      icon: "creative",
      prefix: "vedio-clip/",
      collapsable: true,
      children: "structure",
    },
    {
      text: "度盘下载",
      icon: "creative",
      prefix: "pan-download/",
      collapsable: true,
      children: "structure",
    }
  ],
  "/code/": [
    {text: "后端相关",
      icon: "creative",
      prefix: "back-end/",
      collapsable: true,
      children: "structure",
    },
    {text: "前端相关",
      icon: "creative",
      prefix: "front-end/",
      collapsable: true,
      children: "structure",
    }
  ]
});
