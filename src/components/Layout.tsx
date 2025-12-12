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
      { label: 'See Alternatives', href: '/comparisons' }
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

export default function Layout({ children, businessName = 'SEO-Forge' }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="site-wrapper">
      <style jsx global>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background: linear-gradient(180deg, #0a0a0f 0%, #0d0d14 100%);
          color: #e5e7eb;
          line-height: 1.7;
          min-height: 100vh;
        }
        .site-wrapper { min-height: 100vh; display: flex; flex-direction: column; }
        
        /* Premium Header */
        .header {
          position: sticky; top: 0; z-index: 1000;
          background: rgba(10, 10, 15, 0.92);
          backdrop-filter: blur(24px) saturate(180%);
          border-bottom: 1px solid rgba(168, 85, 247, 0.1);
        }
        .header-inner {
          max-width: 1320px; margin: 0 auto; padding: 0 28px;
          display: flex; align-items: center; justify-content: space-between; height: 76px;
        }
        .logo {
          font-size: 1.625rem; font-weight: 800;
          background: linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #ec4899 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text; text-decoration: none; letter-spacing: -0.03em;
        }
        .nav { display: flex; gap: 36px; }
        .nav-link {
          color: #9ca3af; text-decoration: none; font-size: 0.9375rem;
          font-weight: 500; transition: all 0.2s; position: relative;
        }
        .nav-link:hover { color: #ffffff; }
        .nav-link::after {
          content: ''; position: absolute; bottom: -4px; left: 0;
          width: 0; height: 2px;
          background: linear-gradient(90deg, #a855f7, #6366f1);
          transition: width 0.2s;
        }
        .nav-link:hover::after { width: 100%; }
        .cta-button {
          background: linear-gradient(135deg, #a855f7 0%, #6366f1 100%);
          color: white; padding: 12px 24px; border-radius: 10px;
          text-decoration: none; font-weight: 600; font-size: 0.9rem;
          transition: all 0.3s; box-shadow: 0 4px 20px rgba(168, 85, 247, 0.4);
        }
        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(168, 85, 247, 0.5);
        }
        
        /* Footer */
        .footer {
          background: linear-gradient(180deg, #050507 0%, #0a0a0f 100%);
          border-top: 1px solid rgba(168, 85, 247, 0.08);
          padding: 72px 28px 40px; margin-top: auto;
        }
        .footer-grid {
          max-width: 1320px; margin: 0 auto;
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 56px;
        }
        .footer-section h4 {
          color: #ffffff; font-size: 0.8125rem; font-weight: 700;
          margin-bottom: 20px; text-transform: uppercase;
          letter-spacing: 0.1em;
        }
        .footer-section ul { list-style: none; }
        .footer-section li { margin-bottom: 12px; }
        .footer-section a {
          color: #6b7280; text-decoration: none; font-size: 0.9rem;
          transition: all 0.2s; display: inline-block;
        }
        .footer-section a:hover { color: #a855f7; transform: translateX(4px); }
        .footer-bottom {
          max-width: 1320px; margin: 56px auto 0; padding-top: 28px;
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          display: flex; justify-content: space-between; align-items: center;
          color: #4b5563; font-size: 0.875rem;
        }
        .main-content { flex: 1; }
        .mobile-menu-btn {
          display: none; background: none; border: none; color: white;
          font-size: 1.5rem; cursor: pointer;
        }
        @media (max-width: 1024px) {
          .nav { display: none; }
          .mobile-menu-btn { display: block; }
          .footer-grid { grid-template-columns: repeat(2, 1fr); gap: 40px; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; gap: 12px; text-align: center; }
          .header-inner { padding: 0 16px; height: 64px; }
          .logo { font-size: 1.375rem; }
        }
      `}</style>

      <header className="header">
        <div className="header-inner">
          <Link href="/" className="logo">{businessName}</Link>
          <nav className="nav">
            {navLinks.map(link => (
              <Link key={link.href} href={link.href} className="nav-link">{link.label}</Link>
            ))}
          </nav>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>☰</button>
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
                  <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
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
