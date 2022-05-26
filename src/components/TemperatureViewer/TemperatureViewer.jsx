import { useState, useEffect } from 'react';

const TemperatureViewer = () => {
    const [temp, setTemp] = useState('');

    const city = "Shumen";
    const apiKey = "2d94f7e372d0465eb7272829222605";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`;


    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTemp(data.current.temp_c))
            .catch(err => console.log(err));
    }, []);

    return (
        <>
            <h2>The temperature in {city} is:</h2>
            <h3 className="m-auto text-left">{temp} &#176;</h3>
        </>
    )
}

export default TemperatureViewer;
