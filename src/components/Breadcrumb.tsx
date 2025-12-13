import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" style={{
      padding: '16px 0',
      fontSize: '0.875rem'
    }}>
      <ol style={{ 
        listStyle: 'none', 
        padding: 0, 
        margin: 0, 
        display: 'flex', 
        gap: '8px', 
        flexWrap: 'wrap',
        alignItems: 'center'
      }}>
        {items.map((item, index) => (
          <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {index > 0 && <span style={{ color: '#4b5563' }}>›</span>}
            {item.href ? (
              <Link href={item.href} style={{ 
                color: '#a855f7', 
                textDecoration: 'none',
                transition: 'color 0.2s'
              }}>
                {item.label}
              </Link>
            ) : (
              <span style={{ color: '#9ca3af' }}>{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
