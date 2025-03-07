// 主题配置
export const themeConfig = {
  // 站点信息
  siteMeta: {
    // 站点标题
    title: "QwQ",
    // 站点描述
    description: "不知写什么",
    // 站点logo
    logo: "/images/logo/logo.webp",
    // 站点地址
    site: "https://qwq.gs",
    // 语言
    lang: "zh-CN",
    // 作者
    author: {
      name: "bossli",
      cover: "/images/logo/logo.webp",
      email: "w@qwq.gs",
      link: "https://qwq.gs",
    },
  },
  // 备案信息
  icp: "暂无备案",
  // 建站日期
  since: "2024-11-17",
  // 每页文章数据
  postSize: 8,
  // inject
  inject: {
    // 头部
    // https://vitepress.dev/zh/reference/site-config#head
    header: [
      // favicon
      ["link", { rel: "icon", href: "/favicon.ico" }],
      // RSS
      [
        "link",
        {
          rel: "alternate",
          type: "application/rss+xml",
          title: "RSS",
          href: "https://qwq.gs/rss.xml",
        },
      ],
      // 预载 CDN
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://s1.hdslb.com",
        },
      ],
      [
        "link",
        {
          crossorigin: "",
          rel: "preconnect",
          href: "https://mirrors.sustech.edu.cn",
        },
      ],
      // HarmonyOS font
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://s1.hdslb.com/bfs/static/jinkela/long/font/regular.css",
        },
      ],
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/lxgw-wenkai-screen-webfont/1.7.0/style.css",
        },
      ],
      // iconfont
      [
        "link",
        {
          crossorigin: "anonymous",
          rel: "stylesheet",
          href: "https://cdn2.codesign.qq.com/icons/g5ZpEgx3z4VO6j2/latest/iconfont.css",
        },
      ],
      // Embed code
      ["link", { rel: "preconnect", href: "https://use.sevencdn.com" }],
      ["link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" }],
      [
        "link",
        {
          crossorigin: "anonymous",
          href: "https://use.sevencdn.com/css2?family=Fira+Code:wght@300..700&display=swap",
          rel: "stylesheet",
        },
      ],
      // 预载 DocSearch
      [
        "link",
        {
          href: "https://X5EBEZB53I-dsn.algolia.net",
          rel: "preconnect",
          crossorigin: "",
        },
      ],
    ],
  },
  // 导航栏菜单
  nav: [
    {
      text: "文库",
      items: [
        { text: "文章列表", link: "/pages/archives", icon: "article" },
        { text: "全部分类", link: "/pages/categories", icon: "folder" },
        { text: "全部标签", link: "/pages/tags", icon: "hashtag" },
      ],
    },
    {
      text: "专栏",
      items: [
        { text: "技术分享", link: "/pages/categories/技术分享", icon: "technical" },
        { text: "我的项目", link: "/pages/project", icon: "code" },
        { text: "效率工具", link: "/pages/tools", icon: "tools" },
      ],
    },
    {
      text: "友链",
      items: [
        { text: "友情链接", link: "/pages/link", icon: "people" },
      ],
    },
    {
      text: "我的",
      items: [
        { text: "畅所欲言", link: "/pages/message", icon: "chat" },
        { text: "必应壁纸", link: "/pages/bing", icon: "reward" },
        { text: "关于本站", link: "/pages/about", icon: "contacts" },
      ],
    },
  ],
  // 导航栏菜单 - 左侧
  navMore: [
    {
      name: "博客",
      list: [
        {
          icon: "/images/logo/logo.webp",
          name: "主站",
          url: "/",
        },
        {
          icon: "/images/logo/logo.webp",
          name: "博客镜像站",
          url: "https://vitepress-theme-curve-nine.vercel.app/",
        },
      ],
    },
    {
      name: "服务",
      list: [
        {
          icon: "https://pic.efefee.cn/uploads/2024/04/08/6613465358077.png",
          name: "壁纸",
          url: "https://bing.qwq.gs/",
        },
        {
          icon: "https://pic.efefee.cn/uploads/2024/04/08/661346d418ad7.png",
          name: "服务器监控",
          url: "https://s.qwq.gs/",
        },
        {
          icon: "https://pic.efefee.cn/uploads/2024/04/08/66134722586fa.png",
          name: "站点监测",
          url: "https://k.qwq.gs/",
        },
      ],
    },
    {
      name: "项目",
      list: [
        {
          icon: "/images/logo/logo.webp",
          name: "Curve",
          url: "https://github.com/imsyy/vitepress-theme-curve",
        },
        {
          icon: "https://pic.efefee.cn/uploads/2024/04/07/66124f5fc63c8.png",
          name: "SPlayer",
          url: "https://github.com/imsyy/SPlayer",
        },
        {
          icon: "https://pic.efefee.cn/uploads/2024/04/08/6613465358077.png",
          name: "Snavigation",
          url: "https://github.com/imsyy/SPlayer",
        },
        {
          icon: "/images/logo/logo.webp",
          name: "Home",
          url: "https://github.com/imsyy/home",
        },
        {
          icon: "https://pic.efefee.cn/uploads/2024/04/08/661346d418ad7.png",
          name: "DailyHotApi",
          url: "https://github.com/imsyy/DailyHotApi",
        },
        {
          icon: "https://pic.efefee.cn/uploads/2024/04/08/66134722586fa.png",
          name: "site-status",
          url: "https://github.com/imsyy/site-status",
        },
      ],
    },
  ],
  // 封面配置
  cover: {
    // 是否开启双栏布局
    twoColumns: false,
    // 是否开启封面显示
    showCover: {
      // 是否开启封面显示 文章不设置cover封面会显示异常，可以设置下方默认封面
      enable: true,
      // 封面布局方式: left | right | both
      coverLayout: 'both',
      // 默认封面(随机展示)
      defaultCover: [
        'https://bing.qwq.gs/api/getBing',
      ]
    }
  },
  // 页脚信息
  footer: {
    // 社交链接（请确保为偶数个）
    social: [
      {
        icon: "email",
        link: "mailto:w@qwq.gs",
      },
      {
        icon: "telegram",
        link: "https://t.me/shop_yuan",
      },
    ],
    // sitemap
    sitemap: [
      {
        text: "博客",
        items: [
          { text: "近期文章", link: "/" },
          { text: "全部分类", link: "/pages/categories" },
          { text: "全部标签", link: "/pages/tags" },
          { text: "文章归档", link: "/pages/archives", newTab: true },
        ],
      },
      {
        text: "项目",
        items: [
          { text: "Home", link: "https://github.com/imsyy/home/", newTab: true },
          { text: "SPlayer", link: "https://github.com/imsyy/SPlayer/", newTab: true },
          { text: "DailyHotApi", link: "https://github.com/imsyy/DailyHotApi/", newTab: true },
          { text: "Snavigation", link: "https://github.com/imsyy/Snavigation/", newTab: true },
        ],
      },
      {
        text: "专栏",
        items: [
          { text: "技术分享", link: "/pages/categories/技术分享" },
          { text: "我的项目", link: "/pages/project" },
          { text: "效率工具", link: "/pages/tools" },
        ],
      },
      {
        text: "页面",
        items: [
          { text: "畅所欲言", link: "/pages/message" },
          { text: "关于本站", link: "/pages/about" },
          { text: "隐私政策", link: "/pages/privacy" },
          { text: "版权协议", link: "/pages/cc" },
        ],
      },
      {
        text: "服务",
        items: [
          { text: "站点监控", link: "https://k.qwq.gs/", newTab: true },
          { text: "必应每日壁纸", link: "https://bing.qwq.gs/", newTab: true },
          { text: "服务器监控", link: "https://s.qwq.gs/", newTab: true },
          { text: "站点订阅", link: "https://qwq.gs/rss.xml", newTab: true },
          {
            text: "反馈投诉",
            link: "mailto:w@qwq.gs",
            newTab: true,
          },
        ],
      },
    ],
  },
  // 评论
  comment: {
    enable: true,
    // 评论系统选择
    // artalk / twikoo
    type: "artalk",
    // artalk
    // https://artalk.js.org/
    artalk: {
      site: "QwQ",
      server: "https://artalk.qwq.gs",
    },
    // twikoo
    // https://twikoo.js.org/
    twikoo: {
      // 必填，若不想使用 CDN，可以使用 pnpm add twikoo 安装并引入
      js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/twikoo/1.6.39/twikoo.all.min.js",
      envId: "",
      // 环境地域，默认为 ap-shanghai，腾讯云环境填 ap-shanghai 或 ap-guangzhou；Vercel 环境不填
      region: "ap-shanghai",
      lang: "zh-CN",
    },
  },
  // 侧边栏
  aside: {
    // 站点简介
    hello: {
      enable: true,
      text: "这里有关于<strong>开发</strong>相关的问题和看法，也会有一些<strong>奇技淫巧</strong>的分享，其中大部分内容会侧重于<strong>前端开发</strong>。希望你可以在这里找到对你有用的知识和教程。",
    },
    // 目录
    toc: {
      enable: true,
    },
    // 标签
    tags: {
      enable: true,
    },
    // 倒计时
    countDown: {
      enable: true,
      // 倒计时日期
      data: {
        name: "春节",
        date: "2025-01-29",
      },
    },
    // 站点数据
    siteData: {
      enable: true,
    },
  },
  // 友链
  friends: {
    // 友链朋友圈
    circleOfFriends: "",
    // 动态友链
    dynamicLink: {
      server: "",
      app_token: "",
      table_id: "",
    },
  },
  // 音乐播放器
  // https://github.com/imsyy/Meting-API
  music: {
    enable: true,
    // url
    url: "https://api-meting.efefee.cn",
    // id
    id: 2619366284,
    // netease / tencent / kugou
    server: "netease",
    // playlist / album / song
    type: "playlist",
  },
  // 搜索
  // https://www.algolia.com/
  search: {
    enable: false,
    appId: "RNV09YSTHI",
    apiKey: "6111ca633c3ba57d78c8cfaf086cb617",
  },
  // 打赏
  rewardData: {
    enable: true,
    // 微信二维码
    wechat: "https://pic.efefee.cn/uploads/2024/04/07/66121049d1e80.webp",
    // 支付宝二维码
    alipay: "https://pic.efefee.cn/uploads/2024/04/07/661206631d3b5.webp",
  },
  // 图片灯箱
  fancybox: {
    enable: true,
    js: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.umd.min.js",
    css: "https://mirrors.sustech.edu.cn/cdnjs/ajax/libs/fancyapps-ui/5.0.36/fancybox/fancybox.min.css",
  },
  // 外链中转
  jumpRedirect: {
    enable: true,
    // 排除类名
    exclude: [
      "cf-friends-link",
      "upyun",
      "icp",
      "author",
      "rss",
      "cc",
      "power",
      "social-link",
      "link-text",
      "travellings",
      "post-link",
      "report",
      "more-link",
      "skills-item",
      "right-menu-link",
      "link-card",
    ],
  },
  // 站点统计
  tongji: {
    "51la": "yCwOuJIAAcBaRSiHhECy1gFC6CP8mS3z",
  },
};
