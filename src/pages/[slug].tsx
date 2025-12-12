import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import TableOfContents from '../components/TableOfContents';
import RelatedContent from '../components/RelatedContent';

interface PageProps {
  title: string;
  description: string;
  h1: string;
  content: string;
  slug: string;
  type: string;
  headings: { id: string; text: string; level: number }[];
  allSlugs: string[];
  canonicalUrl: string;
}

const STATIC_SLUGS: string[] = ["pricing","contact","comparisons","comparisons-your-solution-vs-weglot","comparisons-your-solution-vs-localizejs","comparisons-your-solution-vs-conveythis","customers","customers-techstart","customers-enterprise-solutions","customers-growthlabs","glossary","glossary-api-integration","glossary-saas","glossary-workflow-automation","glossary-digital-transformation","glossary-customer-success","about","privacy-policy","terms-of-service","lovable-multilingual-solution","1-ai-powered-translation-solution-for-lovable-cms","get-started-in-minutes","easily-manage-your-translations","reach-visitors-all-over-the-world","go-multilingual-with-ease","join-thousands-of-satisfied-weglot-users","take-a-product-demo","learn-how-to-get-started","frequently-asked-questions-about-lovable-integrati","weglot-is-free-try-now","effortless-localization-for-lovable","effortlessly-set-up-in-no-time","frequently-asked-questions","join-the-40-000-users-who-trust-localize-to-power"];

export default function ContentPage({ title, description, h1, content, slug, type, headings, allSlugs, canonicalUrl }: PageProps) {
  const getSection = () => {
    if (slug.includes('vs-') || slug.includes('comparisons')) return { label: 'Compare', href: '/comparisons' };
    if (slug.includes('customers') || slug.includes('case-study')) return { label: 'Case Studies', href: '/customers' };
    if (slug.includes('glossary')) return { label: 'Glossary', href: '/glossary' };
    if (['about', 'privacy-policy', 'terms-of-service'].includes(slug)) return { label: 'Company', href: '/about' };
    if (['pricing', 'contact'].includes(slug)) return { label: 'Product', href: '/' };
    return { label: 'Resources', href: '/' };
  };
  
  const section = getSection();
  const isPillar = type === 'pillar';
  
  // Get related content (3-5 semantically relevant links per page - Pillar 3)
  const relatedSlugs = allSlugs
    .filter(s => s !== slug && (
      s.includes(section.label.toLowerCase()) ||
      (slug.includes('vs-') && s.includes('vs-')) ||
      (slug.includes('glossary') && s.includes('glossary'))
    ))
    .slice(0, 4);

  // Generate BreadcrumbList Schema (Pillar 2 & 3)
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": canonicalUrl.replace(/\/[^/]+$/, '') + '/' },
      { "@type": "ListItem", "position": 2, "name": section.label, "item": canonicalUrl.replace(/\/[^/]+$/, '') + section.href },
      { "@type": "ListItem", "position": 3, "name": title }
    ]
  };

  // Generate Article/Product schema based on page type (Pillar 2)
  const pageSchema = type === 'pillar' ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": h1,
    "description": description,
    "author": { "@type": "Organization", "name": "Aixster" },
    "publisher": { "@type": "Organization", "name": "Aixster" },
    "datePublished": new Date().toISOString(),
    "dateModified": new Date().toISOString(),
    "mainEntityOfPage": { "@type": "WebPage", "@id": canonicalUrl }
  } : slug === 'pricing' ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": title,
    "description": description,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0",
      "highPrice": "499",
      "offerCount": "3"
    }
  } : {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": canonicalUrl
  };

  return (
    <Layout>
      <Head>
        {/* Pillar 2: Semantic On-Page - Title 50-60 chars with keyword at start */}
        <title>{title.substring(0, 60)}</title>
        
        {/* Pillar 2: Meta description 150-160 chars with CTA */}
        <meta name="description" content={description.substring(0, 160)} />
        
        {/* Pillar 6: Self-referencing canonical to prevent duplicate content */}
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content={type === 'pillar' ? 'article' : 'website'} />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        
        {/* Pillar 4: Mobile-first viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Pillar 2: Schema.org structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      </Head>
      
      <style jsx>{`
        .page-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px 80px;
        }
        
        .content-grid {
          display: grid;
          grid-template-columns: 1fr 280px;
          gap: 48px;
          align-items: start;
        }
        
        .article-header {
          padding: 48px 0 32px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          margin-bottom: 40px;
        }
        
        .badge {
          display: inline-block;
          padding: 6px 14px;
          background: ${isPillar ? 'linear-gradient(135deg, #a855f7, #6366f1)' : 'linear-gradient(135deg, #10b981, #059669)'};
          color: white;
          border-radius: 20px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 20px;
        }
        
        .article-title {
          font-size: 2.75rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }
        
        .article-content {
          font-size: 1.0625rem;
          line-height: 1.85;
          color: #d1d5db;
        }
        
        /* Pillar 2: Strict H1-H6 hierarchy */
        .article-content h2 {
          font-size: 1.75rem;
          font-weight: 600;
          color: #ffffff;
          margin: 48px 0 20px;
          scroll-margin-top: 100px;
        }
        
        .article-content h3 {
          font-size: 1.375rem;
          font-weight: 600;
          color: #ffffff;
          margin: 36px 0 16px;
          scroll-margin-top: 100px;
        }
        
        .article-content h4 {
          font-size: 1.125rem;
          font-weight: 600;
          color: #e5e7eb;
          margin: 28px 0 12px;
        }
        
        .article-content p {
          margin-bottom: 20px;
        }
        
        .article-content ul, .article-content ol {
          margin: 20px 0;
          padding-left: 24px;
        }
        
        .article-content li {
          margin-bottom: 10px;
        }
        
        .article-content a {
          color: #a855f7;
          text-decoration: underline;
        }
        
        .article-content blockquote {
          border-left: 4px solid #a855f7;
          padding-left: 20px;
          margin: 32px 0;
          font-style: italic;
          color: #9ca3af;
        }
        
        /* Pillar 4: Image optimization with lazy loading */
        .article-content img {
          max-width: 100%;
          height: auto;
          border-radius: 12px;
          margin: 24px 0;
        }
        
        .sidebar {
          position: sticky;
          top: 100px;
        }
        
        @media (max-width: 1024px) {
          .content-grid { grid-template-columns: 1fr; }
          .sidebar { display: none; }
        }
        
        @media (max-width: 768px) {
          .article-title { font-size: 2rem; }
          .article-content { font-size: 1rem; }
        }
      `}</style>

      <div className="page-container">
        {/* Pillar 3: Breadcrumb navigation */}
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          section,
          { label: title }
        ]} />
        
        <header className="article-header">
          <span className="badge">{type}</span>
          {/* Pillar 2: Single H1 with main keyword */}
          <h1 className="article-title">{h1}</h1>
        </header>

        <div className="content-grid">
          <article 
            className="article-content"
            dangerouslySetInnerHTML={{ 
              __html: content
                .replace(/\n\n/g, '</p><p>')
                .replace(/\n/g, '<br />')
                .replace(/^(.*)$/gm, '<p>$1</p>')
                .replace(/<p><\/p>/g, '')
                .replace(/## (.*?)(<br|<\/p>)/g, '<h2 id="$1">$1</h2>')
                .replace(/### (.*?)(<br|<\/p>)/g, '<h3 id="$1">$1</h3>')
            }} 
          />
          
          {/* Pillar 7: Table of Contents for long content */}
          <aside className="sidebar">
            {headings.length > 2 && <TableOfContents headings={headings} />}
            {relatedSlugs.length > 0 && <RelatedContent slugs={relatedSlugs} />}
          </aside>
        </div>
      </div>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = STATIC_SLUGS.map(slug => ({ params: { slug } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';
  
  try {
    const filePath = path.join(process.cwd(), 'content', `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // Extract headings for Table of Contents (Pillar 7)
    const headingRegex = /^(#{2,4})\s+(.+)$/gm;
    const headings: { id: string; text: string; level: number }[] = [];
    let match;
    while ((match = headingRegex.exec(content)) !== null) {
      headings.push({
        id: match[2].toLowerCase().replace(/\s+/g, '-'),
        text: match[2],
        level: match[1].length
      });
    }
    
    return {
      props: {
        title: data.title || slug,
        description: data.description || '',
        h1: data.h1 || data.title || slug,
        content,
        slug,
        type: data.type || 'article',
        headings,
        allSlugs: STATIC_SLUGS,
        canonicalUrl: `${baseUrl}/${slug}`
      }
    };
  } catch (error) {
    return { notFound: true };
  }
};
