import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'src/components/Loader'
import rightArrow from 'src/assets/images/right-arrow.png'
import './list.scss'

const List = ({
  projects,
  loading,
  infoIdRevealed,
  revealProjectInfo,
  hideProjectInfo,
  menuOpen,
  filteredProjects,
}) => {

  const itemsRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        entry.target.classList.toggle('intersected', entry.isIntersecting)
        if (entry.isIntersecting) {
          observer.unobserve(entry.target)
        }
      })},
      {
        threshold: 0.5
      }
    )

    itemsRef.current.children.forEach(elem => {
      observer.observe(elem)
    })
  }, [projects, filteredProjects, itemsRef])

  return (
    <div role='list' className='project-list flex-wrap' ref={itemsRef}>
      {projects !== [] && filteredProjects.length === 0 ? (
        projects.map(({ id, attributes }, index) => (
          loading ? <Loader key={id} width='25vw' height='30vw' gapX='50' gapY='100' /> : (
            <div role='listitem' className='project-list-item' key={id} id={`list-item-${index+1}`}
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
          loading ? <Loader key={id} width='25vw' height='30vw' gapX='50' gapY='100' /> : (
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
