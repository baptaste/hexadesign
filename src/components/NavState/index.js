import React, { useEffect } from 'react'
import './nav-state.scss'

const NavState = ({ axis, setScrollValue, scrollValue }) => {
  function onScroll() {
    const scrolled = document.documentElement.scrollTop;
    const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrolled / maxHeight) * 100;
    setScrollValue(scrollPercent);
  }

  useEffect(() => {
    onScroll();
  }, []);

  window.addEventListener('scroll', onScroll);


  return (
    <>
      {axis === 'vertical-axis' && (
        <div className={`navState ${axis}`}
          style={{ height: `${Math.floor(scrollValue)}%` }}
        >
        </div>
      )}
      {axis === 'lateral-axis' && (
        <div className='navState-lateral'>
          <div className={`navState ${axis}`}
            style={{ transform: `scale(${Math.floor(scrollValue)}%, 1)` }}
          >
          </div>
        </div>
      )}
    </>
  );
}

export default NavState;