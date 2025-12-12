import Head from 'next/head';
import Link from 'next/link';

// PURE STATIC COMPONENT - No data dependencies, no getStaticProps
// Guaranteed to generate index.json correctly
export default function Home() {
  return (
    <>
      <Head>
        <title>Welcome to Your B2B SaaS Site</title>
        <meta name="description" content="Complete B2B SaaS website with SEO-optimized pages - comparisons, case studies, pricing, and more" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div style={{ minHeight: '100vh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
        {/* Navigation Header */}
        <header style={{
          background: '#ffffff',
          borderBottom: '1px solid #e5e7eb',
          position: 'sticky',
          top: 0,
          zIndex: 100,
          padding: '0 2rem'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '72px'
          }}>
            <Link href="/" style={{ textDecoration: 'none', fontWeight: 700, fontSize: '1.25rem', color: '#111827' }}>
              Your Brand
            </Link>
            <nav style={{ display: 'flex', gap: '2rem' }}>
              <Link href="/" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '0.925rem', fontWeight: 500 }}>Product</Link>
              <Link href="/comparisons" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '0.925rem', fontWeight: 500 }}>Compare</Link>
              <Link href="/pricing" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '0.925rem', fontWeight: 500 }}>Pricing</Link>
              <Link href="/glossary" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '0.925rem', fontWeight: 500 }}>Resources</Link>
              <Link href="/about" style={{ textDecoration: 'none', color: '#4b5563', fontSize: '0.925rem', fontWeight: 500 }}>Company</Link>
            </nav>
            <Link href="/contact" style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              padding: '0.625rem 1.25rem',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: 600,
              fontSize: '0.875rem'
            }}>
              Get Started
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
          padding: '6rem 2rem',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>
              Build Better, Faster
            </h1>
            <p style={{ fontSize: '1.375rem', opacity: 0.9, marginBottom: '2rem', lineHeight: 1.6 }}>
              The complete solution for modern businesses. Explore our SEO-optimized pages.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Link href="/contact" style={{
                background: 'white',
                color: '#667eea',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 600
              }}>
                Book a Demo
              </Link>
              <Link href="/pricing" style={{
                background: 'transparent',
                color: 'white',
                padding: '1rem 2rem',
                borderRadius: '8px',
                textDecoration: 'none',
                fontWeight: 600,
                border: '2px solid white'
              }}>
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section style={{ background: '#f9fafb', padding: '3rem 2rem', textAlign: 'center' }}>
          <p style={{ color: '#6b7280', marginBottom: '1.5rem' }}>Trusted by innovative companies worldwide</p>
          <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center', opacity: 0.5 }}>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#374151' }}>Company A</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#374151' }}>Company B</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#374151' }}>Company C</span>
            <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#374151' }}>Company D</span>
          </div>
        </section>

        {/* Feature Grid */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>
              Everything You Need
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
              <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <span style={{ fontSize: '2.5rem' }}>🚀</span>
                <h3 style={{ marginTop: '1rem', color: '#111827' }}>Lightning Fast</h3>
                <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>Optimized for performance and Core Web Vitals</p>
              </div>
              <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <span style={{ fontSize: '2.5rem' }}>🔒</span>
                <h3 style={{ marginTop: '1rem', color: '#111827' }}>Enterprise Security</h3>
                <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>Bank-grade security for your peace of mind</p>
              </div>
              <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <span style={{ fontSize: '2.5rem' }}>📊</span>
                <h3 style={{ marginTop: '1rem', color: '#111827' }}>Analytics Built-in</h3>
                <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>Track everything with powerful insights</p>
              </div>
              <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <span style={{ fontSize: '2.5rem' }}>🎯</span>
                <h3 style={{ marginTop: '1rem', color: '#111827' }}>SEO Optimized</h3>
                <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>Rank higher with built-in SEO best practices</p>
              </div>
              <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <span style={{ fontSize: '2.5rem' }}>🔄</span>
                <h3 style={{ marginTop: '1rem', color: '#111827' }}>Easy Integration</h3>
                <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>Connect with your favorite tools instantly</p>
              </div>
              <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', textAlign: 'center' }}>
                <span style={{ fontSize: '2.5rem' }}>💬</span>
                <h3 style={{ marginTop: '1rem', color: '#111827' }}>24/7 Support</h3>
                <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>Get help whenever you need it</p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links to Site Sections */}
        <section style={{ padding: '5rem 2rem', background: '#f9fafb' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#111827', textAlign: 'center' }}>Explore Our Site</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
              <Link href="/comparisons" style={{ textDecoration: 'none' }}>
                <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb', textAlign: 'center' }}>
                  <span style={{ fontSize: '2rem' }}>🆚</span>
                  <h3 style={{ marginTop: '1rem', color: '#111827' }}>Comparisons</h3>
                  <p style={{ color: '#6b7280', marginTop: '0.5rem', fontSize: '0.875rem' }}>See how we stack up</p>
                </div>
              </Link>
              <Link href="/customers" style={{ textDecoration: 'none' }}>
                <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb', textAlign: 'center' }}>
                  <span style={{ fontSize: '2rem' }}>📈</span>
                  <h3 style={{ marginTop: '1rem', color: '#111827' }}>Case Studies</h3>
                  <p style={{ color: '#6b7280', marginTop: '0.5rem', fontSize: '0.875rem' }}>Customer success stories</p>
                </div>
              </Link>
              <Link href="/glossary" style={{ textDecoration: 'none' }}>
                <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb', textAlign: 'center' }}>
                  <span style={{ fontSize: '2rem' }}>📚</span>
                  <h3 style={{ marginTop: '1rem', color: '#111827' }}>Glossary</h3>
                  <p style={{ color: '#6b7280', marginTop: '0.5rem', fontSize: '0.875rem' }}>Industry terms explained</p>
                </div>
              </Link>
              <Link href="/pricing" style={{ textDecoration: 'none' }}>
                <div style={{ padding: '2rem', background: 'white', borderRadius: '12px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', border: '1px solid #e5e7eb', textAlign: 'center' }}>
                  <span style={{ fontSize: '2rem' }}>💰</span>
                  <h3 style={{ marginTop: '1rem', color: '#111827' }}>Pricing</h3>
                  <p style={{ color: '#6b7280', marginTop: '0.5rem', fontSize: '0.875rem' }}>Plans for every size</p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section style={{ padding: '5rem 2rem', background: '#667eea', color: 'white' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem' }}>What Our Customers Say</h2>
            <blockquote style={{ fontSize: '1.5rem', fontStyle: 'italic', lineHeight: 1.6, opacity: 0.95 }}>
              "This solution transformed our business. We saw 300% growth in just 6 months."
            </blockquote>
            <p style={{ marginTop: '1rem', opacity: 0.8 }}>— Sarah Johnson, CEO at TechCorp</p>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', textAlign: 'center', color: '#111827' }}>Frequently Asked Questions</h2>
            <details style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 600, color: '#111827', fontSize: '1.125rem' }}>How does the free trial work?</summary>
              <p style={{ marginTop: '1rem', color: '#6b7280', lineHeight: 1.6 }}>Start with 14 days free, no credit card required. Full access to all features.</p>
            </details>
            <details style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 600, color: '#111827', fontSize: '1.125rem' }}>Can I cancel anytime?</summary>
              <p style={{ marginTop: '1rem', color: '#6b7280', lineHeight: 1.6 }}>Yes, you can cancel your subscription at any time with no hidden fees.</p>
            </details>
            <details style={{ padding: '1.5rem', borderBottom: '1px solid #e5e7eb', cursor: 'pointer' }}>
              <summary style={{ fontWeight: 600, color: '#111827', fontSize: '1.125rem' }}>Do you offer enterprise pricing?</summary>
              <p style={{ marginTop: '1rem', color: '#6b7280', lineHeight: 1.6 }}>Yes! Contact our sales team for custom enterprise solutions.</p>
            </details>
          </div>
        </section>

        {/* Final CTA */}
        <section style={{
          padding: '5rem 2rem',
          background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)',
          color: 'white',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Get Started?</h2>
          <p style={{ fontSize: '1.25rem', opacity: 0.9, marginBottom: '2rem' }}>Join thousands of satisfied customers today.</p>
          <Link href="/contact" style={{
            background: 'white',
            color: '#312e81',
            padding: '1rem 2.5rem',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 700,
            fontSize: '1.125rem'
          }}>
            Start Free Trial
          </Link>
        </section>

        {/* Fat Footer */}
        <footer style={{
          background: '#111827',
          color: '#d1d5db',
          padding: '4rem 2rem 2rem'
        }}>
          <div style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem'
          }}>
            <div>
              <h4 style={{ color: '#ffffff', fontWeight: 600, marginBottom: '1rem', fontSize: '0.925rem' }}>Product</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem' }}>Features</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/pricing" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem' }}>Pricing</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/contact" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem' }}>Demo</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#ffffff', fontWeight: 600, marginBottom: '1rem', fontSize: '0.925rem' }}>Comparisons</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/comparisons" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem' }}>See All Comparisons</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#ffffff', fontWeight: 600, marginBottom: '1rem', fontSize: '0.925rem' }}>Company</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/about" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem' }}>About Us</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/customers" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem' }}>Case Studies</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/privacy-policy" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem' }}>Privacy Policy</Link></li>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/terms-of-service" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem' }}>Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#ffffff', fontWeight: 600, marginBottom: '1rem', fontSize: '0.925rem' }}>Resources</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><Link href="/glossary" style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '0.875rem' }}>Glossary</Link></li>
              </ul>
            </div>
          </div>
          <div style={{
            maxWidth: '1280px',
            margin: '3rem auto 0',
            paddingTop: '2rem',
            borderTop: '1px solid #374151',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.875rem',
            color: '#6b7280'
          }}>
            <p>© 2024 Your Brand. All rights reserved.</p>
            <p>Generated by SEO-Forge</p>
          </div>
        </footer>
      </div>
    </>
  );
}
