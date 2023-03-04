// 配置网站的标题和描述，方便 SEO
module.exports = {
  title: "面试前端",
  description: "近期学习内容",
  base: '/Blog/',
  theme: "reco",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    subSidebar: "auto",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "Github",
        items: [
          {
            text: "mini-vue源码",
            link: "https://github.com/Julian0197/mini-vue",
          },
          {
            text: "面试八股",
            link: "https://github.com/Julian0197/Note-EveryDay",
          },
        ],
      },
    ],
    sidebar: [
      {
        title: "学习任务",
        path: "/catalog",
        collapsable: true,
        children: [
          { title: "Nio实习", path: "/catalog/Nio" },
          { title: "近期学习清单", path: "/catalog/ticket" },
        ],
      },
      {
        title: "基础学习",
        path: "/handbook/vue3 Api",
        collapsable: false, // 不折叠
        children: [{ title: "vue3 api", path: "/handbook/vue3 Api" }],
      },
    ],
  },
};
