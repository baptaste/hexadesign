import React from 'react'
import { useNavigate } from "react-router-dom";
import './menuToggler.scss'

const MenuToggler = ({ toggleMenuOpen, menuOpen }) => {
  const navigate = useNavigate();

  function goBackWithMenu() {
    navigate('/');
    toggleMenuOpen();
  }
  return (
    <div className='menuTogglerWrapper flex-center'>
      <button
      className='menuToggler button-reset flex-column'
      onClick={goBackWithMenu}>
        <div className={menuOpen ? 'line rotated' : 'line'}></div>
        <div className={menuOpen ? 'line rotated' : 'line'}></div>
        <div className={menuOpen ? 'line rotated' : 'line'}></div>
      </button>
    </div>

  );
}

export default MenuToggler;