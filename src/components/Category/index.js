import React, { useEffect } from 'react'
import History from 'src/containers/History';

import Loader from 'src/components/Loader';
import './category.scss'

const Category = ({ category, allProjects, getCategoryProjects, categoryProjects, loading }) => {
  useEffect(() => {
    getCategoryProjects();
  }, [])

  const projectPreviewWidth = 608,
        projectPreviewHeight = 640;

  return (
    <div className='categoryWrapper flex-column-around'>
      <History />

      <h1 className='categoryTitle medium-size text-bold'>{category}</h1>
      <section className='category flex-start-between flex-wrap'>
        {/* {loading && <Loader />} */}
          {categoryProjects !== [] && categoryProjects.map(({ id, attributes }) => (

            <article key={id} className='projectPreview flex-column-around'>
              {loading ? <Loader width={projectPreviewWidth} height={projectPreviewHeight} /> : (
                <>
              <p className='medium-size text-bold'>{attributes.name}</p>
              <div className='projectThemes'>
                {attributes.themes.data && attributes.themes.data.map((theme) => (
                  <span key={theme.id}>{theme.attributes.name}</span>
                ))}
              </div>
              <div className='projectImg'>
                {attributes.image.data && attributes.image.data.map((img) => (
                  <img src={`http://localhost:1337${img.attributes.formats.small.url}`} alt={attributes.name} key={img.id} />
                ))}
              </div>
              </>
              )}
            </article>

          ))}
          {/* <p className='normal-size'>{attributes.description}</p> TODO : move it to project page component */}
      </section>
    </div>
  );
}

export default Category