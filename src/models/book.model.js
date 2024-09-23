export class Book{
    constructor(name, author, publishing_company, description, number_of_pages, language){
        this.id = Math.random() * (1000 - 1) + 1;
        this.name = name;
        this.author = author;
        this.publishing_company = publishing_company;
        this.description = description;
        this.number_of_pages = number_of_pages;
        this.language = language;
    }
}