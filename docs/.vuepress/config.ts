import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  base: "/my-blog/",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "我的博客",
      description: "vuepress-theme-hope 的演示",
    },
    "/en/": {
      lang: "en-US",
      title: "CSXWANT BLOG",
      description: "A demo for vuepress-theme-hope",
    },
  },

  themeConfig,
});
