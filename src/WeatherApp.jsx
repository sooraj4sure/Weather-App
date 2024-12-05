import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'

function WeatherApp() {
    const [weatherInfo, setweatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.84,
        humidity: 47,
        maxTemp: 26.05,
        minTemp: 24.55,
        temp: 25.05,
        weather: "haze",
    })

    let updateInfo = (result)=>{
        setweatherInfo(result)

    }
  return (
    <div>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
  )
}

export default WeatherApp