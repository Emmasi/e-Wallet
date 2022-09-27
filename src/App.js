import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Cards from './components/cards'
import AddCard from './components/addCard'
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';

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
      <footer className='App-footer'><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eu hendrerit turpis. Aliquam vitae fringilla magna. Suspendisse non feugiat orci. Interdum et malesuada </p></footer>

    </div>
    
  );
}

export default App;
