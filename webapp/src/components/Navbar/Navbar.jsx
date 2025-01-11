import React from 'react'
import './Navbar.css'
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <header className="header">
        <nav className="navbar">
            <NavLink to="/" end>Listar</NavLink>
            <NavLink to="/adicionar" end>Adicionar</NavLink>
            <NavLink to="/remover" end>Remover</NavLink>
        </nav>
    </header>
  )
}

export default Navbar