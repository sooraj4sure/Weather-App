import React, { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import { Container, Box } from '@mui/material';

function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Demo",
        feelsLike: 273,
        humidity: 0,
        maxTemp: 273,
        minTemp: 273,
        temp: 273,
        weather: "haze",
    });

    const updateInfo = (result) => {
        setWeatherInfo(result);
    };

    return (
      <>
     
        <Container maxWidth="sm" sx={{ marginTop: 5 }}>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                sx={{ padding: 2, borderRadius: 3, boxShadow: 3, backgroundColor: "grey" }}
            >
                <SearchBox updateInfo={updateInfo} />
                <InfoBox info={weatherInfo} />
            </Box>
        </Container>
      </>
    );
}

export default WeatherApp;
