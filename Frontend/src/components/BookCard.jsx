import React from 'react'
import { Link } from 'react-router-dom';

const BookCard = ({book, role}) => {
    const {name, author, imageUrl, price} = book;
  return (
    <div className='book-card'>
        <img src={imageUrl} alt={name} className='book-image'/>
        <div className="book-details">
            <h3>{name}</h3>
            <p>{author}</p>
            
        </div>

        {role === "admin" &&
        <div className="book-actions">
        <div className="price">{price}</div>
        <button><Link to={`/book/${book._id}`} className='btn-link'>редактировать</Link></button>
        <button><Link to={`/delete/${book._id}`} className='btn-link'>удалить</Link></button>
    </div>}
    
    {role === "user" &&
        <div className="book-actions">
        <div className="price">{price}</div>

        <button><Link to={`/cart/${book._id}`} className='btn-link'>добавить в корзину</Link></button>
    </div>}
  

        
    </div>
  )
}

export default BookCard