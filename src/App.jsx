import { useState, useEffect } from 'react'
import './App.css'
import { Link } from 'react-router-dom';
import Nav from './components/Navbar';

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
      <div id='navbar'>
        <Nav />
      </div>
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
          <div id='journal-title'>
            <h1><u>My Album</u></h1>
          </div>
          <div id='journal-content'>

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
      <div className='footer'>
        <div>
          <a href='https://github.com/vichekaoeun/UoftHacks-2024'>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 16 16">
              <path fill="#194fc6" d="M8,0C3.6,0,0,3.6,0,8s3.6,8,8,8s8-3.6,8-8S12.4,0,8,0z"></path><path fill="#a2e4f4" d="M9.984,15.206c0-0.262,0.01-1.125,0.01-2.195c0-0.746-0.256-1.234-0.543-1.482	c1.782-0.198,3.653-0.874,3.653-3.948c0-0.873-0.31-1.587-0.822-2.147c0.082-0.202,0.357-1.016-0.08-2.117	c0,0-0.67-0.215-2.198,0.82C9.364,3.961,8.68,3.872,8,3.869C7.32,3.872,6.636,3.961,5.998,4.138c-1.528-1.035-2.2-0.82-2.2-0.82	C3.362,4.419,3.637,5.233,3.719,5.435C3.208,5.994,2.896,6.708,2.896,7.582c0,3.066,1.867,3.752,3.644,3.954	c-0.229,0.2-0.435,0.552-0.508,1.069c-0.456,0.205-1.615,0.558-2.328-0.665c0,0-0.423-0.768-1.225-0.824c0,0-0.781-0.01-0.055,0.486	c0,0,0.524,0.246,0.888,1.17c0,0,0.47,1.556,2.695,1.072c0.004,0.668,0.011,1.171,0.011,1.361c0,0.209-0.144,0.449-0.531,0.386	C6.277,15.853,7.121,16,8,16c0.88,0,1.724-0.147,2.516-0.41C10.126,15.656,9.984,15.416,9.984,15.206z"></path>
            </svg>
          </a>
        </div>
        <div>
          <a href='https://devpost.com/submit-to/19869-uofthacks-11/manage/submissions'>
            About us
          </a>
        </div>
      </div>
    </div >
  )
}

export default App
