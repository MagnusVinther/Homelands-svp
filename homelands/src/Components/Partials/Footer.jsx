import React from 'react'
import { FaTwitterSquare, FaFacebookSquare } from 'react-icons/fa';


export const Footer = () => {
  return (
    <footer>
        <div className='footerContainer-1'>
          <div>
            <h3>Homelands</h3>
          </div>
          <div>
              <p>Øster Uttrupvej 5</p>
              <p>9000 Aalborg</p>
          </div>
          <div>
              <p>Email: info@homelands.dk</p>
              <p>Telefon: +45 1122 3344</p>
          </div>
        </div>

        <div className="footerIcons">
            <FaTwitterSquare />
            <FaFacebookSquare />
        </div>
        
    </footer>
  )
}
