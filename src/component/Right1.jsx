
import './Right1.css'
import NavbarRight1 from './NavbarRight1'
import Chart from '../Chart/LineChart'
import OtherCharts from '../Bottom/OtherCharts'
import { FaSun, FaCloud, FaCloudSun, FaCloudRain, FaHumidity, FaWind, FaTemperature } from 'react-icons/fa';

export default function Right1(){


  return(
    <div className="right1">
       <NavbarRight1 />
       <Chart />
       <OtherCharts />
    </div>
  )

}