import React from 'react'
import './transition.scss'

const Transition = ({ title, text, leaving }) => {
  return (
    <div className='transition flex-column'
    style={{animation: leaving ? 'transition-Out 2s cubic-bezier(.97,.01,.64,1) forwards' :
    'transition-In 2.5s cubic-bezier(.97,.01,.64,1) forwards'}}>
      {!leaving && (
        <>
        <h1 className='transitionTitle big-size text-bold'>
        {title}
        </h1>
        <p className='transitionText normal-size'>
        {text}
        </p>
        </>
      )}

    </div>
  );
}

export default Transition;