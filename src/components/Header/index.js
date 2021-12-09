import React from 'react'

import MenuToggler from 'src/components/MenuToggler'
import hexaLogo from 'src/assets/hexadesign-logo.jpg'
import './header.scss'

const Header = ({ toggleMenuOpen, menuOpen }) => {
  return (
    <header className='header flex-column'>
      <div className='banner flex-column-around'>
        <img src={hexaLogo} className='hexaLogo' />
        <h1 className='page-title'>HexaDesign</h1>
      </div>
      <MenuToggler menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen} />
    </header>
  );
}

export default Header