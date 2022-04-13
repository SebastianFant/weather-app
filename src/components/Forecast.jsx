import React from 'react';
import ForecastItem from './ForecastItem';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


const Forecast = ({data}) => {
     if(typeof data !== 'undefined' )
     {
        let days = data.forecast.forecastday;
        let list = days.map(forecastItem => {

            return(<ForecastItem item={forecastItem}  />)
        });
    
        return(<><div class="d-flex justify-content-center"><h2>Vädret de kommande dagarna</h2></div><Container><Row>{list}</Row></Container></>);
    




            
            
       
      
    }
    
}
 
export default Forecast;