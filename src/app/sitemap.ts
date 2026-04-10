import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://viventelifestyle.com';
  const lastModified = new Date('2026-04-09T15:02:31+00:00');

  return [
    // Core pages
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/enquiry`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },

    // Service pages
    {
      url: `${baseUrl}/services/construction`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/interior-design`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/swimming-pools`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/landscaping`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/water-features`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/water-wellness`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/real-estate`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services/facility-management`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // Product pages
    {
      url: `${baseUrl}/products/swimming-pool-products`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}