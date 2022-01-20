import React, { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from 'src/containers/Home'
import Nav from 'src/containers/Nav'
import Category from 'src/containers/Category'
import MenuToggler from 'src/containers/MenuToggler'
import Project from 'src/containers/Project'
import About from 'src/containers/About'
import Footer from 'src/components/Footer'
import HomeLink from 'src/containers/HomeLink'
import NavState from 'src/containers/NavState'

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
      <NavState axis='lateral-axis' />
      <MenuToggler />
      <HomeLink />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/category/:id' element={<Category />} />
        <Route exact path='/category/:id/:projectId' element={<Project />} />
        <Route exact path='/category/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;