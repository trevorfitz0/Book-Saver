import React from 'react';
import Book from '../Book/Book';
import './AllBooks.css'

const AllBooks = ({ books }) => {

    const bookData = books.map((book, index) => {
        return <Book key={`all${index}`} title={book.title} author={book.author} rating={book.rank} image={book.book_image} id={book.primary_isbn13}/>
    })

    return (
        <div className="books-section">
            {bookData}
        </div>
        
    )
}

export default AllBooks;