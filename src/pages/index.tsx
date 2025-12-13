import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const BUSINESS_NAME = 'Lovalingo';

const features = [
  {
    icon: '🌍',
    title: 'Global Reach',
    description: 'Connect with audiences worldwide through seamless multilingual support. Our platform handles over 100 languages with native-quality translations that resonate with local markets.'
  },
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'AI-powered translations that are ready in seconds, not hours. Our neural network processes thousands of words per minute without sacrificing quality.'
  },
  {
    icon: '🎯',
    title: 'SEO Optimized',
    description: 'Every translation is crafted for search engine visibility. We preserve meta tags, structured data, and keyword targeting across all languages.'
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    description: 'Bank-grade encryption protects your content and data. SOC 2 Type II certified with GDPR compliance built-in for peace of mind.'
  },
  {
    icon: '📊',
    title: 'Analytics Built-in',
    description: 'Track engagement and performance across all languages. Real-time dashboards show translation usage, traffic by language, and ROI metrics.'
  },
  {
    icon: '🤝',
    title: 'Easy Integration',
    description: 'Works with your existing tools and workflows. One-click integrations with WordPress, Shopify, React, Next.js, and all major platforms.'
  }
];

const testimonials = [
  {
    quote: 'Lovalingo transformed our global expansion strategy. We saw 300% growth in international traffic within 3 months. The SEO optimization across languages gave us rankings we never thought possible.',
    author: 'Sarah Chen',
    role: 'VP of Marketing, TechStart Inc.',
    avatar: '👩‍💼'
  },
  {
    quote: 'The best translation tool we have ever used. Accurate, fast, and the SEO results speak for themselves. Our German and French sites now outperform our English content in organic search.',
    author: 'Michael Roberts',
    role: 'Head of Content, GrowthLabs',
    avatar: '👨‍💻'
  },
  {
    quote: 'Finally, a solution that understands enterprise needs. The ROI was evident within the first quarter. We reduced translation costs by 80% while improving quality scores.',
    author: 'Emily Zhang',
    role: 'Director of Operations, Enterprise Solutions',
    avatar: '👩‍🔬'
  }
];

const howItWorks = [
  {
    step: '01',
    title: 'Connect Your Website',
    description: 'Simply paste your website URL or connect via our API. Our intelligent crawler automatically discovers all your content, including pages, blog posts, meta data, and structured content. The entire process takes less than 5 minutes for most websites.'
  },
  {
    step: '02',
    title: 'Choose Target Languages',
    description: 'Select from over 100 languages with native-quality translations. Our AI understands context, idioms, and cultural nuances to deliver translations that truly resonate with local audiences. Set language-specific SEO keywords for maximum search visibility.'
  },
  {
    step: '03',
    title: 'Review & Customize',
    description: 'Our editor gives you full control over every translation. Built-in glossaries ensure brand consistency, while collaborative review tools let your team approve content before publishing. Changes sync instantly across all your platforms.'
  },
  {
    step: '04',
    title: 'Deploy & Monitor',
    description: 'One-click deployment publishes your multilingual content with proper hreflang tags, language subdirectories, and SEO-optimized URLs. Real-time analytics track performance by language, helping you identify your strongest markets.'
  }
];

const detailedFeatures = [
  {
    category: 'Translation Engine',
    items: [
      'Neural Machine Translation (NMT) with 99.2% accuracy score',
      'Context-aware translations that understand your industry terminology',
      'Automatic tone matching to preserve your brand voice',
      'Real-time translation memory that learns from your corrections',
      'Support for HTML, Markdown, JSON, and plain text formats'
    ]
  },
  {
    category: 'SEO Optimization',
    items: [
      'Automatic hreflang tag generation and validation',
      'Language-specific keyword research and optimization',
      'Localized meta titles and descriptions (50-60 / 150-160 chars)',
      'Schema.org markup preservation across all languages',
      'XML sitemap generation with language alternates',
      'Canonical URL management for multilingual content'
    ]
  },
  {
    category: 'Integration & Deployment',
    items: [
      'WordPress plugin with one-click installation',
      'Shopify app for e-commerce translation',
      'REST API for custom integrations',
      'CDN-powered delivery for sub-100ms response times',
      'Language subdirectory and subdomain support',
      'Automatic SSL certificate provisioning'
    ]
  },
  {
    category: 'Enterprise Features',
    items: [
      'SSO/SAML authentication for team access',
      'Role-based permissions and approval workflows',
      'Custom glossaries and translation memories',
      'Dedicated success manager and priority support',
      'SLA guarantees with 99.99% uptime',
      'On-premise deployment options available'
    ]
  }
];

const faqs = [
  {
    question: 'How accurate are Lovalingo translations compared to human translators?',
    answer: 'Our neural translation engine achieves 99.2% accuracy on standardized tests, comparable to professional human translators. For critical content, our hybrid approach combines AI translation with human review to ensure perfect quality. Most customers report that our AI translations require minimal to no editing.'
  },
  {
    question: 'How does Lovalingo handle SEO for multilingual websites?',
    answer: 'We automatically implement all SEO best practices including hreflang tags, language-specific sitemaps, localized meta data, and proper URL structures. Our system preserves your existing SEO work while optimizing for each target language. Most customers see ranking improvements within 4-6 weeks of deployment.'
  },
  {
    question: 'Can I customize translations to match my brand voice?',
    answer: 'Absolutely. Our platform includes custom glossaries, brand style guides, and tone settings. You can define industry-specific terminology, preferred phrases, and words to avoid. The AI learns from your corrections over time, continuously improving to match your unique voice.'
  },
  {
    question: 'What platforms and CMS systems does Lovalingo integrate with?',
    answer: 'We offer native integrations with WordPress, Shopify, Webflow, Contentful, Sanity, Strapi, and more. Our REST API works with any platform, and we provide SDKs for React, Next.js, Vue, and Angular. Most integrations take less than 15 minutes to set up.'
  },
  {
    question: 'How long does it take to translate an entire website?',
    answer: 'Initial translation depends on your website size. A typical 50-page website is fully translated in under 30 minutes. Enterprise sites with thousands of pages complete within a few hours. Incremental updates happen in real-time as you publish new content.'
  },
  {
    question: 'Is my content secure with Lovalingo?',
    answer: 'Yes, security is our top priority. We are SOC 2 Type II certified, GDPR compliant, and use AES-256 encryption for all data at rest and in transit. Your content is never used to train our AI models. Enterprise customers can also choose on-premise deployment for maximum control.'
  },
  {
    question: 'What happens if I am not satisfied with the translation quality?',
    answer: 'We offer a 30-day money-back guarantee for all new customers. Our support team can work with you to fine-tune translations, and we provide unlimited revision requests during your subscription. Most quality concerns are resolved within 24 hours.'
  },
  {
    question: 'How does pricing work for Lovalingo?',
    answer: 'We offer flexible plans based on your word count and feature needs. Starter is free for small sites, Professional scales with your growth at $49/month, and Enterprise provides unlimited translations with dedicated support. All plans include our core SEO optimization features.'
  }
];

export default function Home() {
  return (
    <Layout businessName={BUSINESS_NAME}>
      <Head>
        <title>{BUSINESS_NAME} - #1 AI-Powered Website Translation Platform</title>
        <meta name="description" content="Transform your global presence with AI-powered translations that drive traffic and conversions. 100+ languages, SEO-optimized, enterprise-ready. Start free today." />
        <link rel="canonical" href="https://example.com/" />
      </Head>
      
      <style jsx>{`
        .hero {
          background: linear-gradient(180deg, #0a0a0f 0%, #1a1a2e 100%);
          position: relative;
          overflow: hidden;
          padding: 120px 24px;
          text-align: center;
        }
        
        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          left: 50%;
          transform: translateX(-50%);
          width: 120%;
          height: 100%;
          background: radial-gradient(ellipse, rgba(168, 85, 247, 0.15) 0%, transparent 60%);
          pointer-events: none;
        }
        
        .hero-content {
          position: relative;
          max-width: 900px;
          margin: 0 auto;
        }
        
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: rgba(168, 85, 247, 0.15);
          border: 1px solid rgba(168, 85, 247, 0.3);
          border-radius: 30px;
          color: #a855f7;
          font-size: 0.875rem;
          font-weight: 500;
          margin-bottom: 32px;
        }
        
        .hero-title {
          font-size: 4rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.1;
          letter-spacing: -0.03em;
          margin-bottom: 24px;
        }
        
        .hero-title span {
          background: linear-gradient(135deg, #a855f7, #6366f1, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .hero-subtitle {
          font-size: 1.375rem;
          color: #9ca3af;
          max-width: 600px;
          margin: 0 auto 40px;
          line-height: 1.6;
        }
        
        .hero-cta {
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #a855f7, #6366f1);
          color: white;
          padding: 16px 32px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 8px 30px rgba(168, 85, 247, 0.35);
        }
        
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 40px rgba(168, 85, 247, 0.5);
        }
        
        .btn-secondary {
          background: transparent;
          color: #e5e7eb;
          padding: 16px 32px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          border: 2px solid rgba(255, 255, 255, 0.2);
          transition: border-color 0.2s, background 0.2s;
        }
        
        .btn-secondary:hover {
          border-color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.05);
        }
        
        /* Features Section */
        .features {
          padding: 120px 24px;
          background: #0a0a0f;
        }
        
        .section-header {
          text-align: center;
          max-width: 600px;
          margin: 0 auto 64px;
        }
        
        .section-label {
          color: #a855f7;
          font-size: 0.875rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 12px;
        }
        
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }
        
        .section-desc {
          color: #9ca3af;
          font-size: 1.125rem;
        }
        
        .features-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        
        .feature-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.02) 100%);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          padding: 32px;
          transition: transform 0.2s, border-color 0.2s;
        }
        
        .feature-card:hover {
          transform: translateY(-4px);
          border-color: rgba(168, 85, 247, 0.3);
        }
        
        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 20px;
        }
        
        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 12px;
        }
        
        .feature-desc {
          color: #9ca3af;
          font-size: 0.9375rem;
          line-height: 1.6;
        }
        
        /* Testimonials */
        .testimonials {
          padding: 120px 24px;
          background: linear-gradient(180deg, #0a0a0f 0%, #0f0f18 100%);
        }
        
        .testimonials-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        
        .testimonial-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 16px;
          padding: 32px;
        }
        
        .testimonial-quote {
          font-size: 1rem;
          color: #d1d5db;
          line-height: 1.7;
          margin-bottom: 24px;
          font-style: italic;
        }
        
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .testimonial-avatar {
          font-size: 2rem;
        }
        
        .testimonial-name {
          font-weight: 600;
          color: #ffffff;
          font-size: 0.9375rem;
        }
        
        .testimonial-role {
          color: #6b7280;
          font-size: 0.8125rem;
        }
        
        /* CTA Section */
        .cta-section {
          padding: 120px 24px;
          background: linear-gradient(135deg, #1a1a2e 0%, #0a0a0f 100%);
          text-align: center;
        }
        
        .cta-box {
          max-width: 700px;
          margin: 0 auto;
          padding: 64px;
          background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(99, 102, 241, 0.1));
          border: 1px solid rgba(168, 85, 247, 0.2);
          border-radius: 24px;
        }
        
        .cta-title {
          font-size: 2.25rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 16px;
        }
        
        .cta-desc {
          color: #9ca3af;
          font-size: 1.125rem;
          margin-bottom: 32px;
        }
        
        @media (max-width: 1024px) {
          .features-grid, .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
        }
        
        @media (max-width: 768px) {
          .hero-title { font-size: 2.5rem; }
          .hero-subtitle { font-size: 1.125rem; }
          .section-title { font-size: 2rem; }
          .features-grid, .testimonials-grid { grid-template-columns: 1fr; }
          .cta-box { padding: 40px 24px; }
        }
      `}</style>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            ✨ Trusted by 10,000+ businesses worldwide
          </div>
          <h1 className="hero-title">
            Translate Your Website.<br />
            <span>Multiply Your Reach.</span>
          </h1>
          <p className="hero-subtitle">
            AI-powered translations that preserve your brand voice while optimizing 
            for search engines in every language.
          </p>
          <div className="hero-cta">
            <Link href="/contact" className="btn-primary">Start Free Trial</Link>
            <Link href="/pricing" className="btn-secondary">View Pricing</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="section-header">
          <p className="section-label">Features</p>
          <h2 className="section-title">Everything You Need to Go Global</h2>
          <p className="section-desc">
            Powerful tools to translate, optimize, and scale your content worldwide.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="section-header">
          <p className="section-label">Testimonials</p>
          <h2 className="section-title">Loved by Industry Leaders</h2>
          <p className="section-desc">
            See what our customers have to say about their experience.
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <p className="testimonial-quote">"{testimonial.quote}"</p>
              <div className="testimonial-author">
                <span className="testimonial-avatar">{testimonial.avatar}</span>
                <div>
                  <p className="testimonial-name">{testimonial.author}</p>
                  <p className="testimonial-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-box">
          <h2 className="cta-title">Ready to Go Global?</h2>
          <p className="cta-desc">
            Join thousands of businesses already reaching new markets with our platform.
          </p>
          <Link href="/contact" className="btn-primary">Get Started Free</Link>
        </div>
      </section>
    </Layout>
  );
}
