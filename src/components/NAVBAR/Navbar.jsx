import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
 
const Navbar = () => {


  return (
    <>
    <div className='red'>
      <Link to="/">Все Покемоны</Link>
      <Link to="/help">Помощь</Link>
      <Link to="/contacts">Контакты</Link>
    </div>

    <div className='black'></div>
    </>
  )
}

export default Navbar