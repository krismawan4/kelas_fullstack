import { defineCollection, z } from 'astro:content'
import { glob } from 'astro/loaders'

const tutorial = defineCollection({
  loader: glob({
    base: './src/content/tutorial',
    pattern: '**/*.md',
  }),
  schema: z.object({
    module: z.string(),
    moduleTitle: z.string(),
    moduleEmoji: z.string(),
    moduleColor: z.string(),
    moduleBorderColor: z.string(),
    moduleAccentColor: z.string(),
    order: z.number(),
    title: z.string(),
    icon: z.string(),
    description: z.string(),
    duration: z.string(),
  }),
})

export const collections = { tutorial }
