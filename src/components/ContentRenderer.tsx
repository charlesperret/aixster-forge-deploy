import Link from 'next/link';

interface ContentRendererProps {
  content: string;
  pageType?: string;
  businessName?: string;
}

export default function ContentRenderer({ content, pageType = 'article', businessName = 'SEO-Forge' }: ContentRendererProps) {
  // Parse and render rich content
  const renderContent = () => {
    const sections = content.split('---').filter(s => s.trim());
    
    return sections.map((section, idx) => {
      const trimmed = section.trim();
      
      // Detect section types
      if (trimmed.includes('## Choose Your Plan') || trimmed.includes('Starter') && trimmed.includes('Professional')) {
        return <PricingSection key={idx} content={trimmed} businessName={businessName} />;
      }
      if (trimmed.includes('| Feature') || trimmed.includes('|---')) {
        return <ComparisonTableSection key={idx} content={trimmed} />;
      }
      if (trimmed.includes('## Popular Comparisons') || trimmed.includes('alternatives')) {
        return <ComparisonHubSection key={idx} content={trimmed} businessName={businessName} />;
      }
      if (trimmed.startsWith('> ')) {
        return <TestimonialSection key={idx} content={trimmed} />;
      }
      
      return <StandardSection key={idx} content={trimmed} />;
    });
  };

  return <div className="content-renderer">{renderContent()}</div>;
}

// Pricing Section with Cards
function PricingSection({ content, businessName }: { content: string; businessName: string }) {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: '',
      description: 'Perfect for individuals getting started',
      features: ['Up to 3 team members', 'Core features included', 'Community support', 'Basic analytics', '1GB storage'],
      cta: 'Start Free',
      highlighted: false
    },
    {
      name: 'Professional',
      price: '$49',
      period: '/month',
      description: 'Ideal for growing teams',
      features: ['Up to 25 team members', 'Priority email support', 'Advanced analytics', '50GB storage', 'API access', 'Custom integrations', 'SSO authentication'],
      cta: 'Start Trial',
      highlighted: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large organizations',
      features: ['Unlimited team members', '24/7 dedicated support', 'Custom analytics', 'Unlimited storage', 'SLA guarantee', 'Dedicated success manager'],
      cta: 'Contact Sales',
      highlighted: false
    }
  ];

  return (
    <section className="pricing-section">
      <style jsx>{`
        .pricing-section { padding: 80px 24px; }
        .pricing-header { text-align: center; margin-bottom: 64px; }
        .pricing-title {
          font-size: 2.75rem; font-weight: 800; color: #ffffff;
          margin-bottom: 16px; letter-spacing: -0.02em;
        }
        .pricing-subtitle { color: #9ca3af; font-size: 1.25rem; max-width: 600px; margin: 0 auto; }
        .pricing-grid {
          display: grid; grid-template-columns: repeat(3, 1fr);
          gap: 32px; max-width: 1200px; margin: 0 auto;
        }
        .pricing-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px; padding: 40px; position: relative;
          transition: all 0.3s;
        }
        .pricing-card:hover { transform: translateY(-8px); border-color: rgba(168, 85, 247, 0.3); }
        .pricing-card.highlighted {
          background: linear-gradient(180deg, rgba(168, 85, 247, 0.12) 0%, rgba(99, 102, 241, 0.08) 100%);
          border-color: rgba(168, 85, 247, 0.4);
        }
        .popular-badge {
          position: absolute; top: -12px; left: 50%; transform: translateX(-50%);
          background: linear-gradient(135deg, #a855f7, #6366f1);
          color: white; padding: 6px 20px; border-radius: 20px;
          font-size: 0.75rem; font-weight: 700; text-transform: uppercase;
        }
        .plan-name { font-size: 1.375rem; font-weight: 700; color: #ffffff; margin-bottom: 8px; }
        .plan-price {
          font-size: 3.5rem; font-weight: 800; color: #ffffff;
          display: flex; align-items: baseline; gap: 4px;
        }
        .plan-period { font-size: 1rem; color: #6b7280; font-weight: 500; }
        .plan-desc { color: #9ca3af; margin: 16px 0 32px; font-size: 0.9375rem; }
        .features-list { list-style: none; margin-bottom: 32px; }
        .features-list li {
          padding: 10px 0; color: #d1d5db; font-size: 0.9375rem;
          display: flex; align-items: center; gap: 12px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }
        .check { color: #10b981; font-size: 1.125rem; }
        .plan-cta {
          display: block; width: 100%; padding: 16px;
          background: linear-gradient(135deg, #a855f7, #6366f1);
          color: white; border: none; border-radius: 12px;
          font-size: 1rem; font-weight: 600; cursor: pointer;
          text-align: center; text-decoration: none; transition: all 0.3s;
        }
        .plan-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(168, 85, 247, 0.4); }
        .plan-cta.outlined {
          background: transparent;
          border: 2px solid rgba(168, 85, 247, 0.5);
        }
        @media (max-width: 1024px) { .pricing-grid { grid-template-columns: 1fr; max-width: 400px; } }
        @media (max-width: 640px) { .pricing-title { font-size: 2rem; } }
      `}</style>
      
      <div className="pricing-header">
        <h2 className="pricing-title">{businessName} Pricing</h2>
        <p className="pricing-subtitle">Simple, transparent pricing. No hidden fees. Start free and scale as you grow.</p>
      </div>
      
      <div className="pricing-grid">
        {plans.map(plan => (
          <div key={plan.name} className={`pricing-card ${plan.highlighted ? 'highlighted' : ''}`}>
            {plan.highlighted && <span className="popular-badge">Most Popular</span>}
            <h3 className="plan-name">{plan.name}</h3>
            <div className="plan-price">
              {plan.price}<span className="plan-period">{plan.period}</span>
            </div>
            <p className="plan-desc">{plan.description}</p>
            <ul className="features-list">
              {plan.features.map((f, i) => (
                <li key={i}><span className="check">✓</span>{f}</li>
              ))}
            </ul>
            <Link href="/contact" className={`plan-cta ${!plan.highlighted ? 'outlined' : ''}`}>{plan.cta}</Link>
          </div>
        ))}
      </div>
    </section>
  );
}

// Comparison Table Section
function ComparisonTableSection({ content }: { content: string }) {
  // Parse markdown table
  const lines = content.split('\n').filter(l => l.includes('|'));
  if (lines.length < 2) return <StandardSection content={content} />;
  
  const headers = lines[0].split('|').map(h => h.trim()).filter(Boolean);
  const rows = lines.slice(2).map(line => 
    line.split('|').map(c => c.trim()).filter(Boolean)
  );

  return (
    <section className="table-section">
      <style jsx>{`
        .table-section { padding: 40px 24px; }
        .comparison-table {
          width: 100%; max-width: 900px; margin: 0 auto;
          border-collapse: collapse;
          background: rgba(255, 255, 255, 0.02);
          border-radius: 16px; overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
        th {
          background: rgba(168, 85, 247, 0.15);
          color: #ffffff; font-weight: 600; font-size: 0.9rem;
          padding: 20px 24px; text-align: left;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        td {
          padding: 18px 24px; color: #d1d5db; font-size: 0.9375rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.04);
        }
        tr:hover td { background: rgba(255, 255, 255, 0.02); }
        .check-icon { color: #10b981; font-weight: bold; }
        .x-icon { color: #ef4444; }
      `}</style>
      
      <table className="comparison-table">
        <thead>
          <tr>{headers.map((h, i) => <th key={i}>{h}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>
                  {cell === '✅' ? <span className="check-icon">✓</span> : 
                   cell === '❌' ? <span className="x-icon">✗</span> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

// Comparison Hub Section with Cards
function ComparisonHubSection({ content, businessName }: { content: string; businessName: string }) {
  // Extract links from markdown
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const links: { text: string; href: string }[] = [];
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    links.push({ text: match[1], href: match[2] });
  }

  return (
    <section className="hub-section">
      <style jsx>{`
        .hub-section { padding: 60px 24px; }
        .hub-title { 
          font-size: 2rem; font-weight: 700; color: #ffffff; 
          margin-bottom: 40px; text-align: center;
        }
        .hub-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px; max-width: 1000px; margin: 0 auto;
        }
        .hub-card {
          background: linear-gradient(180deg, rgba(168, 85, 247, 0.08) 0%, rgba(99, 102, 241, 0.04) 100%);
          border: 1px solid rgba(168, 85, 247, 0.2);
          border-radius: 16px; padding: 28px;
          text-decoration: none; transition: all 0.3s;
          display: flex; align-items: center; gap: 16px;
        }
        .hub-card:hover {
          transform: translateY(-4px);
          border-color: rgba(168, 85, 247, 0.5);
          box-shadow: 0 12px 40px rgba(168, 85, 247, 0.15);
        }
        .hub-icon {
          width: 48px; height: 48px; border-radius: 12px;
          background: linear-gradient(135deg, #a855f7, #6366f1);
          display: flex; align-items: center; justify-content: center;
          font-size: 1.25rem; color: white;
        }
        .hub-text { flex: 1; }
        .hub-card-title { color: #ffffff; font-weight: 600; font-size: 1.0625rem; }
        .hub-card-desc { color: #9ca3af; font-size: 0.875rem; margin-top: 4px; }
        .arrow { color: #a855f7; font-size: 1.25rem; }
      `}</style>
      
      <h2 className="hub-title">Compare {businessName} with Alternatives</h2>
      <div className="hub-grid">
        {links.length > 0 ? links.map((link, i) => (
          <Link key={i} href={link.href} className="hub-card">
            <div className="hub-icon">⚔️</div>
            <div className="hub-text">
              <div className="hub-card-title">{link.text}</div>
              <div className="hub-card-desc">See detailed comparison</div>
            </div>
            <span className="arrow">→</span>
          </Link>
        )) : (
          <Link href="/comparisons" className="hub-card">
            <div className="hub-icon">📊</div>
            <div className="hub-text">
              <div className="hub-card-title">View All Comparisons</div>
              <div className="hub-card-desc">See how we stack up</div>
            </div>
            <span className="arrow">→</span>
          </Link>
        )}
      </div>
    </section>
  );
}

// Testimonial Section
function TestimonialSection({ content }: { content: string }) {
  const quotes = content.split('\n\n').filter(q => q.startsWith('> '));
  
  return (
    <section className="testimonial-section">
      <style jsx>{`
        .testimonial-section { padding: 60px 24px; }
        .testimonials-grid {
          display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px; max-width: 1200px; margin: 0 auto;
        }
        .testimonial-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px; padding: 32px;
        }
        .quote {
          color: #e5e7eb; font-size: 1.0625rem; line-height: 1.7;
          font-style: italic; margin-bottom: 24px;
        }
        .author { display: flex; align-items: center; gap: 14px; }
        .avatar {
          width: 48px; height: 48px; border-radius: 50%;
          background: linear-gradient(135deg, #a855f7, #6366f1);
          display: flex; align-items: center; justify-content: center;
          color: white; font-size: 1.25rem;
        }
        .author-name { color: #ffffff; font-weight: 600; font-size: 0.9375rem; }
        .author-role { color: #6b7280; font-size: 0.8125rem; }
      `}</style>
      
      <div className="testimonials-grid">
        {quotes.map((quote, i) => {
          const text = quote.replace(/^> ?"?/, '').replace(/"?$/, '');
          const lines = text.split('\n');
          const quoteText = lines[0].replace(/^"/, '').replace(/"$/, '');
          const authorLine = lines.find(l => l.startsWith('> —') || l.startsWith('— '));
          const author = authorLine?.replace(/^>? ?— \*\*?/, '').replace(/\*\*?,.*$/, '') || 'Happy Customer';
          const role = authorLine?.match(/,\s*(.+)$/)?.[1]?.replace(/\*\*/g, '') || 'Customer';
          
          return (
            <div key={i} className="testimonial-card">
              <p className="quote">"{quoteText}"</p>
              <div className="author">
                <div className="avatar">👤</div>
                <div>
                  <div className="author-name">{author}</div>
                  <div className="author-role">{role}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

// Standard Section for general content
function StandardSection({ content }: { content: string }) {
  // Convert markdown to styled HTML
  let html = content
    .replace(/^# (.+)$/gm, '<h1 class="content-h1">$1</h1>')
    .replace(/^## (.+)$/gm, '<h2 class="content-h2">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="content-h3">$1</h3>')
    .replace(/^#### (.+)$/gm, '<h4 class="content-h4">$1</h4>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="content-link">$1</a>')
    .replace(/^- (.+)$/gm, '<li class="content-li">$1</li>')
    .replace(/(<li[^>]*>.*<\/li>\n?)+/g, '<ul class="content-ul">$&</ul>')
    .replace(/^(?!<[hulo]|<li|<a|<strong|<em)(.+)$/gm, '<p class="content-p">$1</p>')
    .replace(/<p class="content-p"><\/p>/g, '')
    .replace(/\n\n+/g, '');

  return (
    <section className="standard-section">
      <style jsx>{`
        .standard-section { padding: 40px 24px; max-width: 900px; margin: 0 auto; }
        :global(.content-h1) {
          font-size: 2.75rem; font-weight: 800; color: #ffffff;
          margin: 0 0 24px; line-height: 1.15; letter-spacing: -0.02em;
        }
        :global(.content-h2) {
          font-size: 1.875rem; font-weight: 700; color: #ffffff;
          margin: 56px 0 20px; scroll-margin-top: 100px;
        }
        :global(.content-h3) {
          font-size: 1.375rem; font-weight: 600; color: #e5e7eb;
          margin: 40px 0 16px;
        }
        :global(.content-h4) {
          font-size: 1.125rem; font-weight: 600; color: #d1d5db;
          margin: 32px 0 12px;
        }
        :global(.content-p) {
          color: #d1d5db; font-size: 1.0625rem; line-height: 1.85;
          margin: 0 0 20px;
        }
        :global(.content-ul) {
          list-style: none; margin: 24px 0; padding: 0;
        }
        :global(.content-li) {
          color: #d1d5db; font-size: 1rem; line-height: 1.7;
          padding: 10px 0 10px 28px; position: relative;
        }
        :global(.content-li)::before {
          content: ''; position: absolute; left: 0; top: 18px;
          width: 8px; height: 8px; border-radius: 50%;
          background: linear-gradient(135deg, #a855f7, #6366f1);
        }
        :global(.content-link) {
          color: #a855f7; text-decoration: none;
          border-bottom: 1px solid rgba(168, 85, 247, 0.3);
          transition: all 0.2s;
        }
        :global(.content-link):hover {
          color: #c084fc; border-bottom-color: #c084fc;
        }
      `}</style>
      
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  );
}
