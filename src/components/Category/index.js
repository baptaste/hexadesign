import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Slider from 'src/containers/Slider'
import MenuToggler from 'src/containers/MenuToggler'
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
  }, []);

  let categoryName = getCategoryName(categoryName, categories, pathname),
      currentThemes = getCategoryThemes(currentThemes, projects),
      baseProjectPreviewShow = 4;

  return (
    <div className='categoryWrapper flex-column-around'>
      {prevPath === '/' && <Transition type='vertical' />}
      <MenuToggler />
      <h1 className='categoryTitle medium-size text-bold'>{categoryName}.</h1>
      {currentThemes[0] !== undefined && (
         <div className='categoryThemes flex'>
         {currentThemes.map((theme, i) =>
          <div
            key={i}
            onClick={filteredTheme !== theme ? () => getFilteredProjects(theme) : null}
            className={filteredTheme === theme ?
              'themeTag themeTag-active flex-center radius-5 small-size pointer second-background'
              : 'themeTag flex-center radius-5 small-size pointer second-background'}
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

      <div className='sliderContainer flex-center-between'>
        {projects !== [] && <Slider categoryName={categoryName} />}

        {!allSliderPreviewsRevealed && filteredProjects.length === 0 && projects.length > baseProjectPreviewShow && (
          <button
            type='button'
            className='previewSlider-btn button-reset pointer medium-size'
            onClick={revealAllSliderPreviews}>
              {projects.length - baseProjectPreviewShow}+
          </button>
        )}
      </div>
    </div>
  );
}

export default Category