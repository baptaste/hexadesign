import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { getCategoryName } from 'src/utils';

import './history.scss'

const History = ({ toggleMenuOpen, goToHome, goBackWithMenu, category, clearProjects, clearCategory, categories }) => {

  const navigate = useNavigate(),
        location = useLocation();

  function goToHome() {
    navigate('/');
    // clearCategory();
    // clearProjects();
  }
  function goBackWithMenu() {
    navigate(-1);
    toggleMenuOpen();
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
        <button type='button' className='normal-size button-reset text-bold' onClick={goBackWithMenu}>
          Menu
        </button>
        <i className='fas fa-angle-right pointer' onClick={goBackWithMenu} />
        <p className='normal-size text-bold current-page'>{categoryName}</p>
      </div>
    </div>
  );
}

export default History