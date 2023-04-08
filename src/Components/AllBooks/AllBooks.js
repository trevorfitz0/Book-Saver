import React from 'react';
import './AllBooks.css'
import Book from '../Book/Book';

const AllBooks = ({ books }) => {

    const bookData = books.map((book, index) => {
        return <Book key={`all${index}`} title={book.title} author={book.author} rating={book.rank} image={book.book_image}/>
    })

    return (
        <div className="books-section">
            { bookData }
        </div>
        
    )
}

export default AllBooks;