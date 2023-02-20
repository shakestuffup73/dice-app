import React, { useState } from "react";
import Box from "../Box/Box";
// import style from './BoxDisplay.module.css'

const BoxDisplay = () => {

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple']

  return ( 
    <>
      
      <Box colors={colors}/>
      <Box colors={colors}/>
      <Box colors={colors}/>
    </>
  );
}

export default BoxDisplay;