import { useState } from "react";
import Box from "../Box/Box";
import style from './BoxDisplay.module.css'

const BoxDisplay = ({ numBoxes }) => {

  const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'lilac', 'teal', 'pink', 'maroon', 'black']
  
  const [mangos, setMangos] = useState(
    Array.from({length: numBoxes}).map(() => (
      getRandomColor()
    ))
  )
      
  function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)]
  }
      
  function handleClick(boxIdx) {
    const output = [...mangos].map((mango, idx) => {
      let element
      if (idx === boxIdx){
        element = getRandomColor()
      } else {
        element = mango
      }
      return element
    })
    setMangos(output)
  }

  return ( 
    <div className={style.boxContainer}>
      {mangos.map((box, idx)=>(
        <Box key={'box-instance-' + (idx)} handleClick={() => handleClick(idx)} color={box} />
      ))}
    </div>
  );
}

export default BoxDisplay;