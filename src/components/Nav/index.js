import { func } from 'prop-types'
import React, { useEffect, useState } from 'react'
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
  categories,
  revealNavLinkNumber,
  navLinkNumber,
  hideNavLinkNumber,
  }) => {

  function handleNavLinkClick() {
    hideNavLinkImg();
    hideNavLinkNumber();
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
          {categories.map(({ id, attributes }, index) => (
            <NavLink
              to={attributes.path}
              key={id}
              className={baitActive ? 'navLink notClickable extra-size' : 'navLink extra-size'}
              onMouseEnter={attributes.image.data ? () => revealNavLinkImg(attributes.image.data[0].attributes.url) : null}
              onMouseLeave={hideNavLinkImg}
              onClick={() => handleNavLinkClick(attributes.path, attributes.name)}
            >
              <div className='flex-align-center'>
                <em className={navLinkNumber === id ? 'navLink-number reveal normal-size' : 'navLink-number normal-size'}>
                  0{index + 1}.
                </em>
                <p className='navLink-name'
                  onMouseEnter={() => revealNavLinkNumber(id)}
                  onMouseLeave={hideNavLinkNumber}>
                    {attributes.name}
                </p>
              </div>
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