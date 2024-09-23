import express from "express";
import { bookRouter } from './routes/book.routes.js';

const app = express()
const PORT = 5001

app.use(express.json())

app.use(bookRouter);

app.listen(PORT, ()=> {
    console.log(`Servidor rodando no http://localhost:${PORT}`)
})
