import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import History from 'src/containers/History';
import Slider from 'src/containers/Slider';
import { getCategoryName, getCategoryThemes } from 'src/utils';

import './category.scss'

const Category = ({
  categories,
  getCategoryProjects,
  categoryProjects,
  revealAllSliderPreviews,
  allSliderPreviewsRevealed }) => {

  useEffect(() => {
    getCategoryProjects();
  }, []);

  const location = useLocation();
  let categoryName = getCategoryName(categoryName, categories, location.pathname);
  let currentThemes = getCategoryThemes(currentThemes, categoryProjects);
  let baseProjectPreviewShow = 4;

  return (
    <div className='categoryWrapper flex-column-around'>
      <History />
      <h1 className='categoryTitle medium-size text-bold'>{categoryName}.</h1>
      {currentThemes[0] !== undefined && (
         <div className='categoryThemes flex'>
         {currentThemes.map((theme, i) => <span key={i} className='themeTag radius-5 small-size pointer'>{theme}</span>)}
       </div>
      )}

      <div className='sliderContainer flex-center-between'>
        <Slider />
        {!allSliderPreviewsRevealed && categoryProjects.length > baseProjectPreviewShow && (
          <button
            type='button'
            className='previewSlider-btn button-reset pointer medium-size'
            onClick={revealAllSliderPreviews}>
              {categoryProjects.length - baseProjectPreviewShow}+
          </button>
        )}
      </div>
      {/* <p className='normal-size'>{attributes.description}</p> TODO : move it to project page component */}
    </div>
  );
}

export default Category