import { getPosts, getPostLength } from "./theme/serverUtils";

import { nav } from "./config/nav";
import { sidebar } from "./config/sidebar";
async function config() {
  return {
    title: "DLVUG",
    titleTemplate: "深度学习与视觉理解团队",
    description: "Deep Learning and Vision Understanding Group",
    ignoreDeadLinks: true,
    lastUpdated: true,
    themeConfig: {
      search: {
        provider: "algolia",
        options: {
          appId: "RER4HPYJ96",
          apiKey: "0d88192de1bdf25ed61d438a173e1993",
          indexName: "dlvugio",
        },
      },

      logo: "/imgs/logo.png",
      siteTitle: "DLVUG",
      nav,
      sidebar,
      outline: [1, 3],
      outlineTitle: "大纲",
      lastUpdatedText: "更新时间",
      posts: await getPosts(),
      postLength: await getPostLength(),
      socialLinks: [
        { icon: "github", link: "https://github.com/DLVUG/DLVUG.github.io" },
      ],
    },
    markdown: {
      lineNumbers: true,
      config: (md) => {
        // 可以使用更多的markdown-it插件
        md.use(require("markdown-it-mathjax3"));
      },
    },
  };
}
export default config();
