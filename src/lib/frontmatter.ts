export interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
}

export function parseFrontmatter(raw: string): { meta: Omit<BlogMeta, 'slug'>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) {
    return {
      meta: { title: 'Untitled', date: '', description: '', tags: [] },
      content: raw,
    };
  }

  const [, frontmatter, content] = match;
  const meta: Record<string, string | string[]> = {};

  for (const line of frontmatter.split('\n')) {
    const colonIdx = line.indexOf(':');
    if (colonIdx === -1) continue;

    const key = line.slice(0, colonIdx).trim();
    let value = line.slice(colonIdx + 1).trim();

    // Remove surrounding quotes
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }

    // Parse arrays like ["tag1", "tag2"]
    if (value.startsWith('[') && value.endsWith(']')) {
      meta[key] = value
        .slice(1, -1)
        .split(',')
        .map((s) => s.trim().replace(/^["']|["']$/g, ''))
        .filter(Boolean);
    } else {
      meta[key] = value;
    }
  }

  return {
    meta: {
      title: (meta.title as string) || 'Untitled',
      date: (meta.date as string) || '',
      description: (meta.description as string) || '',
      tags: Array.isArray(meta.tags) ? meta.tags : [],
    },
    content: content.trim(),
  };
}
