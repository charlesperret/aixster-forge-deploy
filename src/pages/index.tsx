export default function Home() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui, sans-serif', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
      <h1 style={{ fontSize: '3rem', color: 'white', marginBottom: '1rem', textAlign: 'center' }}>Welcome to the Full SEO-Forge Site!</h1>
      <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)', marginBottom: '2rem', textAlign: 'center' }}>Your 38-page B2B SaaS website is ready.</p>
      <nav style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <a href="/pricing" style={{ background: 'white', color: '#667eea', padding: '0.75rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>Pricing</a>
        <a href="/comparisons" style={{ background: 'white', color: '#667eea', padding: '0.75rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>Comparisons</a>
        <a href="/customers" style={{ background: 'white', color: '#667eea', padding: '0.75rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>Case Studies</a>
        <a href="/about" style={{ background: 'white', color: '#667eea', padding: '0.75rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>About</a>
        <a href="/contact" style={{ background: 'white', color: '#667eea', padding: '0.75rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>Contact</a>
        <a href="/glossary" style={{ background: 'white', color: '#667eea', padding: '0.75rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 600 }}>Glossary</a>
      </nav>
      <footer style={{ position: 'absolute', bottom: '2rem', color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>
        <a href="/privacy-policy" style={{ color: 'rgba(255,255,255,0.7)', marginRight: '1rem' }}>Privacy</a>
        <a href="/terms-of-service" style={{ color: 'rgba(255,255,255,0.7)' }}>Terms</a>
      </footer>
    </div>
  );
}
