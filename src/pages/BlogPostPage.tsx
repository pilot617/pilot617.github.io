import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Calendar, Tag } from 'lucide-react';
import Layout from '../components/Layout';
import FadeIn from '../components/FadeIn';
import { getPostBySlug } from '../content/blog';

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <Layout>
      <article className="container mx-auto px-6 pt-28 pb-20">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to blog
            </Link>

            <header className="mb-10">
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

              <p className="text-lg text-gray-400 mb-6">{post.description}</p>

              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="flex items-center gap-1 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 px-3 py-1 rounded-full text-sm"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 h-px bg-gradient-to-r from-transparent via-neon-cyan/30 to-transparent"></div>
            </header>

            <div className="prose prose-invert prose-lg max-w-none blog-prose">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  img({ src, alt }) {
                    if (src?.match(/\.(mp4|webm|ogg)$/i)) {
                      return (
                        <video
                          src={src}
                          controls
                          playsInline
                          className="w-full rounded-xl border border-gray-800 my-6"
                          aria-label={alt}
                        />
                      );
                    }
                    return <img src={src} alt={alt} />;
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            <div className="mt-16 pt-8 border-t border-gray-800">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-cyan/80 transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                All posts
              </Link>
            </div>
          </div>
        </FadeIn>
      </article>
    </Layout>
  );
}
