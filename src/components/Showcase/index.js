import React from 'react'
import { Link } from 'react-router-dom'
import './showcase.scss'
import barres from 'src/assets/images/barres.jpg'
import tabouret from 'src/assets/images/tabouret.jpg'

const Showcase = ({ allProjects, setShowcaseProjectHover, showcaseProjectHover, showcaseProjectId }) => {

  const favoriteProjects = allProjects
    .map((project) => project.attributes.favorite === true && project)
    .filter((project) => project !== false);

  const pathsToProjects = favoriteProjects.map((project) => project.attributes.categories.data[0].attributes.path + '/' + project.id + '/')

  return (
    <div className='showcase flex-center-around' style={{ height: '150vh' }}>
        <div className='showcaseLeft flex-column'>
          <img src={tabouret}
            id={favoriteProjects[0]?.id}
            className='showcaseImg'
            style={{ transform: showcaseProjectHover && showcaseProjectId === favoriteProjects[0]?.id ?
              'translateY(-5%)' : 'translateY(0)' }}
          />
          <div className='showcaseProject flex-column-around'>
              <p className='text-bold'>{favoriteProjects[0]?.attributes.name}</p>
              <Link className='showcaseLink normal-size' to={`${pathsToProjects[0]}`}
              onMouseEnter={() => setShowcaseProjectHover(favoriteProjects[0]?.id)} onMouseLeave={() => setShowcaseProjectHover(null)}>
                Découvrir
              </Link>
          </div>
        </div>
        <div className='showcaseCenter flex-column'>
          <div className='showcaseLine'></div>
          <div className='showcaseCenter-text flex-column-around'>
            <p className='showcaseCenter-info small-size text-uppercase'>Bienvenue</p>
            <h2 className='showcaseCenter-title medium-size'>Entrez dans l'univers HexaDesign</h2>
          </div>
          <div className='showcaseLine'></div>
        </div>
        <div className='showcaseRight flex-column'>
          <img src={barres}
            id={favoriteProjects[1]?.id}
            className='showcaseImg'
            style={{ transform: showcaseProjectHover && showcaseProjectId === favoriteProjects[1]?.id ?
              'translateY(-5%)' : 'translateY(0)' }}
          />
          <div className='showcaseProject flex-column-around'>
            <p className='text-bold'>{favoriteProjects[1]?.attributes.name}</p>
            <Link className='showcaseLink normal-size' to={`${pathsToProjects[1]}`}
              onMouseEnter={() => setShowcaseProjectHover(favoriteProjects[1]?.id)} onMouseLeave={() => setShowcaseProjectHover(null)}>
                Découvrir
              </Link>
          </div>
        </div>
      </div>
  );
}

export default Showcase;
