import React from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

const CurrentWeather = ({data}) => {
    if(typeof data !== 'undefined' )
    {
        return (<Container >
            <Row sm="auto" className="justify-content-center" ><h1>Vädret i {data.location.name} just nu</h1></Row>
            
            
            <Row sm="auto" className="justify-content-center" ><h5>{data.location.localtime}</h5></Row>
            <Row sm="auto" className="justify-content-center" ><h2>{data.current.temp_c}°C</h2><Image src={data.current.condition.icon}></Image></Row>
            <Row sm="auto" className="justify-content-center" ><h3>{data.current.condition.text}</h3></Row>
            <Row sm="auto" className="justify-content-center" ></Row>
            
            
            
            </Container>  );
    }
    
}
 
export default CurrentWeather;