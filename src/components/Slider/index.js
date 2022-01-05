import React from 'react'
import { Link } from 'react-router-dom'
import Loader from 'src/components/Loader'
import './slider.scss'

const Slider = ({
  projects,
  loading,
  infoIdRevealed,
  revealProjectInfo,
  hideProjectInfo,
  allSliderPreviewsRevealed,
  menuOpen,
  filteredProjects,
  getProjectId,
}) => {

  let sliderHeight,
      cardWidth = '20%',
      cardHeight = '400px',
      firstCardWidth = '40%',
      minimalCardsNb = 4;

  function getSliderHeight() {
    if (projects.length > 4) {
      sliderHeight = `${400 * (projects.length / 4) + 230}px`
    } else sliderHeight = `${400 * (projects.length / 4)}px`
    // if (projects.length < 5) sliderHeight = '400px';
    // if (projects.length > 4 && projects.length < 9) sliderHeight = '800px';
    // if (projects.length > 8 && projects.length < 13) sliderHeight = '1200px';
    // if (projects.length > 13) sliderHeight = '1600px';
    return sliderHeight;
  }

  sliderHeight = getSliderHeight();

  return (
      <section className='previewSlider flex-wrap' style={{height: allSliderPreviewsRevealed ? sliderHeight : '400px'}}>
          {projects !== [] && filteredProjects.length === 0 ? (
            projects.map(({ id, attributes }, index) => (
              <Link
                to={`${id}/`} key={id}
                className={infoIdRevealed === id ? 'card firstCard flex-column-between': 'card flex-column-between'}
                style={{width: infoIdRevealed === id ? firstCardWidth : cardWidth, height: cardHeight}}
                // style={{height: cardHeight, gridColumn: infoIdRevealed === id ? '1/span 7' : `${index + 2} / span 1`}}
                // style={{height: cardHeight, gridColumn: getGridColumn(index, id), gridRow: getGridRow(index, id)}}
                onMouseOver={() => revealProjectInfo(id)}
                onMouseOut={hideProjectInfo}
              >
                {loading ? <Loader width={infoIdRevealed === id ? '410px' : '185px'} height='368px' /> : (
                  <div className='previewContainer shadow-radius-10'>
                    <img
                      src={`http://localhost:1337${attributes.image.data[0].attributes.formats.small.url}`}
                      loading='eager'
                      className='projectPreviewImg radius-10'
                    />
                    <div className={!menuOpen && infoIdRevealed === id ? 'previewTxt reveal gradient flex-column-around radius-10' : 'previewTxt flex-column-around'}>
                      <div className='previewTxt-top normal-size text-bold text-center'>
                        {attributes.name}
                      </div>
                      <div className='previewTxt-bottom projectThemes flex-center-around flex-wrap'>
                        {attributes.themes.data && attributes.themes.data.map((theme) => (
                          <span key={theme.id} className='small-size'>{theme.attributes.name}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </Link>
            ))
          ) : (
            filteredProjects.map(({ id, attributes }, index) => (
              <Link
                to={`${id}/`} key={id}
                className={infoIdRevealed === id ? 'card firstCard flex-column-between': 'card flex-column-between'}
                style={{width: infoIdRevealed === id ? firstCardWidth : cardWidth, height: cardHeight}}
                // style={{height: cardHeight, gridColumn: infoIdRevealed === id ? '1/span 7' : `${index + 2} / span 1`}}
                // style={{height: cardHeight, gridColumn: getGridColumn(index, id), gridRow: getGridRow(index, id)}}
                onMouseOver={() => revealProjectInfo(id)}
                onMouseOut={hideProjectInfo}
              >
                {loading ? <Loader width={infoIdRevealed === id ? '410px' : '185px'} height='368px' /> : (
                  <div className='previewContainer shadow-radius-10'>
                    <img
                      src={`http://localhost:1337${attributes.image.data[0].attributes.formats.small.url}`}
                      loading='eager'
                      className='projectPreviewImg radius-10'
                    />
                    <div className={!menuOpen && infoIdRevealed === id ? 'previewTxt reveal gradient flex-column-around radius-10' : 'previewTxt flex-column-around'}>
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
              </Link>
            ))
          )}
          {/* {projects.length % 3 } */}
          <div className='card cardFake flex-column-between' style={{width: cardWidth, height: cardHeight}}></div>
          <div className='card cardFake flex-column-between' style={{width: cardWidth, height: cardHeight}}></div>
          <div className='card cardFake flex-column-between' style={{width: cardWidth, height: cardHeight}}></div>
      </section>
  );
}

export default Slider