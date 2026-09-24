import { useEffect, useState } from 'react';
import { Search, X } from 'lucide-react';
import Layout from '../components/Layout';
import FadeIn from '../components/FadeIn';
import ArticleCard from '../components/ArticleCard';
import posts from '../content/blog';

const categories = ['All notes', 'AI & engineering', 'Personal'] as const;
export default function BlogListPage() {
  useEffect(() => {
    document.title = 'Writing — Sampat Choudhary';
    return () => {
      document.title = 'Sampat Choudhary — Software & AI Engineer';
    };
  }, []);
  const [category, setCategory] = useState<string>('All notes');
  const [query, setQuery] = useState('');
  const filtered = posts.filter((post) => {
    const matchesCategory =
      category === 'All notes' ||
      (category === 'Personal' ? post.tags.includes('personal') : !post.tags.includes('personal'));
    return (
      matchesCategory &&
      `${post.title} ${post.description} ${post.tags.join(' ')}`
        .toLowerCase()
        .includes(query.toLowerCase().trim())
    );
  });
  return (
    <Layout>
      <div className="container writing-page">
        <FadeIn>
          <header className="page-heading">
            <p className="eyebrow">
              <span className="accent">THE WORKBENCH</span>
              <span className="label-rule" />
              NOTES, IDEAS & EXPERIMENTS
            </p>
            <h1>
              Thinking out loud.
              <br />
              <span className="muted">Building in the open.</span>
            </h1>
            <p>
              Lessons from production, explorations in AI, and the occasional side quest. Written by
              an engineer, for the curious.
            </p>
          </header>
        </FadeIn>
        <div className="writing-controls">
          <div className="filter-tabs" role="group" aria-label="Filter writing by category">
            {categories.map((item) => (
              <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>
                {item}
              </button>
            ))}
          </div>
          <div className="search-field">
            <Search size={17} aria-hidden="true" />
            <label className="sr-only" htmlFor="search-writing">
              Search writing
            </label>
            <input
              id="search-writing"
              type="search"
              placeholder="Find a note…"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
            />
            {query && (
              <button
                className="icon-button"
                onClick={() => setQuery('')}
                aria-label="Clear search"
              >
                <X size={16} aria-hidden="true" />
              </button>
            )}
          </div>
        </div>
        <p className="result-count" role="status">
          {filtered.length} {filtered.length === 1 ? 'note' : 'notes'}
          {query ? ` matching “${query}”` : ' from the workbench'}
        </p>
        <div className="article-list">
          {filtered.map((post, index) => (
            <ArticleCard key={post.slug} post={post} index={index} headingLevel="h2" />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="empty-state">
            <Search size={28} aria-hidden="true" />
            <h2>No notes found.</h2>
            <p>Try another search or explore all the writing.</p>
            <button
              className="button button-secondary"
              onClick={() => {
                setQuery('');
                setCategory('All notes');
              }}
            >
              Show all notes <ArrowIcon />
            </button>
          </div>
        )}
        <div className="writing-end">
          <span className="tiny-cross" aria-hidden="true">
            +
          </span>
          <p>Learning is better when you share it.</p>
          <a className="text-link" href="mailto:sampat0choudhary@gmail.com">
            Let’s compare notes <ArrowIcon />
          </a>
        </div>
      </div>
    </Layout>
  );
}
function ArrowIcon() {
  return <span aria-hidden="true">↗</span>;
}
