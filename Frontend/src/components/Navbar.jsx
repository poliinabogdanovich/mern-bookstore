import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'


const Navbar = ({role}) => {
  return (
    <nav className='navbar'>
        <div className='navbar-left'>
            <Link to="/" className='navbar-brand'>Каталог книг</Link>
        </div>
        <div className='navbar-right'>
            <Link to="/books" className='navbar-link'>Книги</Link>
            {role === "admin" && <>
              <Link to="/addbook" className="navbar-link">Добавить книгу</Link>
              <Link to="/adduser" className="navbar-link">Добавить пользователя</Link>
              <Link to="/dashboard" className="navbar-link">Панель управления</Link>
            
            </>
            }
            {role === "" ?

           
            <Link to="/login" className='navbar-link'>Войти</Link>
             : <Link to="/logout" className='navbar-link'>Выйти</Link>

            
             }

             {role === "user" && <>
             
             <Link to="/cart" className='navbar-link'>Корзина</Link>
             
             </>}
            
        </div>
    </nav>
  )
}

export default Navbar