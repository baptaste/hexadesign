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

  // let refElems = [];
  // const [scrollState, setScrollState] = useState(0);

  const myRef = useRef(null),
        selected = gsap.utils.selector(myRef);
        // gsap = useRef(null),


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

  // function listenScroll() {
  //   window.addEventListener('scroll', () => (
  //     setScrollState(document.documentElement.scrollTop)
  //   ));
  // }

  useEffect(() => {
    console.log('MYREF : ', myRef.current);
    console.log('selected : ', selected(".project-list-item"));
    // TODO anim on scroll
    gsap.from(selected(".project-list-item"), {
        opacity: 0,
        // scale: 1,
        duration: 3,
        stagger: 0.5,
        y: 500,
        ease: 'expo',
        repeat: 0,
        // onComplete: () => console.log('anim FROM ended')
      });

    gsap.to(selected(".project-list-item"), {
      opacity: 1,
      // scale: 1,
      duration: 3,
      stagger: 0.5,
      y: 0,
      ease: 'expo',
      repeat: 0,
      // onComplete: () => console.log('anim TO ended')
    });

    // TEST ------------------- TEST
    // listenScroll();

    // console.log('scrollState : ', scrollState);
    // if (myRef.current) {
    //   refElems = [...selected(myRef)[0].current.children]
    //   refElems = refElems.map((el, i) => {
    //     console.log(`elem ${i} offsetTop : `, el.offsetTop)
    //     return el = {
    //       refElem: i,
    //       position: el.offsetTop
    //     }
    //   });

    //   console.log('refElems position : ', refElems.position);
    //   console.log('myRef scrolltop : ', myRef.scrollTop);

    //   refElems.forEach((el, i) => {
    //     console.log('el.position : ', el.position);
    //     console.log('scrollState : ', Math.round(scrollState));
    //     if (Math.round(scrollState) === el.position[i]) {
    //       console.log('BINGO scrollState === el.position');
    //       gsap.from(el,
    //       {
    //         opacity: 0,
    //         y: -50,
    //       });
    //       gsap.to(el,
    //       {
    //         opacity: 1,
    //         y: 0,
    //       });
    //     }
    //   })
    // }
  }, [projects]);

  return (
    <div role='list' className='project-list flex-wrap' ref={myRef}>
      {/* <NavState axis='lateral-axis' /> */}
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
