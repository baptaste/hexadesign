import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './homeLink.scss'

const HomeLink = ({ toggleMenuOpen, menuOpen }) => {
  const { pathname } = useLocation()
  const [isVisible, setIsVisible] = useState(false)

  function togglevisibility() {
    window.addEventListener('scroll', () => {
      if (document.documentElement.scrollTop > 650) {
        setIsVisible(true)
      }
      if (document.documentElement.scrollTop < 650) {
        setIsVisible(false)
      }
    })
  }

  useEffect(() => {
    togglevisibility();
  }, [])

  return (
    <Link to='/'
      className={pathname === '/' && !menuOpen ?
        (isVisible ? 'homeLink flex-column' : 'homeLink notVisible flex-column')
        : ('homeLink flex-column')}
      onClick={menuOpen && toggleMenuOpen}>
      <span className='small-size text-bold'>h</span>
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