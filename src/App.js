import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Seungyoun from './pages/Seungyoun';
import Jisoo from './pages/Jisoo';
import Gahyeon from './pages/Gahyeon';
import ShoppingHistory from './pages/ShoppingHistory';
import Mypage from './pages/Mypage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/mypage/*" element={<Mypage/>}></Route>
        <Route path="/home/*" element={<Home />}></Route>
        <Route path="/gahyeon/*" element={<Gahyeon />}></Route>
        <Route path="/jisoo/*" element={<Jisoo />}></Route>
        <Route path="/shoppinghistory/*" element={<ShoppingHistory/>}></Route>
        <Route path="/seungyoun/*" element={<Seungyoun />}></Route>
      </Routes>
    </BrowserRouter>
  );
}


/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
