import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [myWeather, setMyWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      try {
        const response = await fetch("http://api.weatherapi.com/v1/current.json?key=ae4c4fac8b7e43609bd173829242701&q=toronto");
        const data = await response.json();
        setMyWeather(data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    }
    fetchWeather();
  }, []); // Empty dependency array to ensure the eff

  return (
    <div className='container-main'>
      <div id='bar'>
        <div className='bar-text'>
          <h1 id='home'>Home</h1>
          <p>Welcome Back ____</p>
        </div>
        <div className='bar-fill'></div>
      </div>
      <div className='post-button'>
        <button>Create a Post</button>
      </div>
      <div id='content'>
        <div className='content-item'>
          <div id='calendar-header'>
            <h1>February</h1>
            <div id='calendar-button'>
              <button>
                left
              </button>
              <button>right</button>
            </div>
          </div>
          <div id='calendar'>
          </div>
        </div>
      </div>
      <div id='sidebar'>
        <div className='content-item'>
          {myWeather && myWeather.location && (
            <div id='weather'>
              <h2>Weather</h2>
              <img className='weather-image' src={myWeather.current.condition.icon} alt="Weather Icon" />
              <p>Location: {myWeather.location.name}</p>
              <p>Temperature: {myWeather.current.temp_c}°C</p>
              <p>Condition: {myWeather.current.condition.text}</p>
              <p>Last Updated: {myWeather.current.last_updated}</p>
            </div>
          )}
          <div id='post'>Post</div>
        </div>
      </div>
      <div id='button-container'>
        <div className="button_plus"></div>
      </div>
    </div >
  )
}

export default App
