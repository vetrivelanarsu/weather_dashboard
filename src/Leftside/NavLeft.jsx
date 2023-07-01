import './NavLeft.css'
import {FaPlus} from 'react-icons/fa';

const colour="white"


export default function NavLeft() {

    return(
        <div className="navleft">
         <div className='container-plus'> 
         <div className='center-icon'>
          <FaPlus color={colour} />
        </div>
         </div>
        </div>
    )
}