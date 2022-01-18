import React from 'react'
import hexaLogo from 'src/assets/images/hexadesign-logo.jpg'
import './header.scss'

const Header = ({ menuOpen }) => {
  return (
    <header className='header flex-column'>
      <div className='hero flex-column-around'>
        <img
          src={hexaLogo}
          className={menuOpen ? 'hexaLogo no-opacity' : 'hexaLogo'} />
        <h1 className='hero-title header-title flex'>
          <span>
            <span className={menuOpen ? 'no-opacity' : ''}>hexa</span>
          </span>
          <span>
            <span className={menuOpen ? 'no-opacity' : ''}>design</span>
          </span>
        </h1>
      </div>
      <div className='hero-mob'>
        <h1 className='hero-title-mob'>
        <span>
          <span className={menuOpen ? 'no-opacity' : ''}>hexa</span>
        </span>
        </h1>
        <img src={hexaLogo} className={menuOpen ? 'hexaLogo no-opacity' : 'hexaLogo'} />
        <h1 className='hero-title-mob'>
        <span>
          <span className={menuOpen ? 'no-opacity' : ''}>design</span>
        </span>
        </h1>
      </div>
    </header>
  );
}

export default Header