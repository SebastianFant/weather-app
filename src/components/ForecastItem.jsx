import React from 'react';
import Col from 'react-bootstrap/Col'

const ForecastItem = ({item}) => {
    return (<Col><div class="border rounded border-dark bg-light">
        <h3 class="text-center">{item.date}</h3> <p class="text-center">Min: {item.day.mintemp_c}°C Max: {item.day.maxtemp_c}°C</p> {<img class="rounded mx-auto d-block" src={item.day.condition.icon}/>} <p class="text-center">{item.day.condition.text}</p>
   </div> </Col>  );
}
 
export default ForecastItem;