import React, { useEffect } from 'react'
import History from 'src/containers/History';

import './category.scss'

const Category = ({ category, allProjects, getCategoryProjects, categoryProjects }) => {
  useEffect(() => {
    getCategoryProjects();
  }, [])

  // console.log('projects in category component :', projects);

  return (
    <div className='categoryWrapper flex-column-around'>
      <History />

      <h1 className='categoryTitle medium-size text-bold'>{category}</h1>
      <section className='category flex-start-between flex-wrap'>

          {categoryProjects !== [] && categoryProjects.map(({ id, attributes }) => (
            <article key={id} className='projectPreview flex-column-around'>
              <p className='medium-size text-bold'>{attributes.name}</p>

              <div className='projectThemes'>
                {attributes.themes.data && attributes.themes.data.map((theme) => (
                  <span key={theme.id}>{theme.attributes.name}</span>
                ))}
              </div>

              <div className='projectImg'>
                {attributes.image.data && attributes.image.data.map((img) => (
                  //  <img src={img.attributes.formats.small.url} alt={attributes.name} key={img.id}/>
                  <img src={`http://localhost:1337${img.attributes.formats.small.url}`} alt={attributes.name} key={img.id} />
                ))}
              </div>

              {/* <p className='normal-size'>{attributes.description}</p> TODO : move it to project page component */}
            </article>
          ))}
      </section>
    </div>
  );
}

export default Category