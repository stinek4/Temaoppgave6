import React from 'react';
import './App.css';
import Bakbutikk from "./Components/Bakbutikk";
import NyeVarer from "./Components/NyeVarer";

const App = () => {
  
  return (
    <div className="App">
      <NyeVarer />
      <Bakbutikk />
    </div>
  );
  }

export default App;
