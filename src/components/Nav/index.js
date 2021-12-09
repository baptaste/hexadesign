import React from 'react'
import { NavLink } from 'react-router-dom'

import './nav.scss'

const Nav = ({ menuOpen }) => {
  return (
    <div className={menuOpen ? 'menu open flex-center' : 'menu'}>
      {menuOpen &&
        <nav className='nav flex-column-start'>
        <NavLink to='/' className='navLink big-size'>Meubles</NavLink>
        <NavLink to='/' className='navLink big-size'>Bibliothèques et étagères</NavLink>
        <NavLink to='/' className='navLink big-size'>Lumières</NavLink>
        <NavLink to='/' className='navLink big-size'>Déco et Autres</NavLink>
        <NavLink to='/' className='navLink big-size'>HexaDesign</NavLink>
        <NavLink to='/' className='navLink big-size'>Apprentissage</NavLink>
      </nav>
      }
    </div>
  );
}

export default Nav;