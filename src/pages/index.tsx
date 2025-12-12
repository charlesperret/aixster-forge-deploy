import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';

// Pre-computed content index embedded at build time for SSG stability
const CONTENT_INDEX = [{"id":"home","type":"home","title":"Aixster - The complete solution for modern businesses","slug":"index"},{"id":"pricing","type":"pricing","title":"Aixster Pricing","slug":"pricing"},{"id":"contact","type":"contact","title":"Contact Aixster","slug":"contact"},{"id":"comparisons-index","type":"comparison","title":"Aixster Comparisons","slug":"comparisons"},{"id":"comparison-1","type":"comparison","title":"Aixster vs Weglot","slug":"comparisons-aixster-vs-weglot"},{"id":"comparison-2","type":"comparison","title":"Aixster vs Localizejs","slug":"comparisons-aixster-vs-localizejs"},{"id":"comparison-3","type":"comparison","title":"Aixster vs Conveythis","slug":"comparisons-aixster-vs-conveythis"},{"id":"customers-index","type":"case-study","title":"Aixster Customer Stories","slug":"customers"},{"id":"case-techstart","type":"case-study","title":"TechStart Inc Case Study","slug":"customers-techstart"},{"id":"case-enterprise","type":"case-study","title":"Enterprise Solutions Co Case Study","slug":"customers-enterprise-solutions"},{"id":"case-growthlabs","type":"case-study","title":"GrowthLabs Agency Case Study","slug":"customers-growthlabs"},{"id":"glossary-index","type":"glossary","title":"Aixster Glossary","slug":"glossary"},{"id":"glossary-api","type":"glossary","title":"What is API Integration?","slug":"glossary-api-integration"},{"id":"glossary-saas","type":"glossary","title":"What is SaaS (Software as a Service)?","slug":"glossary-saas"},{"id":"glossary-workflow","type":"glossary","title":"What is Workflow Automation?","slug":"glossary-workflow-automation"},{"id":"glossary-digital","type":"glossary","title":"What is Digital Transformation?","slug":"glossary-digital-transformation"},{"id":"glossary-success","type":"glossary","title":"What is Customer Success?","slug":"glossary-customer-success"},{"id":"about","type":"trust","title":"About Aixster","slug":"about"},{"id":"privacy-policy","type":"legal","title":"Privacy Policy","slug":"privacy-policy"},{"id":"terms-of-service","type":"legal","title":"Terms of Service","slug":"terms-of-service"},{"id":"pillar-1","type":"pillar","title":"Aixster: Lovable Multilingual Solution for Global Reach","slug":"lovable-multilingual-solution"},{"id":"pillar-2","type":"pillar","title":"AI-Powered Translation for CMS | Aixster","slug":"1-ai-powered-translation-solution-for-lovable-cms"},{"id":"article-1","type":"article","title":"Get Started in Minutes with Aixster: Fast, AI-Powered Translation","slug":"get-started-in-minutes"},{"id":"article-2","type":"article","title":"Manage Your Translations with Ease | Aixster AI","slug":"easily-manage-your-translations"},{"id":"article-3","type":"article","title":"Global Reach with Aixster: Translate Your Website Today","slug":"reach-visitors-all-over-the-world"},{"id":"article-4","type":"article","title":"Go Multilingual with Ease using Aixster's Translation Solution","slug":"go-multilingual-with-ease"},{"id":"article-5","type":"article","title":"Join Thousands of Satisfied Weglot Users with Aixster","slug":"join-thousands-of-satisfied-weglot-users"},{"id":"article-6","type":"article","title":"Experience the Power of Aixster: Book Your Demo Today","slug":"take-a-product-demo"},{"id":"article-7","type":"article","title":"Get Started with Aixster: Fast, AI-Powered Website Translation","slug":"learn-how-to-get-started"},{"id":"article-8","type":"article","title":"Lovable Integration with Aixster: Your Questions Answered","slug":"frequently-asked-questions-about-lovable-integrati"},{"id":"article-9","type":"article","title":"Weglot is Free: Try Now with Aixster!","slug":"weglot-is-free-try-now"},{"id":"article-10","type":"article","title":"Effortless Localization with Aixster for Lovable","slug":"effortless-localization-for-lovable"},{"id":"article-11","type":"article","title":"Aixster: Effortless Setup, Global-Ready in Minutes","slug":"effortlessly-set-up-in-no-time"},{"id":"article-12","type":"article","title":"Aixster FAQ: Automated Translation & Global Readiness","slug":"frequently-asked-questions"},{"id":"article-13","type":"article","title":"Aixster: Global Ready in Minutes with Automated Translations","slug":"join-the-40-000-users-who-trust-localize-to-power"}];

export default function Home() {
  const pillarPages = CONTENT_INDEX.filter(item => item.type === 'pillar');
  const comparisonPages = CONTENT_INDEX.filter(item => item.slug.startsWith('vs-') || item.slug === 'comparisons');
  const caseStudyPages = CONTENT_INDEX.filter(item => item.slug.startsWith('case-study') || item.slug === 'customers');
  const glossaryPages = CONTENT_INDEX.filter(item => item.slug.startsWith('glossary') || item.slug === 'glossary');
  const trustPages = CONTENT_INDEX.filter(item => ['about', 'privacy-policy', 'terms-of-service'].includes(item.slug));
  const commercialPages = CONTENT_INDEX.filter(item => ['pricing', 'contact'].includes(item.slug));
  const blogPages = CONTENT_INDEX.filter(item => item.type === 'article' && !item.slug.startsWith('vs-') && !item.slug.startsWith('case-study') && !item.slug.startsWith('glossary'));
  
  return (
    <Layout>
      <Head>
        <title>SEO-Forge Generated B2B SaaS Site</title>
        <meta name="description" content="Complete B2B SaaS website with 25+ SEO-optimized pages - comparisons, case studies, pricing, and more" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
            The complete solution for modern businesses. {CONTENT_INDEX.length} SEO-optimized pages ready for deployment.
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
          {['Company A', 'Company B', 'Company C', 'Company D'].map(name => (
            <span key={name} style={{ fontSize: '1.25rem', fontWeight: 700, color: '#374151' }}>{name}</span>
          ))}
        </div>
      </section>

      {/* Feature Grid */}
      <section style={{ padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '3rem', color: '#111827' }}>
            Everything You Need
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
            {[
              { icon: '🚀', title: 'Lightning Fast', desc: 'Optimized for performance and Core Web Vitals' },
              { icon: '🔒', title: 'Enterprise Security', desc: 'Bank-grade security for your peace of mind' },
              { icon: '📊', title: 'Analytics Built-in', desc: 'Track everything with powerful insights' },
              { icon: '🎯', title: 'SEO Optimized', desc: 'Rank higher with built-in SEO best practices' },
              { icon: '🔄', title: 'Easy Integration', desc: 'Connect with your favorite tools instantly' },
              { icon: '💬', title: '24/7 Support', desc: 'Get help whenever you need it' }
            ].map(feature => (
              <div key={feature.title} style={{
                padding: '2rem',
                background: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)',
                textAlign: 'center'
              }}>
                <span style={{ fontSize: '2.5rem' }}>{feature.icon}</span>
                <h3 style={{ marginTop: '1rem', color: '#111827' }}>{feature.title}</h3>
                <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparisons Section */}
      {comparisonPages.length > 0 && (
        <section style={{ padding: '5rem 2rem', background: '#f9fafb' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#111827' }}>🆚 See How We Compare</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
              {comparisonPages.slice(0, 6).map(page => (
                <Link key={page.id} href={`/${page.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '1.5rem',
                    background: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                    border: '1px solid #e5e7eb'
                  }}>
                    <span style={{ background: '#fef3c7', color: '#92400e', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                      COMPARISON
                    </span>
                    <h3 style={{ marginTop: '0.75rem', color: '#1a1a1a', fontSize: '1rem' }}>{page.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/comparisons" style={{ display: 'inline-block', marginTop: '1.5rem', color: '#667eea', fontWeight: 600, textDecoration: 'none' }}>
              View All Comparisons →
            </Link>
          </div>
        </section>
      )}

      {/* Case Studies */}
      {caseStudyPages.length > 0 && (
        <section style={{ padding: '5rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: '#111827' }}>📈 Customer Success Stories</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
              {caseStudyPages.slice(0, 3).map(page => (
                <Link key={page.id} href={`/${page.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{
                    padding: '2rem',
                    background: '#f0fdf4',
                    borderRadius: '12px',
                    border: '1px solid #bbf7d0'
                  }}>
                    <span style={{ background: '#10b981', color: 'white', padding: '0.25rem 0.5rem', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 600 }}>
                      CASE STUDY
                    </span>
                    <h3 style={{ marginTop: '1rem', color: '#1a1a1a' }}>{page.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

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
          {[
            { q: 'How does the free trial work?', a: 'Start with 14 days free, no credit card required. Full access to all features.' },
            { q: 'Can I cancel anytime?', a: 'Yes, you can cancel your subscription at any time with no hidden fees.' },
            { q: 'Do you offer enterprise pricing?', a: 'Yes! Contact our sales team for custom enterprise solutions.' }
          ].map((faq, i) => (
            <details key={i} style={{
              padding: '1.5rem',
              borderBottom: '1px solid #e5e7eb',
              cursor: 'pointer'
            }}>
              <summary style={{ fontWeight: 600, color: '#111827', fontSize: '1.125rem' }}>{faq.q}</summary>
              <p style={{ marginTop: '1rem', color: '#6b7280', lineHeight: 1.6 }}>{faq.a}</p>
            </details>
          ))}
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
    </Layout>
  );
}

// No getStaticProps needed - data is embedded inline for 100% SSG stability
