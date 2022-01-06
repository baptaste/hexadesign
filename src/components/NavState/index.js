import React, { useState } from 'react'
import './nav-state.scss'

const NavState = () => {
  const [scroll, setScroll] = useState(0);

  const onScroll = () => {
    const Scrolled = document.documentElement.scrollTop;
    const MaxHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const ScrollPercent = (Scrolled / MaxHeight) * 100;
    setScroll(ScrollPercent);
  };

  window.addEventListener('scroll', onScroll);

  return (
    <div className='navState'
        style={{
          height: `${Math.floor(scroll)}%`
        }}>
    </div>
  );
}

export default NavState;