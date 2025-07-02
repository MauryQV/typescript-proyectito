// src/modules/departaments/departaments.routes.ts
import { Router } from "express";
import * as DepartamentsController from "./departaments.controller";

const router = Router();

router.get("/departamentos", DepartamentsController.getAllDepartamentos);

router.post("/crear-departamento", DepartamentsController.postDepartamento);

export default router;
