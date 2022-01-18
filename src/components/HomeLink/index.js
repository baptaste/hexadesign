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
    <Link
      to='/'
      className={pathname === '/' && !menuOpen ?
      (isVisible ? 'homeLink flex' : 'homeLink notVisible flex')
      : ('homeLink flex')}
      onClick={menuOpen && toggleMenuOpen}
    >
      <span className='small-size text-bold'>hexa</span>
      <span className='small-size'>design</span>
    </Link>
  );
}

export default HomeLink;