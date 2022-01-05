import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Transition from 'src/containers/Transition'
import './about.scss'

const About = ({ setPrevPath }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    setPrevPath(pathname);
  }, []);

  return (
    <div className='aboutWrapper'>
      <Transition type='vertical' />
      <h1 className='aboutTitle page-title'>À propos</h1>
    </div>

  );
}

export default About;