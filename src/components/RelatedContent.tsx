import Link from 'next/link';

interface RelatedContentProps {
  slugs: string[];
}

export default function RelatedContent({ slugs }: RelatedContentProps) {
  if (slugs.length === 0) return null;
  
  // Format slug to readable title
  const formatTitle = (slug: string) => {
    return slug
      .replace(/-/g, ' ')
      .replace(/\b\w/g, l => l.toUpperCase());
  };
  
  return (
    <div style={{
      background: 'rgba(168, 85, 247, 0.08)',
      border: '1px solid rgba(168, 85, 247, 0.2)',
      borderRadius: '12px',
      padding: '20px'
    }}>
      <h4 style={{
        fontSize: '0.875rem',
        fontWeight: 600,
        color: '#a855f7',
        marginBottom: '16px',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        Related Articles
      </h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {slugs.map((slug, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <Link 
              href={`/${slug}`}
              style={{
                color: '#d1d5db',
                textDecoration: 'none',
                fontSize: '0.875rem',
                display: 'block',
                transition: 'color 0.2s'
              }}
            >
              → {formatTitle(slug)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
