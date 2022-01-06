import React from 'react'
import { useLocation } from 'react-router-dom'
import './footer.scss'

const Footer = () => {
  const { pathname } = useLocation();
  //TODO hide footer on project page

  return (
    <footer className='footer'>
      HexaDesign 2022 - Tout droits réservés.
    </footer>
  );
}

export default Footer;