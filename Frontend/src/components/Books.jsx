import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookCard from './BookCard'
import '../css/Book.css'

const Books = ({role}) => {
  const [books, setBooks] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3001/book/books')
    .then(res => {
      setBooks(res.data)
      console.log(res.data)
    }).catch(err => console.log(err))
  } , [])

  const[value, setValue] = useState('')

  const filteredBooks = books.filter(book => {
    return book.name.toLowerCase().includes(value.toLowerCase())
  })

  return (
  <div>
    <div classname="form">
      <form className="search-form">
        <input
        type="text"
        placeholder="Поиск по товарам"
        className="search_input"
        onChange={(event) => setValue(event.target.value)}
        />

      </form>


    </div>

    <div className='book-list'>
      {
        filteredBooks.map(book => {
          return <BookCard key={book.id} book = {book} role = {role}></BookCard>
        })
      }
    </div>

  </div>

  
  )
}

export default Books