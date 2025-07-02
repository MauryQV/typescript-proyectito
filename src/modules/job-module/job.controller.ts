import { createJob, getJobs } from './job.service';
import { Request, Response } from 'express';

function createJobController(req: Request, res: Response) {
    const { title, description } = req.body;

    createJob({ title, description })
        .then(data => res.status(201).json(data))
        .catch(error => res.status(500).json({ error: error.message }));
}

function getJobsController(req: Request, res: Response) {
    getJobs()
        .then(data => res.status(200).json(data))
        .catch(error => res.status(500).json({ error: error.message }));
}

export { createJobController, getJobsController };