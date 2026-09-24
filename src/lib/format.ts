export function readingTime(content: string) {
  return Math.max(1, Math.ceil(content.split(/\s+/).length / 220));
}
export function formatDate(date: string) {
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}
