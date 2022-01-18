import React from 'react'
import './menuToggler.scss'

const MenuToggler = ({ toggleMenuOpen, menuOpen }) => {
  return (
    <button
      className='menuToggler button-reset flex-column mix-blend-diff'
      onClick={toggleMenuOpen}>
      <div className={menuOpen ? 'line rotated' : 'line'}></div>
      <div className={menuOpen ? 'line rotated' : 'line'}></div>
      <div className={menuOpen ? 'line rotated' : 'line'}></div>
    </button>
  );
}

export default MenuToggler;