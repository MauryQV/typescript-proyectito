// src/modules/departaments/departaments.schema.ts
import { z } from "zod";

export const createDepartamentoSchema = z.object({
    nombre_departamento: z.string().min(1, "El nombre del departamento es requerido")
});

export type CreateDepartamentoDTO = z.infer<typeof createDepartamentoSchema>;
