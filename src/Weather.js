import React from "react";
import "./Weather.css";

export default function Weather(){
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
        <h1>New York</h1>
        <ul>
            <li>Wednesday 07:00</li>
            <li>Mostly Cloudy</li>
        </ul>
        <div className="row mt-3">
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                    <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="partly_cloudy"  />
                </div>
                <div className="col-6"> 
                    <span className="temprature"> 6</span>
                    <span className="unit">ºc</span>
                </div>
               </div>
            </div>
            <div className="col-6">
                <ul>
                    <li>Precipitation: 2%</li>
                    <li>Humidity: 77%</li>
                    <li>Wind: 6 km/h</li>
                </ul>
            </div>
        </div>
    </div>
    );
}