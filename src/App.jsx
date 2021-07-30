import { useState, useEffect } from 'react';
import './App.scss';

const App = () => {
  const [city,setcity]=useState(null);
  const [search,setsearch]=useState("Mumbai");
  useEffect(()=>{
    const fetchApi= async()=>{
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=59a20eff3dbd51ec4f8b42e66d5fe05c`;
      const res = await fetch(url);
      const Jres = await res.json();

      setcity(Jres.main);
      console.log(Jres);
    };
    fetchApi();
  },[search])
  return (
    <>
      <div className="main">
        <div className="sub">
            <div className="input_cont">
              <input type="search" className="input" onChange={(event) => {setsearch(event.target.value)}} placeholder="search by city name"/>
            </div>
             
              {!city?(<p>No Data found..</p>):
              (<div className="heading_cont">
                  <h2>{search}</h2>
                  <h2>{city.temp}°C</h2>
                  <h3>Min {city.temp_min}°C | Max {city.temp_max}°C</h3>
              </div>)}
            
          </div>
      </div>
   </>
  );
}
export default App;
