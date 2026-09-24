import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import Layout from '../components/Layout';
import ReadingProgress from '../components/ReadingProgress';
import posts, { getPostBySlug } from '../content/blog';
import { formatDate, readingTime } from '../lib/format';

function headingId(text: string) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-');
}
function goToHeading(id: string) {
  const heading = document.getElementById(id);
  heading?.scrollIntoView();
  heading?.focus({ preventScroll: true });
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  useEffect(() => {
    if (!post) return;
    document.title = `${post.title} — Sampat Choudhary`;
    const description = document.querySelector('meta[name="description"]');
    const original = description?.getAttribute('content');
    description?.setAttribute('content', post.description);
    return () => {
      document.title = 'Sampat Choudhary — Software & AI Engineer';
      if (original) description?.setAttribute('content', original);
    };
  }, [post]);
  if (!post) return <Navigate to="/blog" replace />;
  const headings = [...post.content.matchAll(/^## (.+)$/gm)].map((match) => ({
    text: match[1],
    id: headingId(match[1]),
  }));
  const nextPost = posts.find((item) => item.slug !== post.slug);
  return (
    <Layout>
      <ReadingProgress articleKey={post.slug} />
      <article className="container article-page">
        <Link to="/blog" className="text-link back-link">
          <ArrowLeft size={16} aria-hidden="true" />
          All writing
        </Link>
        <header className="article-header">
          <div className="eyebrow article-meta">
            <span className="accent">{post.tags[0].replace(/-/g, ' ')}</span>
            <span>/</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>/</span>
            <span>{readingTime(post.content)} min read</span>
          </div>
          <h1>{post.title}</h1>
          <p className="article-deck">{post.description}</p>
          <div className="article-author">
            <img src="/profile.webp" alt="" width="40" height="40" />
            <div>
              <strong>Sampat Choudhary</strong>
              <span>Software engineer. Always learning.</span>
            </div>
          </div>
        </header>
        <div className="article-layout">
          <div className="article-toc">
            <p className="eyebrow">IN THIS NOTE</p>
            <nav aria-label="Table of contents">
              {headings.map((heading) => (
                <button key={heading.id} onClick={() => goToHeading(heading.id)}>
                  {heading.text}
                </button>
              ))}
            </nav>
            <Link to="/blog" className="text-link">
              <ArrowLeft size={14} aria-hidden="true" />
              Back to writing
            </Link>
          </div>
          <div>
            <div id="article-body" className="prose prose-invert blog-prose">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h1: ({ children }) => <h2>{children}</h2>,
                  h2: ({ children }) => (
                    <h2 id={headingId(String(children))} tabIndex={-1}>
                      {children}
                    </h2>
                  ),
                  pre: ({ children }) => (
                    <pre tabIndex={0} role="group" aria-label="Code example">
                      {children}
                    </pre>
                  ),
                  a: ({ href, children }) => (
                    <a
                      href={href}
                      {...(href?.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                      onClick={
                        href?.startsWith('#')
                          ? (event) => {
                              event.preventDefault();
                              goToHeading(href.slice(1));
                            }
                          : undefined
                      }
                    >
                      {children}
                    </a>
                  ),
                  img: ({ src, alt }) =>
                    src?.match(/\.(mp4|webm|ogg)$/i) ? (
                      <video src={src} controls playsInline preload="metadata" aria-label={alt} />
                    ) : (
                      <img src={src} alt={alt} loading="lazy" />
                    ),
                  table: ({ children }) => (
                    <div
                      className="table-scroll"
                      tabIndex={0}
                      role="region"
                      aria-label="Article data table"
                    >
                      <table>{children}</table>
                    </div>
                  ),
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>
            <div className="article-outro">
              <p className="eyebrow accent">THANKS FOR READING</p>
              <h2>Have a different perspective?</h2>
              <p>The best ideas get better through conversation.</p>
              <a href="mailto:sampat0choudhary@gmail.com" className="text-link">
                Let’s talk <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            {nextPost && (
              <Link className="next-article" to={`/blog/${nextPost.slug}`}>
                <span className="eyebrow">KEEP EXPLORING</span>
                <span>
                  {nextPost.title}
                  <ArrowUpRight size={22} aria-hidden="true" />
                </span>
              </Link>
            )}
          </div>
        </div>
      </article>
    </Layout>
  );
}
