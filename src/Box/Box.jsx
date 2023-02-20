import React from "react";
import style from './Box.module.css'

const Box = ({ color }) => {
  return ( 
    <>
      <div className={style.Box} style={{ backgroundColor: color }}></div>
    </>
  );
}

export default Box;