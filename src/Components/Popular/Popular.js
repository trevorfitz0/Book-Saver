import React from 'react';
import './Popular.css'
import Book from '../Book/Book'

const Popular = ({topBooks}) => {
    const displayTopBooks = topBooks.map((book, index) => {
      return <Book key={`pop${index}`} title={book.title} author={book.author} image={book.book_image}/>
    })
    return (
        <div className="popular-section">{displayTopBooks}</div>
    )
}

export default Popular;