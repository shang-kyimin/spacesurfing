import { z } from "zod";

export const APODSchema = z.object({
  copyright: z.string().optional(),
  date: z.string().date(),
  explanation: z.string(),
  hdurl: z.string().url().optional(),
  media_type: z.string(),
  service_version: z.string(),
  title: z.string(),
  url: z.string().url(),
});

export const APODsSchema = z.array(APODSchema);

export type APODType = z.infer<typeof APODSchema>;
export type APODsType = z.infer<typeof APODsSchema>;

export type APODResponse = {
  message: string;
  result: APODType | undefined;
};

export type APODsResponse = {
  message: string;
  result: APODsType | undefined;
};
