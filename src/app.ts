import express, { Request, Response } from "express";
import departamentsRoutes from "./modules/departaments/departaments.routes";
import jobRoutes from "./modules/job-module/job.routes";
import cors from "cors";


const app = express();
const PUERTO = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use("/api", departamentsRoutes);
app.use("/api", jobRoutes);

app.get("/hola", (req: Request, res: Response) => {
    res.send(`Headers : ${JSON.stringify(req.headers)}, Query : ${JSON.stringify(req.query)},
    Method : ${req.method}, URL : ${req.url}`);
});


app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});