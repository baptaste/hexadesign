import React from 'react'
import './transition.scss'

const Transition = ({ title, text }) => {
  return (
    <div className='transition flex-column'>
      <h1 className='transitionTitle big-size text-bold'>
        {title}
      </h1>
      <p className='transitionText normal-size'>
        {text}
      </p>
    </div>
  );
}

export default Transition;