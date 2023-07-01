import React from 'react';
import './Slider.css';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import { FaLocationArrow, FaClock,  } from 'react-icons/fa';
import { FaSun, FaCloud, FaCloudSun, FaCloudRain } from 'react-icons/fa'
import { useState } from 'react'

const weatherIcons = {
    Sunny: FaSun,
    Cloudy: FaCloud,
    'Partly Cloudy': FaCloudSun,
    Rainy: FaCloudRain,
  };


const weatherData = [
    {
      time: '12:00 PM',
      temperatureCelsius: 25,
      temperatureFahrenheit: 77,
      humidity: 60,
      wind: 10,
      precipitation: 20,
      uvIndex: 3,
      chanceOfRain: 30,
      weathername:'Sunny',
      id:0,
    },
    {
      time: '1:00 PM',
      temperatureCelsius: 26,
      temperatureFahrenheit: 79,
      humidity: 58,
      wind: 12,
      precipitation: 10,
      uvIndex: 4,
      chanceOfRain: 20,
      weathername:'Cloudy',
      id:0,
    },
    {
      time: '2:00 PM',
      temperatureCelsius: 27,
      temperatureFahrenheit: 81,
      humidity: 55,
      wind: 15,
      precipitation: 5,
      uvIndex: 5,
      chanceOfRain: 10,
      weathername:'Sunny',
      id:1,
    },
    {
      time: '3:00 PM',
      temperatureCelsius: 28,
      temperatureFahrenheit: 82,
      humidity: 54,
      wind: 14,
      precipitation: 0,
      uvIndex: 6,
      chanceOfRain: 5,
      weathername:'Cloudy',
      id:2,
    },
    {
      time: '4:00 PM',
      temperatureCelsius: 29,
      temperatureFahrenheit: 84,
      humidity: 53,
      wind: 13,
      precipitation: 0,
      uvIndex: 7,
      chanceOfRain: 0,
      weathername:'Sunny',
      id: 3,
    },
    {
      time: '5:00 PM',
      temperatureCelsius: 30,
      temperatureFahrenheit: 86,
      humidity: 52,
      wind: 12,
      precipitation: 0,
      uvIndex: 8,
      chanceOfRain: 0,
      weathername:'Rainy',
      id: 4,
    },
    {
      time: '6:00 PM',
      temperatureCelsius: 29,
      temperatureFahrenheit: 84,
      humidity: 54,
      wind: 11,
      precipitation: 0,
      uvIndex: 7,
      chanceOfRain: 0,
      weathername:'Sunny',
      id: 5,
    },
   
  ];

  export default function Slider({ val, setVal }) {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  
    const handleSlideChange = (currentIndex) => {
      setCurrentSlideIndex(currentIndex);
      setVal(weatherData[currentIndex]);
    };
  
    return (
      <div className="slider">
        <div className="outer-text">
          <div className="first-text-div">
            <p>
              <FaLocationArrow />
            </p>
            <span style={{ paddingLeft: '10px' }}>New York, USA</span>
          </div>
          <div className="sec-text-div">
            <p>
              <FaClock />
            </p>
            <span style={{ paddingLeft: '10px', fontSize: '14px' }}>07:19</span>
          </div>
        </div>
  
        {/* Here I Have My Slider */}
        <div className="slider-container">
          <AwesomeSlider
            className="awesome-slider"
            onTransitionEnd={handleSlideChange}
          >
            {weatherData.map((weather) => (
              <div key={weather.time} className="slider-item">
                <div className="weather-card">
                  <div className="icon">{weather.temperatureCelsius}°C</div>
                  <div className="temperature">
                    {React.createElement(weatherIcons[weather.weathername])}
                    {weather.weathername}
                  </div>
                </div>
              </div>
            ))}
          </AwesomeSlider>
        </div>
      </div>
    );
  }