import React, { useEffect, useState } from 'react'
import axios from 'axios'
import  {useNavigate, useParams} from 'react-router-dom'

const EditBook = () => {
    const [name, setName] = useState('')
    const [author, setAuthor] = useState('')
    const [imageUrl, setImageUrl] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate()
    const {id} = useParams()

    useEffect(() => {
        axios.get('http://localhost:3001/book/book/'+id)
        .then(res => { 
            setName(res.data.name)
            setAuthor(res.data.author)
            setImageUrl(res.data.imageUrl)
            setPrice(res.data.price)
        })
        .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3001/book/book/'+id, {name, author, imageUrl, price})
        .then(res => { 
            if(res.data.updated) {
                navigate('/books')
            }
            else {
                console.log(res)
            }
        })
        .catch(err => console.log(err))
      }

  return (
    <div className="user-form-container">
      <form className="user-form" onSubmit={handleSubmit}>
        <h2>Редактировать книгу</h2>
        <div className="form-group">
          <label htmlFor="book">Название книги:</label>
          <input type="text" id="book" name="book"  value={name}
          onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="author">Автор:</label>
          <input type="text" id="author" name="author" value ={author}
          onChange={(e) => setAuthor(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="image">URL для обложки:</label>
          <input type="text" id="image" name="image" value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="price">Цена:</label>
          <input type="text" id="price" name="price" value={price}
          onChange={(e) => setPrice(e.target.value)}/>
        </div>
        <button type="submit">Обновить </button>
      </form>
    </div>
  )
}

export default EditBook