import React from 'react'
import { useLocation } from 'react-router-dom'
import './footer.scss'

const Footer = () => {
  const { pathname } = useLocation();
  let footerReduced = false;

  function checkPathname() {
    if (pathname.includes('/category/') && pathname.length > 10 && pathname.match(/[0-9]+/g)) {
      footerReduced = true
    } else {
      footerReduced = false
    }
  }

  checkPathname();

  return (
    <footer className={footerReduced ? 'footer footer-reduced' : 'footer'}>
      HexaDesign 2022 - Tout droits réservés.
    </footer>
  );
}

export default Footer;