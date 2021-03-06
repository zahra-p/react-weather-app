import React from 'react';
import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
      
       <Weather defaultCity="Paris"/>
      <footer>
        This project was coded by{" "}
        <a href="/" target="_blank" >Zahra Adelinia</a>
        {" "}
        and is {" "}
        <a href="https://github.com/zahra-p/react-weather-app"> Open-sourced on GitHub</a>
        and {" "} <a href="https://boring-aryabhata-ec6608.netlify.app/">hosted on Netlify</a> 
                 
      </footer>
      </div>  
    </div>
  );
}

export default App;
