import { Rota } from 'express'
import { criarLivro, listarLivros, atualizarLivro, deletarLivro} from '../controllers/livro.controller'

const livroRota = Rota();

livroRota.post("/livro", (req,res) => {
    const { nome, autor, editora, lançamento } = req.body;
    const novoLivro = criarLivro(nome, editora, editora, lançamento);
    res.status(200).json({novoLivro});
});

livroRota.patch("/livro", (req,res) => {
    const { nome, id } = req.body;
    const atualizarLivro = atualizarLivro(id, nome);
    res.status(200).json({atualizarLivro});
})

livroRota.get("/livro", (req,res) => {
    const listarLivros = listarLivros();
    res.status(200).json({listarLivros});
});

livroRota.delete("/livro/:id", (req,res) => {
    const { id } = req.params; 
    const livro = deletarLivro(id);
    res.status(200).json({livro});
})


export {livroRota}
