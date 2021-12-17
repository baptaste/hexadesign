import React from 'react'
import { useNavigate } from "react-router-dom";

import './history.scss'

const History = ({ toggleMenuOpen, goToHome, goBackWithMenu, category, clearProjects, clearCategory }) => {

  let navigate = useNavigate();
  function goToHome() {
    navigate('/');
    clearCategory();
    // clearProjects();
  }
  function goBackWithMenu() {
    navigate(-1);
    toggleMenuOpen();
    clearCategory();
    // clearProjects();
  }

  return (
    <div className='historyWrapper'>
      <div className='historySelects flex-center-around'>
        <button type='button' className='normal-size buttonReset text-bold' onClick={goToHome}>
          Accueil
        </button>
        <i className='fas fa-angle-right pointer' onClick={goToHome} />
        <button type='button' className='normal-size buttonReset text-bold' onClick={goBackWithMenu}>
          Menu
        </button>
        <i className='fas fa-angle-right pointer' onClick={goBackWithMenu} />
        <p className='normal-size text-bold'>{category}</p>
      </div>
    </div>
  );
}

export default History