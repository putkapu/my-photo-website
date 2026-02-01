import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import type { APIContext } from 'astro'

export async function GET(context: APIContext) {
  const posts = await getCollection('posts')
  const sortedPosts = posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
  
  return rss({
    title: 'Ruan Putka',
    description: 'Software engineer and UX designer based in São Paulo, Brazil.',
    site: context.site || 'https://ruanputka.com.br',
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      link: `/posts/${post.slug}/`,
    })),
  })
}
