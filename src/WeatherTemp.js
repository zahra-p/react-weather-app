import React,{useState} from "react";

export default function WeatherTemp(props){
    const [unit, setUnit]=useState("celsius");
    function showFaren(event){
    event.preventDefault();
    setUnit("faren");
    }

function showCelsius(event){
  event.preventDefault();
    setUnit("celsius");
}

function faren(){
    return (props.celsius * 9) / 5 +32;
}

    if (unit=== "celsius")
    {
    return(
        <div className="WeatherTemp">
            <span className="temprature"> 
               {Math.round(props.celsius)}</span>
            <span className="unit">ºc | {" "}<a href="/" onClick={showFaren} >ºF</a></span>
        </div>            
    );

    }else{
        
      return(
          
        <div className="WeatherTemp">
            <span className="temprature"> 
               {Math.round(faren())}</span>
            <span className="unit"><a href="/" onClick={showCelsius} >ºc </a> | {" "} ºF</span>
        </div>            
    );
    }
}