import React, {useState} from "react";
import style from './Box.module.css'

const Box = ({ colors }) => {

  let randomColor = colors[Math.floor(Math.random() * colors.length)]
  let newColor = colors[Math.floor(Math.random() * colors.length)]
  
  const [color, setColor] = useState(randomColor)

  function handleClick(e) {
    setColor(newColor)
  }

  return ( 
    <>
      <div onClick={handleClick} className={style.Box} style={{ backgroundColor: color }}></div>
    </>
  );
}

export default Box;