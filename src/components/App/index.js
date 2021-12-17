import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from 'src/containers/Header'
import Home from 'src/components/Home'
import Nav from 'src/containers/Nav'
import Category from 'src/containers/Category';

const App = ({ getAllCategories, getAllProjects }) => {

  useEffect(() => {
    getAllCategories();
    getAllProjects();
  }, []);

  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  return (
    <div className="app">
      <Nav />
      <Routes>
        <Route exact path='/'
          element={<>
          <Header />
          <Home />
          </>}
        />
        <Route exact path='/category/:id' element={<Category />} />
      </Routes>
    </div>
  );
};

export default App;