import React from 'react'
import Loader from 'src/components/Loader';

import './slider.scss'

const Slider = ({
  categoryProjects,
  loading,
  infoIdRevealed,
  revealProjectInfo,
  hideProjectInfo,
  allSliderPreviewsRevealed }) => {

  let cardWidth = '20%',
      cardHeight = '400px',
      firstCardWidth = '40%';

  return (
      <section className={allSliderPreviewsRevealed ? 'previewSlider heightAuto flex-wrap' : 'previewSlider flex-wrap'}>
          {categoryProjects !== [] && categoryProjects.map(({ id, attributes }) => (
            <article
              key={id}
              className='card flex-column-between'
              style={{width: infoIdRevealed === id ? firstCardWidth : cardWidth, height: cardHeight}}
              onMouseOver={() => revealProjectInfo(id)}
              onMouseOut={hideProjectInfo}
            >
              {loading ? <Loader width={infoIdRevealed === id ? firstCardWidth : cardWidth} height={cardHeight} /> : (
                <div className='previewContainer shadow-radius-10'>
                  <img
                    src={`http://localhost:1337${attributes.image.data[0].attributes.formats.small.url}`}
                    loading='eager'
                    className='projectPreviewImg radius-10'
                  />
                  <div className={infoIdRevealed === id ? 'previewTxt reveal gradient flex-column-around radius-10' : 'previewTxt flex-column-around'}>
                    <div className='previewTxt-top normal-size text-bold text-center'>
                      {attributes.name}
                    </div>
                    <div className='previewTxt-bottom projectThemes flex-center-around flex-wrap'>
                      {attributes.themes.data && attributes.themes.data.map((theme) => (
                        <span key={theme.id} className='small-size'>{theme.attributes.name}</span>
                      ))}
                    </div>
                  </div>
                  {/* {attributes.image.data && attributes.image.data.map((img) => (
                    <div
                      className={infoIdRevealed === id ? 'slide firstSlide radius-10' : 'slide radius-10'}
                      key={img.id}
                      style={{backgroundImage: `url(http://localhost:1337${img.attributes.formats.small.url})`}}
                      onMouseOver={() => revealProjectInfo(img.id)}
                      onMouseOut={hideProjectInfo}
                      >
                    </div>
                  ))} */}
                  {/* <div id={`preview-${id}`}
                    className={infoIdRevealed === id ? 'projectInfo reveal gradient flex-column-around radius-10' : 'projectInfo flex-column-around radius-10'}>
                      <p className='normal-size text-bold text-center'>
                        {attributes.name}
                      </p>
                    <div className='projectThemes flex-center-around flex-wrap'>
                      {attributes.themes.data && attributes.themes.data.map((theme) => (
                        <span key={theme.id} className='small-size'>{theme.attributes.name}</span>
                      ))}
                    </div>
                  </div> */}

                </div>
              )}
            </article>
          ))}
      </section>
  );
}

export default Slider