import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Cards from './components/cards'
import AddCard from './components/addCard'
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import getUser from './redux/redux/usersAPI';

import './App.css';

function App() {
  // const dispatch= useDispatch()
  // useEffect (()=> dispatch(getUser()),[]);

  return (
    <div className="App">
      
      <header className="App-header"><h2>Your Wallet</h2>
      </header>

      <Routes>
        <Route path="/" element={<Cards/>} />
        <Route path="/addcard" element={<AddCard />} />
      </Routes>

    </div>
    
  );
}

export default App;
