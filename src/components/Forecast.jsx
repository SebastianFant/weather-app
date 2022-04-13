import React from 'react';
import ForecastItem from './ForecastItem';

const Forecast = ({data}) => {
     if(typeof data !== 'undefined' )
     {
        let days = data.forecast.forecastday;
        let list = days.map(forecastItem => {

            return(<ForecastItem item={forecastItem}  />)
        });
    
        return(<>{list}</>);
    



            /*         let list = []
        for(let i = 0; i < data.forecast.forecastday.length; i++)
        {
            
                list[i].forecast.date = data.forecast.forecastday[i].date;
                list[i].forecast.min = data.forecast.forecastday[i].day.mintemp_c;
                list[i].forecast.max = data.forecast.forecastday[i].day.maxtemp_c;
                list[i].forecast.icon = data.forecast.forecastday[i].day.condition.icon;
                list[i].forecast.text = data.forecast.forecastday[i].day.condition.text;
            
        } */
            
            
       
      
    }
    
}
 
export default Forecast;