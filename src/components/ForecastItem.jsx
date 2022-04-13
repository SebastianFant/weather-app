import React from 'react';
const ForecastItem = ({item}) => {
    return (<div class="col">
        <h3>{item.date}</h3> <p>{item.day.mintemp_c} {item.day.maxtemp_c}</p> {<img src={item.day.condition.icon}/>} <p>{item.day.condition.text}</p>
    </div>  );
}
 
export default ForecastItem;