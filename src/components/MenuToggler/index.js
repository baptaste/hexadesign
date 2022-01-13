import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import './menuToggler.scss'

const MenuToggler = ({ toggleMenuOpen, menuOpen }) => {
  const navigate = useNavigate(),
      { pathname } = useLocation();

  // function goBackWithMenu() {
  //   // navigate('/');
  //   toggleMenuOpen();
  // }

  return (
      <button
        className={pathname === '/' ? 'menuToggler button-reset flex-column mix-blend-diff' : 'menuToggler button-reset flex-column'}
        onClick={toggleMenuOpen}>
        <div className={menuOpen ? 'line rotated' : 'line'}
          style={{ background: !menuOpen && pathname.includes('/category/') || pathname === '/about' ? 'black' : 'white'}}
        >
        </div>
        <div className={menuOpen ? 'line rotated' : 'line'}
          style={{ background: !menuOpen && pathname.includes('/category/') || pathname === '/about' ? 'black' : 'white'}}
        >
        </div>
        <div className={menuOpen ? 'line rotated' : 'line'}
          style={{ background: !menuOpen && pathname.includes('/category/') || pathname === '/about' ? 'black' : 'white'}}
        >
        </div>
      </button>
  );
}

export default MenuToggler;