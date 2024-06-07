import React, { useRef, useState } from "react";
import CartBookCard from "./CartBookCard";
import { Link } from "react-router-dom";
import "../css/Cart.css";

export default function Cart({ cartItems, handleCartAction, clearCart }) {
  let sum = 0;
  for (const book of cartItems) {
    sum += Number(book.price.slice(0, book.price.length - 1));
  }

  const [finalPrice, setFinalPrice] = useState(sum);

  return (
    <div className="cart-items">
      <div className="cart-items-header">
        {cartItems.map((book) => {
          return (
            <CartBookCard
              book={book}
              cartItems={cartItems}
              handleCartAction={(book) => {
                handleCartAction(book);
                const bookPrice = Number(
                  book.price.slice(0, book.price.length - 1)
                );
                setFinalPrice(finalPrice - bookPrice);
              }}
              id={cartItems.find((item) => item.name === book.name)}
            ></CartBookCard>
          );
        })}
      </div>

      {finalPrice === 0 && (
        <>
          <p>Товаров в корзине нет</p>
        </>
      )}
      {finalPrice !== 0 && (
        <>
          <p>Итоговая цена: {finalPrice}$</p>
          <button
            onClick={() => {
              alert("Заказ оформлен!");
              clearCart();
              setFinalPrice(0);
            }}
          >
            Заказать
          </button>
        </>
      )}
    </div>
  );
}
