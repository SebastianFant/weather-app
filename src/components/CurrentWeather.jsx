import React from 'react';

const CurrentWeather = ({data}) => {
    return (<>
    <h3>{data.current.temp_c}</h3>
    </>  );
}
 
export default CurrentWeather;