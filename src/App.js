import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Cards from './components/cards'
import AddCard from './components/addCard'
// import {getUser} from './redux/redux/cardSlice';
// import {dumdata} from '../redux/redux/cardSlice'
// import {useSelector} from 'react-redux'
// import { useState } from 'react';

import './App.css';

function App() {
  // const[user,setuser]= useState()

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
