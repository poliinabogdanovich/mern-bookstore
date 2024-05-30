import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import '../css/Login.css'
import axios from 'axios'
const Login = ({setRoleVar}) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('admin')
  const navigate = useNavigate()

  axios.defaults.withCredentials = true;
  const handleSubmit = () => {
    axios.post('http://localhost:3001/auth/login', {username, password, role})
    .then(res => {
      if(res.data.login && res.data.role === 'admin') {
        setRoleVar('admin')
        navigate('/dashboard')
      } else if (res.data.login && res.data.role === 'user') {
        setRoleVar("user")
        navigate('/')
      }
      console.log(res)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='login-page'>
      <div className="login-container">
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Имя пользователя:</label>
          <input type="text" placeholder='Введите имя пользователя'
           onChange={(e) => setUsername(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль:</label>
          <input type="password" placeholder='Введите пароль'
           onChange={(e) => setPassword(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="role">Роль:</label>
          <select name="role" id="role"
           onChange={(e) => setRole(e.target.value)}>
            <option value="admin">Администратор</option>
            <option value="user">Пользователь</option>
          </select>
        </div>
        <button className='btn-login' onClick={handleSubmit}>Войти</button>
      </div>
    </div>
  )
}

export default Login