import React from 'react'
import { NavLink } from 'react-router-dom'
import './Book.css'

const Book = ({ title, author, rating, image, id }) => {
  return (
    <NavLink to={`book/${id}`} className='book-card'>
        <img src={image} alt={title}></img>
        <p className='book-title'>{title}</p>
        <p>{author}</p>
        {rating && <p>#{rating}</p>}
    </NavLink>
  )
}

export default Book