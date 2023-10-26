import { z, defineCollection, reference } from "astro:content";

export const collections = {
  posts: defineCollection({
    type: "content",
    schema: z.object({
      title: z.string(),
      description: z.string(),
      date: z.date(),
      relatedPosts: z.array(reference("posts")).optional(),
    })
  })
}
