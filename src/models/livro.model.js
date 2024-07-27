export class Livro{
    constructor(nome, autor, editora, lançamento){
        this.id = Math.random() * (1000 - 1) + 1;
        this.nome = nome;
        this.autor = autor;
        this.editora = editora;
        this.lançamento = lançamento;
    }
}