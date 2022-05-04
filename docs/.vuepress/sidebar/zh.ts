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
    }
  ]
});
