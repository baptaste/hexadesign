import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './nav-state.scss'

const NavState = ({ axis, setScrollValue, scrollValue, menuOpen }) => {
  const { pathname } = useLocation();

  function onScroll() {
    const scrolled = document.documentElement.scrollTop;
    const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrolled / maxHeight) * 100;
    setScrollValue(scrollPercent);
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
  }, [pathname]);

  return (
    !menuOpen && (
      <>
        {axis === 'vertical-axis' && (
          <div className={`navState ${axis}`}
            style={{ height: `${Math.floor(scrollValue)}%` }}
          >
          </div>
        )}
        {axis === 'lateral-axis' && (
          <div className={pathname.match(/[0-9]+/g) ? 'navState-lateral navState-off' : 'navState-lateral'}>
            <div className={`navState ${axis}`}
              style={{ transform: `scale(${Math.floor(scrollValue)}%, 1)`}}
            >
            </div>
          </div>
        )}
      </>
    )
  );
}

export default NavState;