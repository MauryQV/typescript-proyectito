import express, { Request, Response } from "express";

const app = express();
const PUERTO = process.env.PORT || 3000;

app.get("/hola", (req: Request, res: Response) => {
    res.send(`Headers : ${JSON.stringify(req.headers)}, Query : ${JSON.stringify(req.query)},
    Method : ${req.method}, URL : ${req.url}`);
});

app.listen(PUERTO, () => {
    console.log(`Servidor escuchando en http://localhost:${PUERTO}`);
});