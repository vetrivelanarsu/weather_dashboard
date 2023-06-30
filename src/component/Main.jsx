

import React from "react";
import { useState, useEffect } from "react";
import Right from "./Right";
import Left from "./Left";
import './Main.css'

export default function Main(){



    return(
        
      <div className="main">
       <Left />
       <Right />
      </div>
        
    )
}