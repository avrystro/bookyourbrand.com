import type { MetadataRoute } from 'next'

const BASE_URL = 'https://bookyourbrand.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const entries: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1 },
  ]

  // Book detail pages populated by Task 11 (17 books in data/books.ts).
  // For now, return homepage only until books.ts lands.
  // TODO(phase-2/task-11): import books from '@/data/books' and append
  //   books.map(b => ({ url: `${BASE_URL}/books/${b.slug}`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 }))

  return entries
}
