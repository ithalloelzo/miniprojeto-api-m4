import { Router } from "express"
import {createBook, rosterBook, updateBook, deleteBook} from '../controllers/book.controller.js'

const bookRouter = Router();

bookRouter.post("/book", (req,res) => {
    const { name, author, publishing_company, description } = req.body;
    const recentBook = createBook(name, author, publishing_company, description);
    res.status(200).json({recentBook});
});

bookRouter.patch("/book", (req,res) => {
    const {id, name, author, publishing_company, description } = req.body;
    const upBook = updateBook(id, name, author, publishing_company, description);
    res.status(200).json({upBook});
})

bookRouter.get("/book", (req,res) => {
    const lsBook = rosterBook();
    res.status(200).json({lsBook});
});

bookRouter.delete("/book/:id", (req,res) => {
    const { id } = req.params; 
    const dlBook = deleteBook(id);
    res.status(200).json({dlBook});
})


export {bookRouter}
