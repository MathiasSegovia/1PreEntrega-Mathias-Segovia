import React from 'react'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
      <h1> Vestite como un Rey </h1>

      <nav>
        <ul>
            <li className='lista'>Camisetas</li>
            <li className='lista'>Short</li>
            <li className='lista'>Ropa de Entrenamiento</li>
            <li className='lista'>Medias</li>
            <li className='lista'>Ropa tiempo libre</li>
        </ul>
      </nav>

      <CartWidget/>

    </header>
  )
}

export default NavBar
