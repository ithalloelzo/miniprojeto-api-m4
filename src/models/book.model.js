export class Book{
    constructor(name, author, publishing_company, description){
        this.id = Math.random() * (1000 - 1) + 1;
        this.name = name;
        this.author = author;
        this.publishing_company = publishing_company;
        this.description = description;
    }
}