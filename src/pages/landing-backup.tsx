// BACKUP: Full Landing Page - Restore to index.tsx after debugging SSG issue
// This file is not routed - saved for reference only

import Head from 'next/head';
import Link from 'next/link';

export default function LandingBackup() {
  return (
    <>
      <Head>
        <title>Welcome to Your B2B SaaS Site</title>
        <meta name="description" content="Complete B2B SaaS website" />
      </Head>
      <div style={{ minHeight: '100vh', fontFamily: 'system-ui, sans-serif' }}>
        <header style={{ background: '#fff', borderBottom: '1px solid #e5e7eb', padding: '0 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
            <Link href="/" style={{ fontWeight: 700, fontSize: '1.25rem', color: '#111827', textDecoration: 'none' }}>Your Brand</Link>
            <nav style={{ display: 'flex', gap: '2rem' }}>
              <Link href="/" style={{ color: '#4b5563', textDecoration: 'none' }}>Product</Link>
              <Link href="/comparisons" style={{ color: '#4b5563', textDecoration: 'none' }}>Compare</Link>
              <Link href="/pricing" style={{ color: '#4b5563', textDecoration: 'none' }}>Pricing</Link>
              <Link href="/glossary" style={{ color: '#4b5563', textDecoration: 'none' }}>Resources</Link>
              <Link href="/about" style={{ color: '#4b5563', textDecoration: 'none' }}>Company</Link>
            </nav>
            <Link href="/contact" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '0.625rem 1.25rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>Get Started</Link>
          </div>
        </header>
        <section style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '6rem 2rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', fontWeight: 700 }}>Build Better, Faster</h1>
          <p style={{ fontSize: '1.375rem', opacity: 0.9, marginBottom: '2rem' }}>The complete solution for modern businesses.</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link href="/contact" style={{ background: 'white', color: '#667eea', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>Book a Demo</Link>
            <Link href="/pricing" style={{ background: 'transparent', color: 'white', padding: '1rem 2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600, border: '2px solid white' }}>View Pricing</Link>
          </div>
        </section>
        <footer style={{ background: '#111827', color: '#d1d5db', padding: '4rem 2rem 2rem' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
            <div><h4 style={{ color: '#fff', marginBottom: '1rem' }}>Product</h4></div>
            <div><h4 style={{ color: '#fff', marginBottom: '1rem' }}>Comparisons</h4></div>
            <div><h4 style={{ color: '#fff', marginBottom: '1rem' }}>Company</h4></div>
            <div><h4 style={{ color: '#fff', marginBottom: '1rem' }}>Resources</h4></div>
          </div>
        </footer>
      </div>
    </>
  );
}
