
import { Book } from "../models/book.model.js";
import {registerBook} from "../data/bookregister.js"


export const createBook = (name, author, publishing_company, description, number_of_pages, language) => {
    const newBook = new Book(name, author, publishing_company, description, number_of_pages, language);
    registerBook.push(newBook);
    return newBook;
}


export const rosterBook = () => {
    return registerBook;
}

export const searchLanguageBr = () => {
    return registerBook.filter(({language}) => language == "Português");
}

export const searchLanguageIn = () => {
    return registerBook.filter(({language}) => language == "Inglês");
}

export const searchNumberPages = () => {
    return registerBook.filter(({number_of_pages}) => number_of_pages > 200);
}


export const updateBook = (id, name, author, publishing_company, description, number_of_pages, language) => {
    const bookAlreadyExist = registerBook.find(book => book.id == id);

    if(bookAlreadyExist){
        let indexBook = registerBook.findIndex(book => book.id == id);
        registerBook[indexBook].name = name;
        registerBook[indexBook].author = author;
        registerBook[indexBook].publishing_company = publishing_company;
        registerBook[indexBook].description = description;
        registerBook[indexBook].number_of_pages = number_of_pages;
        registerBook[indexBook].language = language;

        return registerBook[indexBook];
    }else{
        return "Nao existe livro com este id"
    }
}

export const deleteBook = (id) => {
    const bookAlreadyExist = registerBook.find(book => book.id == id);
    if(bookAlreadyExist){
        let indexBook = registerBook.findIndex(book => book.id == id)
        registerBook.splice(indexBook,1);
        return bookAlreadyExist
    }else{
        return "Nao existe livro com este id"
    }
}   

