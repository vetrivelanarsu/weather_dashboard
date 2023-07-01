import './Left.css';
import NavLeft from './NavLeft';
import Slider from './Slider';

export default function Left({val,setVal}) {

    return(
       <div className="left" >
         <NavLeft />
         <Slider val={val} setVal={setVal} />
       </div> 
    )
}