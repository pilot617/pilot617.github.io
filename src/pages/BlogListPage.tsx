import { Link } from 'react-router-dom';
import { Calendar, Tag, ArrowRight, BookOpen } from 'lucide-react';
import Layout from '../components/Layout';
import FadeIn from '../components/FadeIn';
import posts from '../content/blog';

const colorStyles = [
  {
    card: 'neon-cyan hover:border-neon-cyan/30',
    title: 'group-hover:text-neon-cyan',
    tag: 'bg-neon-cyan/10 text-neon-cyan border-neon-cyan/20',
    read: 'text-neon-cyan',
  },
  {
    card: 'neon-magenta hover:border-neon-magenta/30',
    title: 'group-hover:text-neon-magenta',
    tag: 'bg-neon-magenta/10 text-neon-magenta border-neon-magenta/20',
    read: 'text-neon-magenta',
  },
  {
    card: 'neon-green hover:border-neon-green/30',
    title: 'group-hover:text-neon-green',
    tag: 'bg-neon-green/10 text-neon-green border-neon-green/20',
    read: 'text-neon-green',
  },
  {
    card: 'neon-yellow hover:border-neon-yellow/30',
    title: 'group-hover:text-neon-yellow',
    tag: 'bg-neon-yellow/10 text-neon-yellow border-neon-yellow/20',
    read: 'text-neon-yellow',
  },
];

export default function BlogListPage() {
  return (
    <Layout>
      <div className="container mx-auto px-6 pt-32 pb-20">
        <FadeIn>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-6">
              <BookOpen className="w-8 h-8 text-neon-cyan" />
              <h1 className="text-4xl md:text-5xl font-bold">Blog</h1>
            </div>
            <p className="text-xl text-gray-400">
              Tech deep-dives, career reflections, and side-project updates.
            </p>
          </div>
        </FadeIn>

        {posts.length === 0 ? (
          <FadeIn>
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">No posts yet. Check back soon!</p>
            </div>
          </FadeIn>
        ) : (
          <div className="max-w-3xl mx-auto space-y-8">
            {posts.map((post, idx) => {
              const colors = colorStyles[idx % colorStyles.length];
              return (
                <FadeIn key={post.slug}>
                  <Link
                    to={`/blog/${post.slug}`}
                    className={`block bg-gray-900/60 rounded-xl p-8 border border-gray-800 card-hover ${colors.card} group transition-all`}
                  >
                    <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </time>
                    </div>

                    <h2 className={`text-2xl font-semibold mb-3 ${colors.title} transition-colors`}>
                      {post.title}
                    </h2>

                    <p className="text-gray-400 mb-4 leading-relaxed">
                      {post.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className={`flex items-center gap-1 ${colors.tag} border px-2 py-1 rounded text-xs`}
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className={`flex items-center gap-1 text-sm ${colors.read} opacity-0 group-hover:opacity-100 transition-opacity`}>
                        Read <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        )}
      </div>
    </Layout>
  );
}
