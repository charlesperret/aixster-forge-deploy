import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface PageProps {
  title: string;
  description: string;
  h1: string;
  content: string;
  slug: string;
}

interface ContentItem {
  id: string;
  type: string;
  title: string;
  slug: string;
}

export default function ContentPage({ title, description, h1, content, slug }: PageProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <link rel="canonical" href={`https://example.com/${slug}`} />
      </Head>
      <article style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#1a1a1a' }}>{h1}</h1>
        <div 
          style={{ lineHeight: '1.8', color: '#333' }}
          dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br />') }} 
        />
      </article>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  // Load content index at build time
  const indexPath = path.join(process.cwd(), 'content', 'index.json');
  const indexContent = fs.readFileSync(indexPath, 'utf8');
  const contentIndex: ContentItem[] = JSON.parse(indexContent);
  
  const paths = contentIndex.map((item) => ({
    params: { slug: item.slug }
  }));
  
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  const filePath = path.join(process.cwd(), 'content', `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  return {
    props: {
      title: data.title || '',
      description: data.description || '',
      h1: data.h1 || '',
      content,
      slug
    }
  };
};
