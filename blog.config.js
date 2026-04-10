const BLOG = {
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3',
  NOTION_PAGE_ID: process.env.NOTION_PAGE_ID || '33d5870fcfcc8099916fcf5ab5c4b108',
  THEME: process.env.NEXT_PUBLIC_THEME || 'hexo', 
  LANG: process.env.NEXT_PUBLIC_LANG || 'zh-CN',
  SINCE: 2026,
  APPEARANCE: 'light',
  AUTHOR: 'Jason Wong',
  BIO: '专业亮化照明设计',
  LINK: 'https://jasonwong-lighting.com',
  GREETING_WORDS: '欢迎来到 Jason Wong 的照明设计空间',
  
  // 核心引用保持原样
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
  ...require('./conf/dev.config')
}

module.exports = BLOG
