import React from 'react';
import Header from '../src/Scenes/Header';
import ToDo from './Components/ToDo';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ToDo />
    </div>
  );
}

export default App;
