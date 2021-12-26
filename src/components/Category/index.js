import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import Slider from 'src/containers/Slider';
import MenuToggler from 'src/containers/MenuToggler'
import { getCategoryName, getCategoryThemes } from 'src/utils';

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
  filteredTheme }) => {

  useEffect(() => {
    getCategoryProjects();
  }, []);

  const location = useLocation();
  let categoryName = getCategoryName(categoryName, categories, location.pathname);
  let currentThemes = getCategoryThemes(currentThemes, projects);
  let baseProjectPreviewShow = 4;

  return (
    <div className='categoryWrapper flex-column-around'>
      {/* <History /> */}
      <MenuToggler />
      <h1 className='categoryTitle medium-size text-bold'>{categoryName}.</h1>
      {currentThemes[0] !== undefined && (
         <div className='categoryThemes flex'>
         {currentThemes.map((theme, i) =>

          <div
            key={i}
            onClick={filteredProjects.length === 0 ? () => getFilteredProjects(theme) : null}
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