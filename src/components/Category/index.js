import React from 'react'
import { useNavigate } from "react-router-dom";
import './category.scss'

const Category = ({ toggleMenuOpen, category, clearCategory }) => {

  let navigate = useNavigate();
  function goToHome() {
    navigate('/');
    clearCategory();
  }
  function goBackWithMenu() {
    navigate(-1);
    toggleMenuOpen();
    clearCategory();
  }

  return (
    <div className='categoryWrapper flex-column-around'>
      <div className='historyWrapper'>
        <div className='historySelects flex-center-around'>
          <button type='button' className='normal-size buttonReset text-bold' onClick={goToHome}>
            Accueil <i className='fas fa-angle-right' />
          </button>
          <button type='button' className='normal-size buttonReset text-bold' onClick={goBackWithMenu}>
            Menu <i className='fas fa-angle-right' />
          </button>
          <p className='normal-size text-bold'>{category}</p>
        </div>
      </div>
      <section className='category'>
          Category Page
      </section>
    </div>
  );
}

export default Category