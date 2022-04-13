import React from 'react';

const CurrentWeather = ({data}) => {
    if(typeof data !== 'undefined' )
    {
        return (<>
            <h3>{data.current.temp_c}°C</h3>
            <h3>{data.location.localtime}</h3>
            <h3>{data.location.name}</h3>
            <h3>{data.current.condition.text}</h3>
            <img src={data.current.condition.icon}/>

            </>  );
    }
    
}
 
export default CurrentWeather;