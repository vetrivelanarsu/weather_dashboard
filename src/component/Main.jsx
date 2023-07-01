

import React from "react";
import { useState, useEffect } from "react";
import Right from "./Right";
import Left from '../Leftside/Left';
import './Main.css'

export default function Main(){

const [val, setVal]=useState(0)

    return(
        
      <div className="main">
       <Left val={val} setval={setVal} />
       <Right val={val} />
      </div>
        
    )
}