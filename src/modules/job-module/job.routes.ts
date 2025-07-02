import { createJobController, getJobsController } from "./job.controller";
import { Router } from "express";

const router = Router();

router.post("/post-jobs", createJobController);

router.get("/get-jobs", getJobsController);

export default router;