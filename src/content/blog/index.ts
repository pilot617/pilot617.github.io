import { parseFrontmatter, type BlogMeta } from '../../lib/frontmatter';

const modules = import.meta.glob('./*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>;

export interface BlogPost extends BlogMeta {
  content: string;
}

function slugFromPath(path: string): string {
  return path.replace('./', '').replace('.md', '');
}

const posts: BlogPost[] = Object.entries(modules).map(([path, raw]) => {
  const { meta, content } = parseFrontmatter(raw);
  return { ...meta, slug: slugFromPath(path), content };
});

posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export default posts;

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
