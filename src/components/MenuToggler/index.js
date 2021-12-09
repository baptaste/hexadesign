import React from 'react'
import './menuToggler.scss'

const MenuToggler = ({ toggleMenuOpen, menuOpen }) => {
  return (
    <div className='menuTogglerWrapper flex-center'>
      <button
      className='menuToggler buttonReset flex-column'
      onClick={toggleMenuOpen}>
        <div className={menuOpen ? 'line rotated' : 'line'}></div>
        <div className={menuOpen ? 'line rotated' : 'line'}></div>
        <div className={menuOpen ? 'line rotated' : 'line'}></div>
      </button>
    </div>

  );
}

export default MenuToggler;