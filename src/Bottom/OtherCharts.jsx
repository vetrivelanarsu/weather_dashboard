
import './OtherCharts.css'
import Prototype from './Prototype'
import { FaSun, FaCloud, FaCloudSun, FaCloudRain, FaHumidity, FaWind,  FaThermometerHalf } from 'react-icons/fa';

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
  



export default function OtherCharts () {
    const { humidity, temperatureCelsius,wind,precipitation,uvIndex,chanceOfRain}=weatherData[0]


    return (
     <div className='otherchartsdiv'>
       <p style={{marginBottom:'20px'}}><b>More details of today's Weather</b></p>
     
        
        

        
            <div className='gridbody'>
            <Prototype  FaThermometerHalf={ FaThermometerHalf}  bgcolor="#91bced" progress={humidity} value={'Humidity'}  height={10}/>
            <Prototype  FaThermometerHalf={ FaWind }  bgcolor="#91bced" progress={wind} value={'Wind'}  height={10}/>
            <Prototype  FaThermometerHalf={ FaThermometerHalf}  bgcolor="#91bced" progress={temperatureCelsius}  value={'Temperature'} height={10}/>
            
            </div>
         
        
        
          
    
     
     </div>
    )
}