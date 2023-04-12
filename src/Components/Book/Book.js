import React from 'react'
import './Book.css'
import { NavLink } from 'react-router-dom'

function Book({ title, author, rating, image, id }) {
  return (
    <NavLink to={`book/${id}`} className='book-card'>
        <img src={ image } alt={ title }></img>
        <p className='book-title'>{ title }</p>
        <p>{ author }</p>
        {rating && <p>#{ rating }</p>}
    </NavLink>
  )
}

export default Book