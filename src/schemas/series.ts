import {z} from 'zod';

export const seriesSchema = z.object({
  exerciseName: z
    .string()
    .min(3, 'O nome do exercício deve ter pelo menos 3 caracteres')
    .refine(val => val.trim() !== '', 'O nome do exercício é obrigatório'),
  repetitions: z
    .string()
    .regex(/^\d+$/, 'Digite apenas números')
    .refine(val => val.trim() !== '', 'As repetições são obrigatórias'),
  weight: z
    .string()
    .regex(/^\d+$/, 'Digite apenas números')
    .refine(val => val.trim() !== '', 'A carga é obrigatória'),
});

export type SeriesFormData = z.infer<typeof seriesSchema>;
