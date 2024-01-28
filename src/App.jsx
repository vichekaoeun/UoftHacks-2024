import { useState, useEffect } from 'react'
import './App.css'
import { Link } from 'react-router-dom';

function App() {

  const [myWeather, setMyWeather] = useState(null);
  const [calendarEvents, setCalendarEvents] = useState([]);

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

  }, []);

  return (
    <div className='container-main'>
      <div id='bar'>
        <div className='bar-text'>
          <h1 id='home'>Home</h1>
        </div>
        <div className='bar-fill'>
          <p>Welcome Back ______________</p>
        </div>
      </div>
      <div className='post-button'>
        <button><Link to='/post'>Create a Post</Link></button>
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
            <h2>Calendar Events</h2>
            <ul>
              {calendarEvents.map((event, index) => (
                <li key={index}>{event.summary}</li>
              ))}
            </ul>
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
    </div >
  )
}

export default App
