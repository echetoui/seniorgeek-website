import { z, defineCollection } from 'astro:content';

const pageCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    template: z.string().optional(),
    image: z.string().optional(),
  }),
});

const postCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = {
  pages: pageCollection,
  post: postCollection,
};
