import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import List from 'src/containers/List'
import { getCategoryName, getCategoryThemes } from 'src/utils'
import Transition from 'src/containers/Transition'

import './category.scss'

const Category = ({
  categories,
  getCategoryProjects,
  projects,
  revealAllSliderPreviews,
  allSliderPreviewsRevealed,
  getFilteredProjects,
  filteredProjects,
  clearFilteredProjects,
  filteredTheme,
  prevPath }) => {

  const { pathname } = useLocation();

  useEffect(() => {
    getCategoryProjects();
  }, [pathname]);

  let categoryName = getCategoryName(categoryName, categories, pathname),
      currentThemes = getCategoryThemes(currentThemes, projects);

  // console.log('prevPath.includes(/[0-9]+/g) ? ', prevPath.includes('/category/', /[0-9]+/g));

  return (
    <div className='categoryWrapper flex-column-around'>
      {prevPath === '/' && <Transition type='vertical' />}
      {/* {prevPath && prevPath.includes('/category/', /[0-9]+/g) ? (
        null
      ) : (
        <Transition type='vertical' />
      )} */}

      <div className='categoryHeading text-center'
      style={{marginBottom: currentThemes[0] !== undefined ? '12rem' : '5rem'}}>
        <h1 className='categoryTitle medium-size text-bold'>{categoryName}.</h1>
        {currentThemes[0] !== undefined && (
          <div className='categoryThemes flex'>
          {currentThemes.map((theme, i) =>
            <div
              key={i}
              onClick={filteredTheme !== theme ? () => getFilteredProjects(theme) : null}
              className={filteredTheme === theme ?
                'themeTag themeTag-active flex-center small-size pointer second-background'
                : 'themeTag flex-center small-size pointer second-background'}
              >
                <p className={filteredTheme === theme ? 'themeTagText-active' : 'themeTagText'}>{theme}</p>
                {filteredProjects.length !== 0 && filteredTheme === theme &&
                  <div onClick={clearFilteredProjects} className='closeFilter-btn flex-center pointer'>
                    <span className='leftLine'></span>
                    <span className='rightLine'></span>
                  </div>
                }
              </div>
            )}
        </div>
        )}
      </div>
      {/* <div className='sliderContainer flex-center-between'> */}
        {projects !== [] && <List />}

        {/* {!allSliderPreviewsRevealed && filteredProjects.length === 0 && projects.length > baseProjectPreviewShow && (
          <button
            type='button'
            className='previewSlider-btn button-reset pointer medium-size'
            onClick={revealAllSliderPreviews}>
              {projects.length - baseProjectPreviewShow}+
          </button>
        )} */}
      {/* </div> */}
    </div>
  );
}

export default Category