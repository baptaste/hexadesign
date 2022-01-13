import React from 'react'
import hexaLogo from 'src/assets/images/hexadesign-logo.jpg'
import './header.scss'

const Header = ({ menuOpen }) => {
  return (
    <header className='header flex-column'>
      <div className='hero flex-column-around'>
        <img src={hexaLogo} className={menuOpen ? 'hexaLogo no-opacity' : 'hexaLogo'} />
        <h1 className='hero-title'>
          {/* <span><span className={menuOpen ? 'no-opacity' : 'hero-subtitle second-font text-bold extra-size'}>Menuiserie</span></span> */}
          <span><span className={menuOpen ? 'no-opacity' : ''}>HexaDesign</span></span>
          {/* <span><span className={menuOpen ? 'no-opacity' : 'hero-subtitle second-font text-bold text-right extra-size'}>Ebenisterie</span></span> */}
        </h1>
      </div>
    </header>
  );
}

export default Header