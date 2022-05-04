import { defineNavbarConfig } from "vuepress-theme-hope";

export const zh = defineNavbarConfig([
  "/",
  "/home",
  { text: "使用指南", icon: "creative", link: "/guide/" },
  {
    text: "软件教程",
    icon: "edit",
    prefix: "/posts/",
    children: [
      {
        text: "视频剪辑",
        icon: "edit",
        prefix: "vedio-clip/",
        children: [
          { text: "直播流保存", icon: "edit", link: "live-stream-save" },
        ],
      },
    ],
  },
  {
    text: "主题文档",
    icon: "note",
    link: "https://vuepress-theme-hope.github.io/v2/zh/",
  },
]);
