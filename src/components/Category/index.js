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
  getFilteredProjects,
  filteredProjects,
  clearFilteredProjects,
  filteredTheme,
  prevPath,
  setCurrentCategory
 }) => {

  const { pathname } = useLocation();

  useEffect(() => {
    getCategoryProjects();
    setCurrentCategory(pathname);
  }, [pathname]);

  let categoryName = getCategoryName(categoryName, categories, pathname),
      currentThemes = getCategoryThemes(currentThemes, projects);

  return (
    <div className='categoryWrapper flex-column-around'>

      {prevPath === '/' && <Transition type='vertical' />}

      <div className='categoryHeading text-center' style={{marginBottom: currentThemes[0] !== undefined ? '12rem' : '5rem'}}>
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
      {projects !== [] && <List />}
    </div>
  );
}

export default Category