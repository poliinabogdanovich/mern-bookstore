import React, { useState } from "react";
import { Link } from "react-router-dom";

function defineButtonName(cartItems, book) {
  for (const cartItem of cartItems) {
    if (cartItem.name === book.name) {
      return <>удалить из корзины</>;
    }
  }
  return <>добавить в корзину</>;
}

const BookCard = ({ book, cartItems, handleCartAction, role }) => {
  const { name, author, imageUrl, price } = book;
  const [buttonName, setButtonName] = useState(defineButtonName(cartItems, book));
  return (
    <div className="book-card">
      <img src={imageUrl} alt={name} className="book-image" />
      <div className="book-details">
        <h3>{name}</h3>
        <p>{author}</p>
      </div>

      {role === "admin" && (
        <div className="book-actions">
          <div className="price">{price}</div>
          <button>
            <Link to={`/book/${book._id}`} className="btn-link">
              редактировать
            </Link>
          </button>
          <button>
            <Link to={`/delete/${book._id}`} className="btn-link">
              удалить
            </Link>
          </button>
        </div>
      )}

      {role === "user" && (
        <div className="book-actions">
          <div className="price">{price}</div>

          <button
            onClick={() => {
              handleCartAction(book);
              setButtonName(defineButtonName(cartItems, book));
            }}
          >
            {buttonName}
          </button>
        </div>
      )}
    </div>
  );
};

export default BookCard;
