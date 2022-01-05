import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from 'src/containers/Header'
import Home from 'src/components/Home'
import Nav from 'src/containers/Nav'
import Category from 'src/containers/Category'
import MenuToggler from 'src/containers/MenuToggler'
import Project from 'src/containers/Project'
import About from 'src/containers/About'

const App = ({ getAllCategories, getAllProjects, getAllThemes, setPrevPath }) => {
  useEffect(() => {
    getAllCategories();
    getAllProjects();
    getAllThemes();
  }, []);

  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
    location.pathname === '/' && setPrevPath(location.pathname);
  }, [location]);

  return (
    <div className="app">
      <Nav />
      <MenuToggler />
      <Routes>
        <Route exact path='/'
          element={<>
          <Header />
          <Home />
          </>}
        />
        <Route exact path='/category/:id' element={<Category />} />
        <Route exact path='/category/:id/:projectId' element={<Project />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
    </div>
  );
};

export default App;