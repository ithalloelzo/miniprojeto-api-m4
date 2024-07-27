import express from 'express';
import { livroRota } from './routes/livro.routes.js';

const app = express()
const PORT = 5001

app.use(express.json())

app.use(livroRota);

app.listen(PORT, ()=> {
    console.log(`Servidor rodando no http://localhost:${PORT}`)
})

