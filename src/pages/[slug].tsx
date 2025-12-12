import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';
import ContentRenderer from '../components/ContentRenderer';

interface PageProps {
  title: string;
  description: string;
  h1: string;
  content: string;
  slug: string;
  type: string;
  canonicalUrl: string;
  businessName: string;
}

const STATIC_SLUGS: string[] = ["pricing","contact","comparisons","comparisons-your-solution-vs-weglot","comparisons-your-solution-vs-localizejs","comparisons-your-solution-vs-conveythis","customers","customers-techstart","customers-enterprise-solutions","customers-growthlabs","glossary","glossary-api-integration","glossary-saas","glossary-workflow-automation","glossary-digital-transformation","glossary-customer-success","about","privacy-policy","terms-of-service","lovable-multilingual-solution","1-ai-powered-translation-solution-for-lovable-cms","get-started-in-minutes","easily-manage-your-translations","reach-visitors-all-over-the-world","go-multilingual-with-ease","join-thousands-of-satisfied-weglot-users","take-a-product-demo","learn-how-to-get-started","frequently-asked-questions-about-lovable-integrati","weglot-is-free-try-now","effortless-localization-for-lovable","effortlessly-set-up-in-no-time","frequently-asked-questions","join-the-40-000-users-who-trust-localize-to-power"];
const BUSINESS_NAME = 'SEO-Forge';

export default function ContentPage({ title, description, h1, content, slug, type, canonicalUrl, businessName }: PageProps) {
  const getSection = () => {
    if (slug.includes('vs-') || slug.includes('comparisons')) return { label: 'Compare', href: '/comparisons' };
    if (slug.includes('customers') || slug.includes('case-study')) return { label: 'Case Studies', href: '/customers' };
    if (slug.includes('glossary')) return { label: 'Glossary', href: '/glossary' };
    if (['about', 'privacy-policy', 'terms-of-service'].includes(slug)) return { label: 'Company', href: '/about' };
    if (['pricing', 'contact'].includes(slug)) return { label: 'Product', href: '/' };
    return { label: 'Resources', href: '/' };
  };
  
  const section = getSection();
  const isComparison = slug.includes('vs-') || slug === 'comparisons';
  const isPricing = slug === 'pricing';

  // Generate Schema.org structured data based on page type
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": canonicalUrl.split('/').slice(0, 3).join('/') },
      { "@type": "ListItem", "position": 2, "name": section.label, "item": canonicalUrl.split('/').slice(0, 3).join('/') + section.href },
      { "@type": "ListItem", "position": 3, "name": title }
    ]
  };

  const pageSchema = isPricing ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": businessName,
    "description": description,
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "USD",
      "lowPrice": "0",
      "highPrice": "499",
      "offerCount": "3"
    }
  } : isComparison ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": h1,
    "description": description,
    "author": { "@type": "Organization", "name": businessName },
    "publisher": { "@type": "Organization", "name": businessName },
    "datePublished": new Date().toISOString().split('T')[0],
    "dateModified": new Date().toISOString().split('T')[0]
  } : {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": title,
    "description": description,
    "url": canonicalUrl
  };

  return (
    <Layout businessName={businessName}>
      <Head>
        <title>{title.substring(0, 60)}</title>
        <meta name="description" content={description.substring(0, 160)} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content={type === 'article' ? 'article' : 'website'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      </Head>
      
      <style jsx>{`
        .page-container { max-width: 1200px; margin: 0 auto; }
        .page-header {
          padding: 60px 24px 40px;
          background: linear-gradient(180deg, rgba(168, 85, 247, 0.08) 0%, transparent 100%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          margin-bottom: 20px;
        }
        .badge {
          display: inline-block; padding: 8px 16px;
          background: ${isComparison ? 'linear-gradient(135deg, #f59e0b, #d97706)' : isPricing ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #a855f7, #6366f1)'};
          color: white; border-radius: 24px; font-size: 0.75rem;
          font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;
          margin-bottom: 20px;
        }
        .page-title {
          font-size: 3rem; font-weight: 800; color: #ffffff;
          line-height: 1.15; letter-spacing: -0.02em; max-width: 800px;
        }
        .page-subtitle {
          color: #9ca3af; font-size: 1.25rem; margin-top: 16px;
          max-width: 600px; line-height: 1.6;
        }
        @media (max-width: 768px) {
          .page-header { padding: 40px 16px 32px; }
          .page-title { font-size: 2rem; }
          .page-subtitle { font-size: 1.0625rem; }
        }
      `}</style>

      <div className="page-container">
        <header className="page-header">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            section,
            { label: title }
          ]} />
          <span className="badge">{isComparison ? 'Comparison' : isPricing ? 'Pricing' : type}</span>
          <h1 className="page-title">{h1}</h1>
          <p className="page-subtitle">{description}</p>
        </header>

        <ContentRenderer content={content} pageType={type} businessName={businessName} />
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
    
    return {
      props: {
        title: data.title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        description: data.description || 'Learn more about this topic.',
        h1: data.h1 || data.title || slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        content,
        slug,
        type: data.type || 'article',
        canonicalUrl: `${baseUrl}/${slug}`,
        businessName: BUSINESS_NAME
      }
    };
  } catch (error) {
    return { notFound: true };
  }
};
