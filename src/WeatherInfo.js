import React from "react";
import FormattedDate from "./FormattedDate.js"

export default function WeatherInfo(props){
    return( 
        <div className="WeatherInfo">
        <h1>{props.data.city}</h1>
        <ul>
            <li><FormattedDate date={props.data.date} /></li>
            <li className="text-capitalize">{props.data.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                    <img src={props.data.iconUrl} alt={props.data.description}  />
                </div>
                <div className="col-6"> 
                    <span className="temprature"> {Math.round(props.data.temp)}</span>
                    <span className="unit">ºc</span>
                </div>
               </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 2%</li>
                    <li>Humidity: {props.data.humidity}%</li>
                    <li>Wind: {Math.round(props.data.wind)} km/h</li>
                </ul>
            </div>
        </div>
        </div>
        );
        
}