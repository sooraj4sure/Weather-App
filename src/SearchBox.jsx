import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
function SearchBox({updateInfo}) {
  const [city, setcity] = useState("");
  const [error, seterror] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "227b5540fe79c0f26407a35c7dc11830";

  let getWeatherData = async () => {
    try{
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
    let jsonResponse = await response.json();
    console.log(jsonResponse);

    let result = {
      city: city,
      temp: jsonResponse.main.temp,
      minTemp: jsonResponse.main.temp_min, 
      maxTemp: jsonResponse.main.temp_max,
      humidity: jsonResponse.main.humidity,
      feelsLike: jsonResponse.main.feels_like,
      weather: jsonResponse.weather[0].description,
    };

    console.log(result);
    return result;
    } catch(err){
      throw err;
    }
  };

  let handleChange = (event) => {
    setcity(event.target.value);
  };

  let handleSubmit = async (event) => {
  try {
    console.log(city);
    event.preventDefault();

    setcity("");
   let Newinfo = await getWeatherData();
   updateInfo(Newinfo)
  } catch (err) {
    seterror(true)
  }
  };

  return (
    <div className=" mb-5 flex text-center">
      <form action="" onSubmit={handleSubmit}>
        <h3 className="font-bold text-2xl mb-5">Search City</h3>
        <TextField
          className=""
          id="city"
          label="Search here"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <Button id="btn" variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{color:"red"}}>No such place exists</p> }
      </form>
    </div>
  );
}

export default SearchBox;
