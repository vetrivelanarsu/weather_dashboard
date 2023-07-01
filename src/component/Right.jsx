
import React from "react";
import './Right.css';
import Right1 from "./Right1";
import { useAccordion } from "@chakra-ui/react";
import { useState, useCallback, useContext, useEffect } from "react";


export default function Right({val}){


    return(
        <div className="right">
            <Right1 val={val}/>
        </div>
    )
}