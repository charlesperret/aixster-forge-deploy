interface Heading {
  id: string;
  text: string;
  level: number;
}

interface TOCProps {
  headings: Heading[];
}

export default function TableOfContents({ headings }: TOCProps) {
  if (headings.length === 0) return null;
  
  return (
    <nav style={{
      background: 'rgba(255, 255, 255, 0.03)',
      border: '1px solid rgba(255, 255, 255, 0.08)',
      borderRadius: '12px',
      padding: '20px',
      marginBottom: '24px'
    }}>
      <h4 style={{
        fontSize: '0.875rem',
        fontWeight: 600,
        color: '#ffffff',
        marginBottom: '16px',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        On This Page
      </h4>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {headings.map((heading, index) => (
          <li key={index} style={{ marginBottom: '8px' }}>
            <a 
              href={`#${heading.id}`}
              style={{
                color: '#9ca3af',
                textDecoration: 'none',
                fontSize: '0.875rem',
                paddingLeft: heading.level > 2 ? `${(heading.level - 2) * 12}px` : '0',
                display: 'block',
                transition: 'color 0.2s'
              }}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
