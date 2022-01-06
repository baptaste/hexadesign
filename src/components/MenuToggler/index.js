import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import './menuToggler.scss'

const MenuToggler = ({ toggleMenuOpen, menuOpen }) => {
  const navigate = useNavigate(),
      { pathname } = useLocation();

  function goBackWithMenu() {
    navigate('/');
    toggleMenuOpen();
  }

  return (
    <div className='menuTogglerWrapper flex-center'>
      <button
      className={pathname === '/' ? 'menuToggler button-reset flex-column mix-blend-diff' : 'menuToggler button-reset flex-column'}
      onClick={goBackWithMenu}>
        <div className={menuOpen ? 'line rotated' : 'line'}
          style={{ background: pathname.includes('/category/') || pathname === '/about' ? 'black' : 'white'}}
        >
        </div>
        <div className={menuOpen ? 'line rotated' : 'line'}
          style={{ background: pathname.includes('/category/') || pathname === '/about' ? 'black' : 'white'}}
        >
        </div>
        <div className={menuOpen ? 'line rotated' : 'line'}
          style={{ background: pathname.includes('/category/') || pathname === '/about' ? 'black' : 'white'}}
        >
        </div>
      </button>
    </div>
  );
}

export default MenuToggler;