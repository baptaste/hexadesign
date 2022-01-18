import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Transition from 'src/containers/Transition'
import NavState from 'src/containers/NavState'
import './about.scss'
import aboutBackground from 'src/assets/images/about-background.jpg'

const About = ({ getArticles, articles, setPrevPath, menuOpen }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    getArticles();
    setPrevPath(pathname);
  }, []);

  return (
    <div className='aboutWrapper flex-column'>
      <img src={aboutBackground} className={menuOpen ? 'aboutBackground background-cover no-opacity' : 'aboutBackground background-cover'} />
      <Transition type='vertical' />
      <NavState axis='lateral-axis' />
      <h1 className='aboutTitle hero-title second-font'>À propos</h1>
      <section className='aboutContent'>
      {articles.map(({id, attributes}) => (
        <div className='aboutItem flex' key={id}>
          <div className='aboutItem-img flex-column'>
            <img src={`http://localhost:1337${attributes.image.data.attributes.formats.small.url}`}
              className='medium-img' loading='lazy'
            />
          </div>
          <p className='aboutDesc flex-column medium-size'>
            {attributes.description}
          </p>
        </div>
      ))}
      </section>
    </div>
  );
}

export default About;