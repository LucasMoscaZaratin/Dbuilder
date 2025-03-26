import { z } from 'zod';

const projectSupplierSchema = z.object({
  id: z.number().int(),
  projectId: z.number().int(),
  supplierId: z.number().int(),
  created_at: z.date().default(() => new Date()),
});

export default projectSupplierSchema;
