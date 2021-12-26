import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { getCategoryName } from 'src/utils';

import './history.scss'

const History = ({ categories, project }) => {

  const navigate = useNavigate(),
        location = useLocation();

  function goToHome() {
    navigate('/');
    // clearCategory();
    // clearProjects();
  }
  function goBackToCategory() {
    navigate(-1);
    // clearCategory();
    // clearProjects();
  }

  let categoryName = getCategoryName(categoryName, categories, location.pathname);

  return (
    <div className='historyWrapper'>
      <div className='historySelects flex-center-around'>
        <button type='button' className='normal-size button-reset text-bold' onClick={goToHome}>
          Accueil
        </button>
        <i className='fas fa-angle-right pointer' onClick={goToHome} />
        <button type='button' className='normal-size button-reset text-bold' onClick={goBackToCategory}>
          {categoryName}
        </button>
        <i className='fas fa-angle-right pointer' onClick={goBackToCategory} />
        <p className='normal-size text-bold current-page'>{project.attributes.name}</p>
      </div>
    </div>
  );
}

export default History