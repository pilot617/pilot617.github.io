import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { BlogPost } from '../content/blog';
import { readingTime, formatDate } from '../lib/format';

export default function ArticleCard({
  post,
  index,
  headingLevel = 'h3',
}: {
  post: BlogPost;
  index: number;
  headingLevel?: 'h2' | 'h3';
}) {
  const Heading = headingLevel;
  return (
    <Link to={`/blog/${post.slug}`} className="article-card">
      <span className="article-number">{String(index + 1).padStart(2, '0')}</span>
      <div className="article-card-body">
        <div className="eyebrow article-meta">
          <span>{post.tags[0].replace(/-/g, ' ')}</span>
          <span className="meta-separator">/</span>
          <span>{readingTime(post.content)} min read</span>
        </div>
        <Heading>{post.title}</Heading>
        <p>{post.description}</p>
        <time dateTime={post.date}>{formatDate(post.date)}</time>
      </div>
      <span className="circle-arrow">
        <ArrowUpRight size={21} aria-hidden="true" />
      </span>
    </Link>
  );
}
