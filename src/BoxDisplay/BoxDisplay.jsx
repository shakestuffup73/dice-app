import React, {useState} from "react";
import Box from "../Box/Box";
// import style from './BoxDisplay.module.css'

const BoxDisplay = () => {

  const color = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

  return ( 
    <>
      <Box color={color[0]}/>
    </>
  );
}

export default BoxDisplay;