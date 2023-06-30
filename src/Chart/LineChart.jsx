import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import { FaSun, FaCloud, FaCloudSun, FaCloudRain, FaHumidity, FaWind, FaTemperature } from 'react-icons/fa';

import './LineChart.css';

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
    weathername:'Sunny'
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
    weathername:'Cloudy'
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
    weathername:'Sunny'
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
    weathername:'Cloudy'
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
    weathername:'Sunny'
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
    weathername:'Rainy'
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
    weathername:'Sunny'
  },
 
];

export default function ChartComponent() {
  const [unit, setUnit] = useState('celsius');
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Extracting hours and temperatures based on the selected unit
    const hours = weatherData.map((data) => data.time);
    const temperatures = weatherData.map(
      (data) => (unit === 'celsius' ? data.temperatureCelsius : data.temperatureFahrenheit)
    );

    const data = {
      labels: hours,
      datasets: [
        {
          label: `Temperature (${unit === 'celsius' ? '°C' : '°F'})`,
          data: temperatures,
          fill: false,
          borderColor: 'rgba(75,192,192,1)',
        },
      ],
    };

    setChartData(data);
  }, [unit]);

  const toggleUnit = () => {
    setUnit(unit === 'celsius' ? 'fahrenheit' : 'celsius');
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        type: 'linear',
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="chart">
      <div className="chartdiv">
        <button onClick={toggleUnit} className="button">
          Toggle Unit
        </button>
        <div className="weather-icons">
          {weatherData.map((data) => {
            const Icon = weatherIcons[data.weathername];
            return (
              <div key={data.time}>
                <Icon />
                {/* <span>{data.weathername}</span> */}
              
              </div>
            );
          })}
        </div>
        {chartData && <Line data={chartData} options={options} className="chartdata" />}
        
      </div>
    </div>
  );
}
