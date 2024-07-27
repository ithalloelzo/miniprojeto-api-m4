
import { Livro } from "../models/livro.model";

let listLivro = [];


export const criarLivro = (nome, autor, editora, lançamento) => {
    const novoLivro = new Livro(nome, autor, editora, lançamento);
    listLivro.push(novoLivro);
    return novoLivro;
}


export const listarLivros = () => {
    return listLivro;
}


export const atualizarLivro = (id, nome) => {

    const livroRealmenteExiste = listLivro.find(livro => livro.id == id);

    if(livroRealmenteExiste){
        let indexLivro = listLivro.findIndex(livro => livro.id == id);
        listLivro[indexLivro].nome = nome;
        return listLivro[indexLivro];
    }else{
        return "Nao existe livro com este id"
    }
}

export const deletarLivro = (id) => {
    const livroRealmenteExiste = listLivro.find(livro => livro.id == id);
    if(livroRealmenteExiste){
        let indexLivro = listLivro.findIndex(livro => livro.id == id)
        listLivro.splice(indexLivro,1);
        return livroRealmenteExiste
    }else{
        return "Nao existe livro com este id"
    }
}   

