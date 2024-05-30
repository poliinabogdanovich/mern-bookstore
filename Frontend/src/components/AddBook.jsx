import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/book/add", { name, author, imageUrl, price })
      .then((res) => {
        if (res.data.added) {
          navigate("/books");
        } else {
          console.log(res);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="user-form-container">
      <form className="user-form" onSubmit={handleSubmit}>
        <h2>Добавить книгу</h2>
        <div className="form-group">
          <label htmlFor="book">Название книги:</label>
          <input
            type="text"
            id="book"
            name="book"
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="author">Автор:</label>
          <input
            type="text"
            id="author"
            name="author"
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">URL для обложки:</label>
          <input
            type="text"
            id="image"
            name="image"
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Цена:</label>
          <input
            type="text"
            id="price"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button type="submit">Добавить </button>
      </form>
    </div>
  );
};

export default AddBook;
