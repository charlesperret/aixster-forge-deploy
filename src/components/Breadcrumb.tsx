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
    <nav aria-label="Breadcrumb" className="breadcrumb-nav">
      <style jsx>{`
        .breadcrumb-nav { margin-bottom: 24px; }
        .breadcrumb-list {
          list-style: none; padding: 0; margin: 0;
          display: flex; gap: 8px; flex-wrap: wrap; align-items: center;
        }
        .breadcrumb-item { display: flex; align-items: center; gap: 8px; }
        .breadcrumb-separator { color: #4b5563; font-size: 0.875rem; }
        .breadcrumb-link {
          color: #a855f7; text-decoration: none; font-size: 0.875rem;
          transition: all 0.2s; font-weight: 500;
        }
        .breadcrumb-link:hover { color: #c084fc; }
        .breadcrumb-current { color: #6b7280; font-size: 0.875rem; }
      `}</style>
      
      <ol className="breadcrumb-list">
        {items.map((item, index) => (
          <li key={index} className="breadcrumb-item">
            {index > 0 && <span className="breadcrumb-separator">›</span>}
            {item.href ? (
              <Link href={item.href} className="breadcrumb-link">{item.label}</Link>
            ) : (
              <span className="breadcrumb-current">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
