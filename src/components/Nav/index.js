import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.scss'

import furniture from 'src/assets/meubles.jpg'
import shelf from 'src/assets/etagere.jpg'
import light from 'src/assets/lumiere.jpg'
import deco from 'src/assets/deco.jpg'
import about from 'src/assets/about-us.png'
import school from 'src/assets/apprentissage.jpg'

const Nav = ({ menuOpen, navLinkHovered, navImgSrc, revealNavLinkImg, hideNavLinkImg, handleNavLinkClick, toggleMenuOpen, setCategory }) => {
  const dataLinks = [
    {
      id: 'furniture',
      path: '/category/',
      text: 'Meubles',
      image: furniture,
    },
    {
      id: 'shelf',
      path: '/category/',
      text: 'Bibliothèques et étagères',
      image: shelf,
    },
    {
      id: 'lights',
      path: '/category/',
      text: 'Lumières',
      image: light,
    },
    {
      id: 'deco',
      path: '/category/',
      text: 'Déco et Autres',
      image: deco,
    },
    {
      id: 'about',
      path: '/category/',
      text: 'A propos',
      image: about,
    },
    {
      id: 'school',
      path: '/category/',
      text: 'Apprentissage',
      image: school,
    },
  ]

  function handleNavLinkClick(text) {
    setCategory(text);
    hideNavLinkImg();
    toggleMenuOpen();
  }

  return (
    <div className={menuOpen ? 'menu open flex-center' : 'menu'}>
      {menuOpen &&
        <nav className='nav flex-column-start'>
          {dataLinks.map(({ id, path, text, image }) => (
            <NavLink
              to={path + id}
              key={text}
              className='navLink big-size text-bold'
              onMouseEnter={() => revealNavLinkImg(image)}
              onMouseLeave={hideNavLinkImg}
              onClick={() => handleNavLinkClick(text)}
            >
              {text}
            </NavLink>
          ))}
      </nav>
      }
      <div className='previewer flex-center'>
          <img loading='lazy' src={navImgSrc} className={navLinkHovered ? 'previewImg revealed' : 'previewImg'} />
      </div>
    </div>
  );
}

export default Nav;