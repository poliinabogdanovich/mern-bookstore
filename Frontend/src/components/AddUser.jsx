import React, { useState } from 'react'
import axios from 'axios'
import  {useNavigate} from 'react-router-dom'

const AddUser = () => {
    const [phoneNumber, setPhoneNumber] = useState('')
    const [username, setUsername] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/user/register', {phoneNumber, username, password, address})
        .then(res => { 
            if(res.data.registered) {
                navigate('/dashboard')
            }
            console.log(res)
        })
        .catch(err => console.log(err))
      }

  return (
    <div className="user-form-container">
      <form className="user-form" onSubmit={handleSubmit}>
        <h2>Добавить пользователя</h2>
        <div className="form-group">
          <label htmlFor="phoneNumber">Номер пользователя:</label>
          <input type="text" id="phoneNumber" name="phoneNumber" 
          onChange={(e) => setPhoneNumber(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="username">Имя пользователя:</label>
          <input type="text" id="username" name="username" 
          onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="address">Адрес доставки:</label>
          <input type="text" id="address" name="address" 
          onChange={(e) => setAddress(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <input type="password" id="password" name="password" 
          onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <button type="submit">Зарегистрировать</button>
      </form>
    </div>
  )
}

export default AddUser