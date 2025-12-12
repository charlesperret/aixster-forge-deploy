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

// Pre-computed slugs at build time for SSG stability
const STATIC_SLUGS: string[] = ["pricing","contact","comparisons","comparisons-aixster-vs-conveythis","comparisons-aixster-vs-localizejs","comparisons-aixster-vs-weglot","customers","customers-techstart","customers-enterprise-solutions","customers-growthlabs","glossary","glossary-api-integration","glossary-saas","glossary-workflow-automation","glossary-digital-transformation","glossary-customer-success","about","privacy-policy","terms-of-service","1-ai-powered-translation-solution-for-lovable-cms","lovable-multilingual-solution","key-features-to-accelerate-your-website-translatio","get-started-in-minutes","reach-visitors-all-over-the-world","deliver-professional-grade-translations","take-full-control-of-your-translations","connect-with-global-audiences-authentically","easily-manage-your-translations","why-choose-us","learn-how-to-get-started","common-questions","have-a-different-question","effortless-localization-for-lovable","effortlessly-set-up-in-no-time"];

export default function ContentPage({ title, description, h1, content, slug, type }: PageProps) {
  // Determine breadcrumb section
  const getSection = () => {
    if (slug.startsWith('vs-') || slug === 'comparisons') return { label: 'Compare', href: '/comparisons' };
    if (slug.startsWith('case-study') || slug === 'customers') return { label: 'Case Studies', href: '/customers' };
    if (slug.startsWith('glossary') || slug === 'glossary') return { label: 'Glossary', href: '/glossary' };
    if (['about', 'privacy-policy', 'terms-of-service'].includes(slug)) return { label: 'Company', href: '/about' };
    if (['pricing', 'contact'].includes(slug)) return { label: 'Product', href: '/' };
    return { label: 'Resources', href: '/' };
  };
  
  const section = getSection();

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="canonical" href={`https://example.com/${slug}`} />
      </Head>
      
      <div style={{ maxWidth: '1024px', margin: '0 auto', padding: '0 2rem' }}>
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          section,
          { label: title }
        ]} />
      </div>

      <article style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem'
      }}>
        <span style={{
          display: 'inline-block',
          padding: '0.25rem 0.75rem',
          background: type === 'pillar' ? '#667eea' : '#10b981',
          color: 'white',
          borderRadius: '4px',
          fontSize: '0.75rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          marginBottom: '1rem'
        }}>
          {type}
        </span>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#1a1a1a', lineHeight: 1.2 }}>{h1}</h1>
        <div 
          style={{ lineHeight: '1.8', color: '#374151', fontSize: '1.0625rem' }}
          dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br />') }} 
        />
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Use pre-computed slugs for 100% SSG stability
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
