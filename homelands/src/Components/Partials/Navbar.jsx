import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
        <Link to='/'>Forside</Link>
        <Link to='/boliger'>Boliger til salg</Link>
        <Link to='/login'>Login</Link>
        <input type="search" id="query" name="q" placeholder="Search..." />
    </nav>
  )
}
