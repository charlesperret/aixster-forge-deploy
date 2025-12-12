import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

const features = [
  {
    icon: '🌍',
    title: 'Global Reach',
    description: 'Connect with audiences worldwide through seamless multilingual support.'
  },
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description: 'AI-powered translations that are ready in seconds, not hours.'
  },
  {
    icon: '🎯',
    title: 'SEO Optimized',
    description: 'Every translation is crafted for search engine visibility.'
  },
  {
    icon: '🔒',
    title: 'Enterprise Security',
    description: 'Bank-grade encryption protects your content and data.'
  },
  {
    icon: '📊',
    title: 'Analytics Built-in',
    description: 'Track engagement and performance across all languages.'
  },
  {
    icon: '🤝',
    title: 'Easy Integration',
    description: 'Works with your existing tools and workflows.'
  }
];

const testimonials = [
  {
    quote: 'This solution transformed our global expansion strategy. We saw 300% growth in international traffic within 3 months.',
    author: 'Sarah Chen',
    role: 'VP of Marketing, TechStart Inc.',
    avatar: '👩‍💼'
  },
  {
    quote: 'The best translation tool we have ever used. Accurate, fast, and the SEO results speak for themselves.',
    author: 'Michael Roberts',
    role: 'Head of Content, GrowthLabs',
    avatar: '👨‍💻'
  },
  {
    quote: 'Finally, a solution that understands enterprise needs. The ROI was evident within the first quarter.',
    author: 'Emily Zhang',
    role: 'Director of Operations, Enterprise Solutions',
    avatar: '👩‍🔬'
  }
];

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Aixster - #1 AI-Powered Translation Solution</title>
        <meta name="description" content="Transform your global presence with AI-powered translations that drive traffic and conversions." />
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
