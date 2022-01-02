import React from 'react';
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      
       <Weather defaultCity="Berlin"/>
      <footer>
        This project was coded by{" "}
        <a href="/" target="_blank" >Zahra Adelinia</a>
        {" "}
        and is {" "}
        <a href="https://github.com/zahra-p/react-weather"> Open-sourced on GitHub</a>
      </footer>
      </div>  
    </div>
  );
}

export default App;
