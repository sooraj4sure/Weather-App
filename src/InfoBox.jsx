import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

function InfoBox({ info }) {
  let COLD_URL =
    "https://images.unsplash.com/photo-1636848500040-d00d8ddc70d9?q=80&w=1859&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let HOT_URL =
    "https://plus.unsplash.com/premium_photo-1661962542692-4fe7a4ad6b54?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHwwfDB8fHww";
  let RAIN_URL =
    "https://plus.unsplash.com/premium_photo-1670002347718-de1091111728?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div className="">
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={
              info.humidity > 70+273.15
                ? RAIN_URL
                : info.temp > 28+273.15
                ? HOT_URL
                : COLD_URL
            }
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} 
              {
              info.humidity > 70
                ? <ThunderstormIcon/>
                : info.temp > 28
                ? <WbSunnyIcon/>
                : <AcUnitIcon/>
            }
            </Typography>
            <Typography
              component="span"
              variant="body2"
              sx={{ color: "text.secondary" }}
            >
              <p>Temprature: {(info.temp - 273).toFixed(2)}&deg;C</p>
              <p>MinTemprature: {(info.minTemp - 273).toFixed(2)}&deg;C</p>
              <p>MaxTemprature: {(info.maxTemp - 273).toFixed(2)}&deg;C</p>
              <p>Humidity: {info.humidity}%</p>
              <p>feelslike: {(info.feelsLike - 273).toFixed(2)}&deg;C</p>
              <p>Weather: {info.weather}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}

export default InfoBox;
