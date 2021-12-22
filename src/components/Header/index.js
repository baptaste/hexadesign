import React from 'react'

import MenuToggler from 'src/containers/MenuToggler'
import hexaLogo from 'src/assets/hexadesign-logo.jpg'
import './header.scss'

const Header = ({ menuOpen }) => {
  return (
    <header className='header flex-column'>
      <div className='banner flex-column-around'>
        <img src={hexaLogo} className={menuOpen ? 'hexaLogo no-opacity' : 'hexaLogo'} />
        <h1 className='page-title'>
          <span><span className={menuOpen ? 'no-opacity' : ''}>HexaDesign</span></span>
        </h1>
      </div>
      <MenuToggler />
    </header>
  );
}

export default Header