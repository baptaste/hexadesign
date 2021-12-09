
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Header from 'src/components/Header'
import Home from 'src/components/Home'
import Nav from 'src/components/Nav'

const App = () => {
  // test with hooks before redux

  // async function getHexaDatas() {
  //   const datas = await axios.get('http://localhost:1337/api/projects')
  //   return datas
  // }
  // console.log('datas :', getHexaDatas());

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuOpen = () => setMenuOpen(!menuOpen)

  return (
    <BrowserRouter>
    <div className="app">
      <Nav menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen} />
      <Routes>
        <Route exact path='/'
          element={<>
          <Header menuOpen={menuOpen} toggleMenuOpen={toggleMenuOpen} />
          <Home />
          </>}
        />
      </Routes>
    </div>
    </BrowserRouter>
  );
};

export default App;