/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Pass PMP Now',
  author: 'Pass PMP Now',
  headerTitle: 'Pass PMP Now',
  description:
    'Pass the PMP with study plans, ITTO explainers, realistic practice, and exam strategies.',
  language: 'en-us',
  theme: 'system', // system | dark | light

  // === SEO / Sitemap ===
  siteUrl: 'https://passpmpnow.com', // ← 这是生成 sitemap 的来源，请务必保持为你的主域名
  siteRepo: 'https://github.com/langerlee-w/passpmpnow', // ← 如与你实际仓库不同，改成你的

  // === Brand assets ===
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,

  // === Contacts & Socials（没账号就先留空，后面再补）===
  mastodon: '',
  email: 'hello@passpmpnow.com',
  github: '',
  x: '', // e.g. https://twitter.com/yourhandle
  // twitter: '', // deprecated alias of x
  facebook: '',
  youtube: '',
  linkedin: '',
  threads: '',
  instagram: '',
  medium: '',
  bluesky: '',

  locale: 'en-US',

  // 是否固定顶栏
  stickyNav: false,

  // === Analytics（我们已用 Next Script 注入 GA4；这里留空即可，避免引入多余 CSP）===
  analytics: {
    // 留空 {} 即不启用 Pliny 内置的 analytics 组件
    // 如需 Umami / Plausible / Posthog，再按需开启并同步修改 next.config.js 的 CSP
  },

  // === Newsletter（未使用先禁用）===
  newsletter: {
    provider: '', // e.g. 'buttondown'；留空代表不启用
  },

  // === Comments（未配置 giscus/utterances 时建议禁用）===
  comments: {
    provider: '', // 'giscus' | 'utterances' | 'disqus' | ''(禁用)
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1',
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'en',
    },
  },

  // === Search ===
  search: {
    provider: 'kbar', // 'kbar' or 'algolia'
    kbarConfig: {
      // 用于本地搜索的数据源路径（构建时自动生成）
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
    // 如果以后接入 Algolia，取消注释并填写
    // algoliaConfig: {
    //   appId: '',
    //   apiKey: '',
    //   indexName: '',
    // },
  },
}

module.exports = siteMetadata
