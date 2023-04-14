import React from 'react';
import Book from '../Book/Book'
import './Popular.css'

const Popular = ({topBooks}) => {
    const displayTopBooks = topBooks.map((book, index) => {
      return <Book key={`pop${index}`} title={book.title} author={book.author} image={book.book_image} id={book.primary_isbn13}/>
    })
    return (
        <section className="popular-section">
          <h2>Popular Now</h2>
          <div className='popular-books'>
            {displayTopBooks}
          </div>
        </section>
    )
}

export default Popular;