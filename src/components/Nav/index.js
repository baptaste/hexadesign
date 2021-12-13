import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.scss'

// import furniture from 'src/assets/meubles.jpg'
// import shelf from 'src/assets/etagere.jpg'
// import light from 'src/assets/lumiere.jpg'
// import deco from 'src/assets/deco.jpg'
// import about from 'src/assets/about-us.png'
// import school from 'src/assets/apprentissage.jpg'

const Nav = ({ menuOpen, navLinkHovered, navImgSrc, revealNavLinkImg, hideNavLinkImg, handleNavLinkClick, toggleMenuOpen, setCategory, categories }) => {
  // const dataLinks = [
  //   {
  //     id: 'furniture',
  //     path: '/category/',
  //     text: 'Meubles',
  //     image: furniture,
  //   },
  //   {
  //     id: 'shelf',
  //     path: '/category/',
  //     text: 'Étagères',
  //     image: shelf,
  //   },
  //   {
  //     id: 'lights',
  //     path: '/category/',
  //     text: 'Lumières',
  //     image: light,
  //   },
  //   {
  //     id: 'deco',
  //     path: '/category/',
  //     text: 'Déco et Autres',
  //     image: deco,
  //   },
  //   {
  //     id: 'about',
  //     path: '/about',
  //     text: 'A propos',
  //     image: about,
  //   },
  //   {
  //     id: 'school',
  //     path: '/school',
  //     text: 'Apprentissage',
  //     image: school,
  //   },
  // ]

  function handleNavLinkClick(path, name) {
    if (path.includes('/category/')) {
      setCategory(name);
    }
    hideNavLinkImg();
    toggleMenuOpen();
  }

  return (
    <div className={menuOpen ? 'menu open flex-center' : 'menu'}>
      {menuOpen &&
        <nav className='nav flex-column-start'>
          {categories.map(({ id, attributes }) => (
            <NavLink
              to={attributes.path}
              key={id}
              className='navLink big-size text-bold'
              onMouseEnter={() => revealNavLinkImg(attributes.image.data[0].attributes.url)}
              onMouseLeave={hideNavLinkImg}
              onClick={() => handleNavLinkClick(attributes.path, attributes.name)}
            >
              {attributes.name}
            </NavLink>
          ))}
      </nav>
      }
      <div className='previewer flex-center'>
          <img loading='lazy' src={`http://localhost:1337${navImgSrc}`} className={navLinkHovered ? 'previewImg revealed' : 'previewImg'} />
      </div>
    </div>
  );
}

export default Nav;