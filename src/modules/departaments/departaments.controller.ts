// src/modules/departaments/departaments.controller.ts
import { Request, Response } from "express";
import * as DepartamentsService from "./departaments.service";
import { createDepartamentoSchema } from "./departaments.schema";

export const getAllDepartamentos = async (_req: Request, res: Response) => {
    try {
        const departamentos = await DepartamentsService.getDepartamentos();
        res.json(departamentos);
    } catch (err: any) {
        res.status(500).json({ error: err.message });
    }
};

export const postDepartamento = async (req: Request, res: Response) => {
    try {
        const validated = createDepartamentoSchema.parse(req.body);
        const nuevo = await DepartamentsService.createDepartamento(validated);
        res.status(201).json(nuevo);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
};
