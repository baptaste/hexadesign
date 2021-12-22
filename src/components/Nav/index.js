import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './nav.scss'

const Nav = ({
  menuOpen,
  toggleNavBait,
  baitActive,
  navLinkHovered,
  navImgSrc,
  revealNavLinkImg,
  hideNavLinkImg,
  handleNavLinkClick,
  toggleMenuOpen,
  setCategory,
  categories }) => {

  function handleNavLinkClick(path, name) {
    // if (path.includes('/category/')) {
    //   setCategory(name);
    // }
    hideNavLinkImg();
    toggleMenuOpen();
  }

  // function showBait() {
  //   const timer = setInterval(() => {
  //     toggleNavBait();
  //     clearInterval(timer);
  //   }, 3000)
  //   toggleNavBait();
  // }

  // useEffect(() => {
  //   toggleNavBait();
  // }, [menuOpen])

  return (
    <div className={menuOpen ? 'menu open flex-center' : 'menu'}>
      {menuOpen &&
        <nav className='nav flex-column-start'>
          {/* {baitActive && <div className='bait'></div>} */}
          {categories.map(({ id, attributes }) => (
            <NavLink
              to={attributes.path}
              key={id}
              className={baitActive ? 'navLink notClickable extra-size text-bold' : 'navLink extra-size text-bold'}
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
          <img src={`http://localhost:1337${navImgSrc}`}
          className={navLinkHovered ? 'previewImg revealed' : 'previewImg'} />
      </div>
    </div>
  );
}

export default Nav;