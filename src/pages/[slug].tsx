import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Layout from '../components/Layout';
import Breadcrumb from '../components/Breadcrumb';

interface PageProps {
  title: string;
  description: string;
  h1: string;
  content: string;
  slug: string;
  type: string;
}

const STATIC_SLUGS: string[] = ["pricing","contact","comparisons","comparisons-your-solution-vs-weglot","comparisons-your-solution-vs-localizejs","comparisons-your-solution-vs-conveythis","customers","customers-techstart","customers-enterprise-solutions","customers-growthlabs","glossary","glossary-api-integration","glossary-saas","glossary-workflow-automation","glossary-digital-transformation","glossary-customer-success","about","privacy-policy","terms-of-service","lovable-multilingual-solution","1-ai-powered-translation-solution-for-lovable-cms","get-started-in-minutes","easily-manage-your-translations","reach-visitors-all-over-the-world","go-multilingual-with-ease","join-thousands-of-satisfied-weglot-users","take-a-product-demo","learn-how-to-get-started","frequently-asked-questions-about-lovable-integrati","weglot-is-free-try-now","effortless-localization-for-lovable","effortlessly-set-up-in-no-time","frequently-asked-questions","join-the-40-000-users-who-trust-localize-to-power"];

export default function ContentPage({ title, description, h1, content, slug, type }: PageProps) {
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

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Head>
      
      <style jsx>{`
        .page-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px 80px;
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
        
        .article-content h2 {
          font-size: 1.75rem;
          font-weight: 600;
          color: #ffffff;
          margin: 48px 0 20px;
        }
        
        .article-content h3 {
          font-size: 1.375rem;
          font-weight: 600;
          color: #ffffff;
          margin: 36px 0 16px;
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
        
        @media (max-width: 768px) {
          .article-title { font-size: 2rem; }
          .article-content { font-size: 1rem; }
        }
      `}</style>

      <div className="page-container">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          section,
          { label: title }
        ]} />
        
        <header className="article-header">
          <span className="badge">{type}</span>
          <h1 className="article-title">{h1}</h1>
        </header>

        <article 
          className="article-content"
          dangerouslySetInnerHTML={{ 
            __html: content
              .replace(/\n\n/g, '</p><p>')
              .replace(/\n/g, '<br />')
              .replace(/^(.*)$/gm, '<p>$1</p>')
              .replace(/<p><\/p>/g, '')
              .replace(/## (.*?)(<br|<\/p>)/g, '<h2>$1</h2>')
              .replace(/### (.*?)(<br|<\/p>)/g, '<h3>$1</h3>')
          }} 
        />
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
  
  try {
    const filePath = path.join(process.cwd(), 'content', `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      props: {
        title: data.title || slug,
        description: data.description || '',
        h1: data.h1 || data.title || slug,
        content,
        slug,
        type: data.type || 'article'
      }
    };
  } catch (error) {
    return { notFound: true };
  }
};
