
import { Book } from "../models/book.model.js";
import {registerBook} from "../data/bookregister.js"


export const createBook = (name, author, publishing_company, description) => {
    const newBook = new Book(name, author, publishing_company, description);
    registerBook.push(newBook);
    return newBook;
}


export const rosterBook = () => {
    return registerBook;
}


export const updateBook = (id, name) => {

    const bookAlreadyExist = registerBook.find(book => book.id == id);

    if(bookAlreadyExist){
        let indexBook = registerBook.findIndex(book => book.id == id);
        registerBook[indexBook].name = name;
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

