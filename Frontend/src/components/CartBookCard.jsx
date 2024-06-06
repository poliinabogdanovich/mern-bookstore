import React from "react";
import ReactDOM from "react-dom";

const CartBookCard = ({ book, handleCartAction, id }) => {
  const { name, author, imageUrl, price } = book;

  const buttonName = "удалить из корзины";

  return (
    <div className="book-card" id={id}>
      <img src={imageUrl} alt={name} className="book-image" />
      <div className="book-details">
        <h3>{name}</h3>
        <p>{author}</p>
      </div>

      <div className="book-actions">
        <div className="price">{price}</div>

        <button
          onClick={() => {
            handleCartAction(book);
            const node = document.getElementById(id);
            ReactDOM.unmountComponentAtNode(node)
            console.log(book);
          }}
        >
          {buttonName}
        </button>
      </div>

    </div>
  );
};

export default CartBookCard;
