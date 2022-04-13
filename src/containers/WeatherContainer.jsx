import React, { useEffect, useState } from 'react';
import CurrentWeather from '../components/CurrentWeather';
import FiveDayWeather from '../components/FiveDayWeather';
import Search from '../components/Search';

const WeatherContainer = () => {
   const [weatherData, setWeatherData] = useState();
   
   useEffect(()=>
       {
        let url = "http://api.weatherapi.com/v1/forecast.json?key=a4a6d3815c0644e7ac081805220604&q=stockholm&days=6&aqi=no&alerts=no&lang=sv";
        fetch(url)
    .then(response => response.json())
    .then(data => {
        setWeatherData(data)
    });   
       }
    
   ,[])
    const search =(searchparam)=>{
        let url = "http://api.weatherapi.com/v1/forecast.json?key=a4a6d3815c0644e7ac081805220604&q="+ searchparam + "&days=6&aqi=no&alerts=no&lang=sv";
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setWeatherData(data)
        })
    }
    return (<>
    <Search callback={search}/>
    <CurrentWeather data={weatherData}/>
    <FiveDayWeather data={weatherData}/>
    </>  );
}
 
export default WeatherContainer;