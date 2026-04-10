const BLOG = {
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3',
  NOTION_PAGE_ID: process.env.NOTION_PAGE_ID || '6315870fcfcc8329889b0116965efda9',
  
  // 1. 核心风格：国际设计师画廊风
  THEME: 'fukasawa', 
  LANG: 'en-US', // 英文界面，对接国外客户
  SINCE: 2026,
  APPEARANCE: 'light', 

  // 2. 品牌信息 (全英文)
  AUTHOR: 'Jason Wong',
  BIO: 'International Interior & Architectural Lighting Design Studio',
  LINK: 'https://jasonwong-lighting.com',
  KEYWORDS: 'Lighting Design, Architectural Lighting, Professional Lighting Studio',
  BLOG_FAVICON: '/favicon.ico',

  // 3. 系统必要零件 (补齐了，不会再报错)
  PSEUDO_STATIC: false, 
  NEXT_REVALIDATE_SECOND: 60,
  APPEARANCE_DARK_TIME: [18, 6],
  ENABLE_RSS: true,
  UUID_REDIRECT: false, // 刚才就是缺这个零件！
  CUSTOM_MENU: true,
  CAN_COPY: true,
  LAYOUT_SIDEBAR_REVERSE: false,
  GREETING_WORDS: 'Innovation in Light, Excellence in Design.',

  // 4. 核心配置文件引用
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

  CUSTOM_EXTERNAL_JS: [''],
  CUSTOM_EXTERNAL_CSS: ['']
}

module.exports = BLOG
