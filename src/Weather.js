import React,{useState} from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate.js"
import "./Weather.css";

export default function Weather(props){
        
    const [weatherData ,setWeatherData]= useState({ready:false});

    function handleResponse(response){
        
        setWeatherData({
            ready:true,
            temp:response.data.main.temp,
            humidity:response.data.main.humidity,
            date:new Date(response.data.dt * 1000),
            description:response.data.weather[0].description,
            iconUrl:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            wind:response.data.wind.speed,
            city:response.data.name
            });
    }

       if(weatherData.ready){
      
        return (<div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
                    <input type="search" placeholder="Enter a city" className="form-control" autoFocus="on" />
                </div>
                <div className="col-3">
                    <input type="submit" value="Search" className="btn btn-primary w-100" /> 
                </div>
            </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
            <li><FormattedDate date={weatherData.date} /></li>
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                    <img src={weatherData.iconUrl} alt={weatherData.description}  />
                </div>
                <div className="col-6"> 
                    <span className="temprature"> {Math.round(weatherData.temp)}</span>
                    <span className="unit">ºc</span>
                </div>
               </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 2%</li>
                    <li>Humidity: {weatherData.humidity}%</li>
                    <li>Wind: {Math.round(weatherData.wind)} km/h</li>
                </ul>
            </div>
        </div>
    </div>
    );


    }else{
       
        let city=props.defaultCity;
        const apiKey="207bd08b168112c4e4ec468910122cee";
        let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        
        axios.get(apiUrl).then(handleResponse);
        return ("Loading...");

    }

    }