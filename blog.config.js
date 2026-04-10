const BLOG = {
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3',
  NOTION_PAGE_ID: process.env.NOTION_PAGE_ID || '6315870fcfcc8329889b0116965efda9',
  
  // 1. 核心：换成落地页主题
  THEME: 'landing', 
  LANG: 'en-US',
  SINCE: 2026,
  APPEARANCE: 'light', 

  // 2. 企业品牌信息
  AUTHOR: 'Jason Wong Lighting',
  BIO: 'Premier Interior & Architectural Lighting Solutions',
  LINK: 'https://jasonwong-lighting.com',
  GREETING_WORDS: 'Innovation in Light, Excellence in Design.',

  // 3. 关闭博客挂件（洗掉博客味）
  WIDGET_PET: false, // 关掉那个左下角的卡通猫
  ENABLE_RSS: false, // 关掉 RSS
  MENU_SEARCH: false, // 关掉搜索框

  // 必要引用
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

  UUID_REDIRECT: false,
  CUSTOM_MENU: true
}

module.exports = BLOG
