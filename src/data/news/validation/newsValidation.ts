import { z } from 'zod';

const sourceSchema = z.object({
  id: z.string().nullable(),
  name: z.string(),
});

const newsSchema = z.object({
  source: sourceSchema,
  author: z.string(),
  title: z.string(),
  description: z.string(),
  url: z.string(),
  urlToImage: z.string(),
  publishedAt: z.string(),
  content: z.string(),
});

const responseSchema = z.object({
  status: z.string(),
  totalResults: z.number(),
  articles: z.array(newsSchema),
});

type TNewsResponse = z.infer<typeof responseSchema>;

const validateNewsResponse = (value: unknown): TNewsResponse => {
  return responseSchema.parse(value);
};

export default validateNewsResponse;
