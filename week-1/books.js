/*
============================================
; Title:  books.js
; Author: Professor Krasso
; Date:   7 January 2023
; Modified By: Yakut Ahmedin
; Description: Assignment 1.3 – Setup, Debugging, and  Diagnostics
;===========================================
*/

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

class BookStore {
    books = [];

    constructor() {
        this.books = [
            new Book('The Hobbit', 'J.R.R. Tolkien'),
            new Book('The Fellowship of the Ring', 'J.R.R. Tolkien'),
            new Book('The Two Towers', 'J.R.R. Tolkien'),
            new Book('The Return of the King', 'J.R.R. Tolkien'),
            new Book('Dune', 'Frank Herbert')
        ]
    }

    showBooks() {
        console.log('\n  -- DISPLAYING AVAILABLE BOOKS --');
        for (let book of this.books) {
            let currentBook = book;
        }
    }
}

let bookStore = new BookStore();
bookStore.showBooks();