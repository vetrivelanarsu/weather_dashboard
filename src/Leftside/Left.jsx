import './Left.css';
import NavLeft from './NavLeft';
import Slider from './Slider';

export default function Left() {

    return(
       <div className="left" >
         <NavLeft />
         <Slider />
       </div> 
    )
}