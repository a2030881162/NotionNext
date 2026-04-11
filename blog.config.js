const BLOG = {
  API_BASE_URL: process.env.API_BASE_URL || 'https://www.notion.so/api/v3',
  NOTION_PAGE_ID: process.env.NOTION_PAGE_ID || '6315870fcfcc8329889b0116965efda9',
  
  THEME: 'hexo', 
  LANG: 'en-US', 
  SINCE: 2026,
  APPEARANCE: 'light', 
  HOME_BANNER_IMAGE: 'https://jasonwong-lighting.com/bg.jpg',

  AUTHOR: 'Jason Wong Lighting Design',
  BIO: 'International Interior & Architectural Lighting Design Studio',
  LINK: 'https://jasonwong-lighting.com',
  KEYWORDS: 'Lighting Design, Architectural Lighting, Professional Lighting Studio',
  BLOG_FAVICON: '/favicon.ico',

  PSEUDO_STATIC: false, 
  NEXT_REVALIDATE_SECOND: 60,
  APPEARANCE_DARK_TIME: [18, 6],
  ENABLE_RSS: true,
  UUID_REDIRECT: false, 
  CUSTOM_MENU: true,
  WIDGET_PET: false,
  CAN_COPY: true,
  LAYOUT_SIDEBAR_REVERSE: false,
  GREETING_WORDS: 'Innovation in Light, Excellence in Design.',

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
