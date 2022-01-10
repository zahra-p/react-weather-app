import React from "react";

export default function WeatherTemp(props){
    return(
        <div className="WeatherTemp">
            <span className="temprature"> 
               {Math.round(props.celsius)}</span>
            <span className="unit">ºc </span>
        </div>            
    );
}