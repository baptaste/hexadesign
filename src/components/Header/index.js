import React from 'react'
import hexaLogo from 'src/assets/hexadesign-logo.jpg'
import './header.scss'

const Header = ({ menuOpen }) => {
  return (
    <header className='header flex-column'>
      <div className='hero flex-column-around'>
        <img src={hexaLogo} className={menuOpen ? 'hexaLogo no-opacity' : 'hexaLogo'} />
        <h1 className='homepage-title'>
          <span><span className={menuOpen ? 'no-opacity' : ''}>HexaDesign</span></span>
        </h1>
      </div>
    </header>
  );
}

export default Header