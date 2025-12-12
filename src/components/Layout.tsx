import Link from 'next/link';
import { ReactNode, useState } from 'react';

interface LayoutProps {
  children: ReactNode;
  businessName?: string;
}

const navLinks = [
  { label: 'Product', href: '/' },
  { label: 'Compare', href: '/comparisons' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Resources', href: '/glossary' },
  { label: 'Company', href: '/about' }
];

const footerSections = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Request Demo', href: '/contact' }
    ]
  },
  {
    title: 'Comparisons',
    links: [
      { label: 'All Comparisons', href: '/comparisons' },
      { label: 'vs Weglot', href: '/comparisons-aixster-vs-weglot' },
      { label: 'vs LocalizeJS', href: '/comparisons-aixster-vs-localizejs' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'Case Studies', href: '/customers' },
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms of Service', href: '/terms-of-service' }
    ]
  },
  {
    title: 'Resources',
    links: [
      { label: 'Glossary', href: '/glossary' },
      { label: 'FAQ', href: '/common-questions' },
      { label: 'Contact', href: '/contact' }
    ]
  }
];

export default function Layout({ children, businessName = 'Aixster' }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="site-wrapper">
      <style jsx global>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        
        html {
          scroll-behavior: smooth;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: #0a0a0f;
          color: #e5e7eb;
          line-height: 1.6;
        }
        
        .site-wrapper {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        
        /* Premium Header Styles */
        .header {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: rgba(10, 10, 15, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        
        .header-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 72px;
        }
        
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #a855f7, #6366f1);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-decoration: none;
          letter-spacing: -0.02em;
        }
        
        .nav {
          display: flex;
          gap: 32px;
        }
        
        .nav-link {
          color: #9ca3af;
          text-decoration: none;
          font-size: 0.925rem;
          font-weight: 500;
          transition: color 0.2s;
        }
        
        .nav-link:hover {
          color: #ffffff;
        }
        
        .cta-button {
          background: linear-gradient(135deg, #a855f7, #6366f1);
          color: white;
          padding: 10px 20px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.875rem;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 4px 14px rgba(168, 85, 247, 0.35);
        }
        
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(168, 85, 247, 0.5);
        }
        
        /* Footer Styles */
        .footer {
          background: #050507;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding: 64px 24px 32px;
          margin-top: auto;
        }
        
        .footer-grid {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 48px;
        }
        
        .footer-section h4 {
          color: #ffffff;
          font-size: 0.875rem;
          font-weight: 600;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        .footer-section ul {
          list-style: none;
        }
        
        .footer-section li {
          margin-bottom: 10px;
        }
        
        .footer-section a {
          color: #6b7280;
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.2s;
        }
        
        .footer-section a:hover {
          color: #a855f7;
        }
        
        .footer-bottom {
          max-width: 1280px;
          margin: 48px auto 0;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex;
          justify-content: space-between;
          align-items: center;
          color: #4b5563;
          font-size: 0.875rem;
        }
        
        .main-content {
          flex: 1;
        }
        
        @media (max-width: 768px) {
          .nav { display: none; }
          .footer-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
          .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
        }
      `}</style>

      <header className="header">
        <div className="header-inner">
          <Link href="/" className="logo">{businessName}</Link>
          <nav className="nav">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="nav-link">
                {link.label}
              </Link>
            ))}
          </nav>
          <Link href="/contact" className="cta-button">Get Started</Link>
        </div>
      </header>

      <main className="main-content">{children}</main>

      <footer className="footer">
        <div className="footer-grid">
          {footerSections.map(section => (
            <div key={section.title} className="footer-section">
              <h4>{section.title}</h4>
              <ul>
                {section.links.map(link => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {businessName}. All rights reserved.</p>
          <p>Powered by SEO-Forge</p>
        </div>
      </footer>
    </div>
  );
}
