import React, { useEffect, useRef, useState, } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Loader from 'src/components/Loader'
// import NavState from 'src/containers/NavState'

import rightArrow from 'src/assets/images/right-arrow.png'
import './list.scss'

const List = ({
  projects,
  loading,
  infoIdRevealed,
  revealProjectInfo,
  hideProjectInfo,
  allSliderPreviewsRevealed,
  menuOpen,
  filteredProjects,
}) => {

  // gsap.registerPlugin(ScrollTrigger);

  // function animate() {
  //   let proxy = { skew: 0 },
  //       skewSetter = gsap.quickSetter(selected('.project-list-item'), 'skewY', 'deg'), // fast
  //       clamp = gsap.utils.clamp(-10, 10); // don't let the skew go beyond 20 degrees.

  //     ScrollTrigger.create({
  //       onUpdate: (self) => {
  //         let skew = clamp(self.getVelocity() / -300);
  //         /* only do something if the skew is MORE severe. Remember, we're always tweening back to 0,
  //         so if the user slows their scrolling quickly, it's more natural to just let the tween handle that smoothly
  //         rather than jumping to the smaller skew. */
  //         if (Math.abs(skew) > Math.abs(proxy.skew)) {
  //           proxy.skew = skew;
  //           gsap.to(proxy, {skew: 0, duration: 1.2, ease: 'power3', overwrite: true, onUpdate: () => skewSetter(proxy.skew)});
  //         }
  //       }
  //     });
  //     // make the right edge 'stick' to the scroll bar. force3D: true improves performance
  //     gsap.set(selected('.project-list-item'), {transformOrigin: 'right center', force3D: true});
  // }

  const myRef = useRef(null);
  const [scrollState, setScrollState] = useState(0);
  const [refElems, setRefElems] = useState([]);

  function listenScroll() {
    window.addEventListener('scroll', () => {
      setScrollState(Math.round(document.documentElement.scrollTop))
    });
  }

  useEffect(() => {
    /* 1st useEffect : set refElems in state */
    setRefElems([...myRef.current.children]);
  }, [projects]);

  useEffect(() => {
    /* 2nd useEffect : set scroll value in state & launch
    GSAP animation on current ref matching scrollState */
    listenScroll();

    const scrollMatches = refElems.map((elem, i) => scrollState > (elem.offsetTop - 300) && elem);
    const selected = gsap.utils.selector(scrollMatches);

    gsap.to(selected(scrollMatches), {
      opacity: 1,
      duration: 2,
      // stagger: 0.5,
      y: -100,
      ease: 'power4.out',
      repeat: 0,
    });

  }, [scrollState])

  return (
    <div role='list' className='project-list flex-wrap' ref={myRef}>
      {projects !== [] && filteredProjects.length === 0 ? (
        projects.map(({ id, attributes }) => (
          loading ? <Loader key={id} width='650px' height='594px' gapX='50' gapY='100' /> : (
            <div role='listitem' className='project-list-item' key={id}
              onMouseOver={() => revealProjectInfo(id)}
              onMouseOut={hideProjectInfo}
              >
              <Link to={`${id}/`} className='project-list-link flex-column-between'>
                <div className='project-list-item__text flex-center-between'>
                  <div className='normal-size text-bold text-center'>
                    {attributes.name}
                  </div>
                    {attributes.themes.data && attributes.themes.data.map((theme) => (
                      <span key={theme.id} className='small-size'>{theme.attributes.name}</span>
                    ))}
                </div>
                <img
                  src={`http://localhost:1337${attributes.image.data[0].attributes.formats.small.url}`}
                  loading='lazy'
                  className='portrait project-list-img'
                />
                <div className={!menuOpen && infoIdRevealed === id ? 'see-project flex' : 'see-project no-opacity flex'}>
                  <p className='see-project-text'>Voir le projet</p>
                  <img src={rightArrow} className='small-icon' />
                </div>
              </Link>
            </div>
          )
        ))
      ) : (
        filteredProjects.map(({ id, attributes }) => (
          loading ? <Loader width={infoIdRevealed === id ? '410px' : '185px'} height='368px' /> : (
            <div role='listitem' className='project-list-item' key={id}
              onMouseOver={() => revealProjectInfo(id)}
              onMouseOut={hideProjectInfo}
              >
              <Link to={`${id}/`} className='project-list-link flex-column-between'>
                <div className='project-list-item__text flex-center-between'>
                  <div className='normal-size text-bold text-center'>
                    {attributes.name}
                  </div>
                    {attributes.themes.data && attributes.themes.data.map((theme) => (
                      <span key={theme.id} className='small-size'>{theme.attributes.name}</span>
                    ))}
                </div>
                <img
                  src={`http://localhost:1337${attributes.image.data[0].attributes.formats.small.url}`}
                  loading='lazy'
                  className='portrait project-list-img'
                />
                <div className={!menuOpen && infoIdRevealed === id ? 'see-project flex' : 'see-project no-opacity flex'}>
                  <p className='see-project-text'>Voir le projet</p>
                  <img src={rightArrow} className='small-icon' />
                </div>
              </Link>
            </div>
          )
        ))
      )}
    </div>
  );
}

export default List;
