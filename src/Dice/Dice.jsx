import React, { useState } from "react"; 
import style from './Dice.module.css'

const Dice = ({ num }) => {
  return ( 
    <>
      <div className={style.DiceDiv}>
        <i className={`fas fa-dice-${num}`}></i>
      </div>
    </>
  );
}

export default Dice;