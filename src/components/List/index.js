import React from 'react'
import { Link } from 'react-router-dom'
import Loader from 'src/components/Loader'
import './list.scss'
import rightArrowDot from 'src/assets/images/right-arrow-dot.png'
import rightArrow from 'src/assets/images/right-arrow.png'

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

  let sliderHeight;

  function getSliderHeight() {
    if (projects.length > 4) {
      sliderHeight = `${400 * (projects.length / 4) + 230}px`
    } else sliderHeight = `${400 * (projects.length / 4)}px`

    return sliderHeight;
  }

  sliderHeight = getSliderHeight();

  return (
    <div role='list' className='project-list flex-wrap'>
    {/* <div role='list' className='project-list flex-wrap' style={{height: allSliderPreviewsRevealed ? sliderHeight : '400px'}}> */}
          {projects !== [] && filteredProjects.length === 0 ? (
            projects.map(({ id, attributes }, index) => (
              loading ? <Loader key={id} width={infoIdRevealed === id ? '410px' : '185px'} height='368px' /> : (
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
                      className='big-img project-list-img'
                    />
                    <div className={!menuOpen && infoIdRevealed === id ? 'see-project flex' : 'see-project no-opacity flex'}>
                      <p className='see-project-text'>Voir le projet</p>
                      {/* <span className='right-arrow'></span> */}
                      <img src={rightArrow} className='small-icon' />
                    </div>
                  </Link>
                </div>
              )
            ))
          ) : (
            filteredProjects.map(({ id, attributes }, index) => (
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
                      className='big-img'
                    />
                    <div className={!menuOpen && infoIdRevealed === id ? 'see-project flex' : 'see-project no-opacity flex'}>
                      <p className='see-project-text'>Voir le projet</p>
                      <span>{'--->'}</span>
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
