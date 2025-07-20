// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";

// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
      publishDate: z.coerce.date(),
      category: z.string(),
      tags: z.array(z.string()),
      prev: z.object({
        title: z.string(),
        url: z.string(),
      }),
      next: z.object({
        title: z.string(),
        url: z.string(),
      }),
    }),
});

const teamCollection = defineCollection({
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
  }),
});

const portfolioCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      id: z.number(),
      title: z.string(),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
      category: z.string(),
      tags: z.array(z.string()),
      slider: z.array(
        z.object({
          type: z.enum(["image", "video"]),
          src: image(),
          alt: z.string(),
        }),
      ),
    }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
  team: teamCollection,
  portfolio: portfolioCollection,
};
