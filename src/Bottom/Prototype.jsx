
import './Prototype.css'



export default function Prototype ({ FaThermometerHalf,bgcolor,progress,height,value}){
    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
        margin: 50,
        border: '1px solid red'
      }
      
      const Childdiv = {
        height: '30%',
        width: `${progress}%`,
        backgroundColor: bgcolor,
       borderRadius:40,
        textAlign: 'right'
      }
      
      const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
      }

    return(
        <div className="griditem">
            <div className='grid-top'>
                <p><b>{value}</b></p>
                <div className='grid-top-div'>
                 <p><FaThermometerHalf/></p>
                </div>
            </div>
            <div className='grid-bottom'>
                <h1></h1>
                <div style={Parentdiv} >
                 <div style={Childdiv}>
                  <span style={progresstext}>{`${progress}%`}</span>
                 </div>
                </div>
            </div>

        </div>
    )
}