const BLOG = {
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3',
  NOTION_PAGE_ID: process.env.NOTION_PAGE_ID || '33d5870fcfcc8099916fcf5ab5c4b108',
  THEME: process.env.NEXT_PUBLIC_THEME || 'hexo', 
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN',
  SINCE: process.env.NEXT_PUBLIC_SINCE || 2026,
  PSEUDO_STATIC: process.env.NEXT_PUBLIC_PSEUDO_STATIC || false,
  NEXT_REVALIDATE_SECOND: process.env.NEXT_PUBLIC_REVALIDATE_SECOND || 60,
  APPEARANCE: process.env.NEXT_PUBLIC_APPEARANCE || 'light',
  APPEARANCE_DARK_TIME: process.env.NEXT_PUBLIC_APPEARANCE_DARK_TIME || [18, 6],

  AUTHOR: process.env.NEXT_PUBLIC_AUTHOR || 'Jason Wong',
  BIO: process.env.NEXT_PUBLIC_BIO || '专业亮化照明设计',
  LINK: process.env.NEXT_PUBLIC_LINK || 'https://jasonwong-lighting.com',
  KEYWORDS: process.env.NEXT_PUBLIC_KEYWORD || 'Lighting Design, 照明设计',
  BLOG_FAVICON: process.env.NEXT_PUBLIC_FAVICON || '/favicon.ico',

  // 这里的 require 不要动，保持原样
  ...require('./conf/comment.config'),
  ...require('./conf/contact.config'),
  ...require('./conf/post.config'),
  ...require('./conf/analytics.config'),
  ...require('./conf/image.config'),
  ...require('./conf/font.config'),
  ...require('./conf/right-click-menu'),
  ...require('./conf/code.config'),
  ...require('./conf/animation.config'),
  ...require('./conf/widget.config'),
  ...require('./conf/ad.config'),
  ...require('./conf/plugin.config'),
  ...require('./conf/performance.config'),
  ...require('./conf/layout-map.config'),
  ...require('./conf/notion.config'),
  ...require('./conf/dev.config'),

  CUSTOM_MENU: process.env.NEXT_PUBLIC_CUSTOM_MENU || true,
  CAN_COPY: process.env.NEXT_PUBLIC_CAN_COPY || true,
  GREETING_WORDS: process.env.NEXT_PUBLIC_GREETING_WORDS || '欢迎来到 Jason Wong 的照明设计空间',
  UUID_REDIRECT: process.env.UUID_REDIRECT || false
}

module.exports = BLOG
