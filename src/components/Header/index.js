import React from 'react'

import MenuToggler from 'src/containers/MenuToggler'
import hexaLogo from 'src/assets/hexadesign-logo.jpg'
import './header.scss'

const Header = ({ menuOpen }) => {
  return (
    <header className='header flex-column'>
      <div className='banner flex-column-around'>
        <img src={hexaLogo} className={menuOpen ? 'hexaLogo lowOpacity' : 'hexaLogo'} />
        <h1 className='page-title'>HexaDesign</h1>
      </div>
      <MenuToggler />
    </header>
  );
}

export default Header