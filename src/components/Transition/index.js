import React from 'react'
import './transition.scss'
import wood from 'src/assets/wood-icon-light.png'

const Transition = ({ type, title, text, content, leaving }) => {

  let animDuration;

  function setAnimDuration() {
    if (type === 'lateral') animDuration = '2s';
    if (type === 'vertical') animDuration = '1.5s';
  }

  setAnimDuration();

  return (
    <>
    {type === 'lateral' && (
      <div className={`transition ${type} flex-column`}
      style={{animation: leaving ? `lateral-Out ${animDuration} cubic-bezier(.97,.01,.64,1) forwards` :
      `lateral-In ${animDuration} cubic-bezier(.97,.01,.64,1) forwards`}}>
        {!leaving && (
          <>
          <div className='top'>
            <h1 className='transitionTitle big-size text-bold'>
            {title}
            </h1>
            <p className='transitionText normal-size'>
            {text}
            </p>
          </div>
          <div className='bottom'>
          {content.map(({ attributes, id }) => (
            <div className='material flex' key={id}>
                <img src={wood} className='materialIcon' />
                <p className='normal-size'>{attributes.name}</p>
            </div>
            ))}
          </div>
          </>
        )}
      </div>
    )}

    {type === 'vertical' && (
      <div className={`transition ${type} flex-column`}
      style={{animation: `vertical-In ${animDuration} cubic-bezier(.92,0,.49,.72) forwards`}}>
      </div>
    )}
    </>
  );
}

export default Transition;