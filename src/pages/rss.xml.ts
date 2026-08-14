import { getCollection } from 'astro:content';

export async function GET({ site }: { site?: URL }) {
  const posts = (await getCollection('blog', ({ data }) => !data.draft)).sort((a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf());
  const origin = site?.toString().replace(/\/$/, '') ?? 'http://localhost:4321';
  const items = posts.map((post) => `<item><title><![CDATA[${post.data.title}]]></title><description><![CDATA[${post.data.description}]]></description><link>${origin}/blog/${post.id}/</link><guid>${origin}/blog/${post.id}/</guid><pubDate>${post.data.publishedDate.toUTCString()}</pubDate></item>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Shanjida Farzana Owishy · Blog</title><link>${origin}/blog/</link><description>Public-health field notes and research reflections.</description>${items}</channel></rss>`, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
}
