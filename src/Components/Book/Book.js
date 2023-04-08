import React from 'react'
import './Book.css'

function Book({ title, author, rating, image}) {
  return (
    <div className='book-card'>
        <img src={ image } alt={ title }></img>
        <p className='book-title'>{ title }</p>
        <p>{ author }</p>
        {rating && <p>#{ rating}</p>}
    </div>
  )
}

export default Book