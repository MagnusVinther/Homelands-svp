import React from 'react'
import { Navbar } from './Navbar'

export const Header = () => {
  return (
    <header className='headerContainer'>
        <div className='headerLogo'>
            <h3>HomeLands</h3>
        </div>
        <Navbar />
    </header>
  )
}

