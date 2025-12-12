/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://example.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,
  
  // Pillar 6: Exclude non-strategic pages from sitemap
  exclude: ['/404', '/500', '/_*'],
  
  // Pillar 1 & 6: Custom robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/404', '/500'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://example.com/sitemap.xml',
    ],
  },
  
  // Pillar 1: Custom transform for priority and changefreq
  transform: async (config, path) => {
    // Home page highest priority
    if (path === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
      }
    }
    
    // Pillar pages high priority
    if (path.includes('/pricing') || path.includes('/comparisons') || path.includes('/about')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
      }
    }
    
    // Comparison pages medium-high priority
    if (path.includes('vs-')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.8,
        lastmod: new Date().toISOString(),
      }
    }
    
    // Default
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
    }
  },
}
