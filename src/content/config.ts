import { z, defineCollection } from "astro:content";

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

export const collections = {
  blog: blogCollection,
  portfolio: portfolioCollection,
};
