const BLOG = {
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion. v/api/v3',
  NOTION_PAGE_ID: process.env.NOTION_PAGE_ID || '6315870fcfcc8329889b0116965efda9',
  
  // 1. 换成设计师最爱的极简主题
  THEME: 'fukasawa', 
  
  // 2. 语种切到英文，对接海外客户
  LANG: 'en-US', 
  
  SINCE: 2026,
  APPEARANCE: 'light', // 建议保持白色背景，显得干净专业

  // 3. 品牌信息全英文
  AUTHOR: 'Jason Wong',
  BIO: 'International Interior & Architectural Lighting Design Studio',
  LINK: 'https://jasonwong-lighting.com',
  KEYWORDS: 'Lighting Design, Architectural Lighting, Professional Lighting Studio',
  
  // 这里的引用不要动
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

  GREETING_WORDS: 'Innovation in Light, Excellence in Design.',
  CUSTOM_MENU: true,
  CAN_COPY: true
}

module.exports = BLOG
