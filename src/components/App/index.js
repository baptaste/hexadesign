
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from 'src/containers/Header'
import Home from 'src/components/Home'
import Nav from 'src/containers/Nav'
import Category from 'src/containers/Category';

const App = ({ getAllCategories, getAllProjects }) => {

  useEffect(() => {
    getAllCategories();
    getAllProjects();
  }, [])

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;