import React from 'react'
import { Link } from 'react-router-dom'
import './homeLink.scss'

const HomeLink = ({ toggleMenuOpen, menuOpen }) => {
  return (
    <Link to='/' className='homeLink flex-column' onClick={menuOpen && toggleMenuOpen}>
      <span className='small-size text-bold'>H</span>
      <span className='small-size text-bold'>e</span>
      <span className='small-size text-bold'>x</span>
      <span className='small-size text-bold'>a</span>
      <span className='small-size text-bold'>d</span>
      <span className='small-size text-bold'>e</span>
      <span className='small-size text-bold'>s</span>
      <span className='small-size text-bold'>i</span>
      <span className='small-size text-bold'>g</span>
      <span className='small-size text-bold'>n</span>
    </Link>
  );
}

export default HomeLink;