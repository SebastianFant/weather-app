import React from 'react';

const FiveDayWeather = ({data}) => {
    if(typeof data !== 'undefined' )
    {
        for(let i = 0; i < data.forecast.forecastday.length; i++)
        {
            return(<>
                <li>{data.forecast.forecastday[i].date}</li>
                </>)
        }
            
        
        
    }
}
 
export default FiveDayWeather;