import React, { useState } from "react";
import Dice from "../Dice/Dice";
import style from './RollDice.module.css'

const RollDice = () => {

  const [die1, setDie1] = useState('one')
  const [die2, setDie2] = useState('one')

  const numbers = ['one', 'two', 'three', 'four', 'five', 'six']

  function rollDice (event) {
    setDie1(numbers[Math.floor(Math.random() * numbers.length)])
    setDie2(numbers[Math.floor(Math.random() * numbers.length)])
  }

  return ( 
    <>
    <div className={style.DiceDiv}>
      <Dice num={die1} />
      <Dice num={die2} />
    </div>
      <button onClick={rollDice}>Roll Dice</button>
    </>
  );
}

export default RollDice;