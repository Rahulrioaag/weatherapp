import axios from "axios";
import React, { useState } from "react";

export default function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=02a3b8265e676db49293da2bdabab02b`

  const searchLocation= (event)=>{
    if(event.key === 'Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
    }
  }

  return (
    <div className="App">
      <div className="search">
        <input 
        type="text"
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
         />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="tem">
            {data.main ? <h1 className="far">{data.main.temp.toFixed()} ℉ </h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
          {data.weather ? <p className="description1">{data.weather[0].description}</p> : null}

        </div>

        {data.name !== undefined &&
         <div className="bottom">
         <div className="feels">
         {data.main ? <p>{data.main.feels_like}</p> : null}
           <p>Feels like</p>
         </div>
         <div className="humidity">
         {data.main ? <p className="bold">{data.main.humidity}%</p> : null}

           <p>Humidity </p>
         </div>
         <div className="wind">
           {data.wind ? <p>{data.wind.speed.toFixed()} MPH</p> : null}
           <p>Wind speed</p>
         </div>
       </div>
        }
       
      </div>
      
    </div>
  );
}