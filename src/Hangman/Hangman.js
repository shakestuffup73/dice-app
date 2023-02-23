import { useState } from "react";
import style from "./Hangman.module.css";
import img0 from './0.jpg'
import img1 from './1.jpg'
import img2 from './2.jpg'
import img3 from './3.jpg'
import img4 from './4.jpg'
import img5 from './5.jpg'
import img6 from './6.jpg'

const Hangman = () => {

  // const [maxWrong, setMaxWrong]= useState(6)
  const images = [img0, img1, img2, img3, img4, img5, img6]

  const [nRight, setNRight] = useState(0)
  const [nWrong, setNWrong] = useState(0)
  const [guessed, setGuessed] = useState(new Set())
  
  const answer = 'apple'
  
  function guessedWord() {
    console.log('this is answer', answer)
    const answerArray = answer.split("")
    const theAnswer = answerArray.map(ltr => (guessed.has(ltr) ? ltr : "_"));
    return theAnswer
  }

  function handleGuess(evt) {
    let ltr = evt.target.value;
    setGuessed(guessed.add(ltr))
    setNWrong(nWrong + (answer.includes(ltr) ? 0 : 1))
    setNRight(nRight + (answer.includes(ltr) ? 1 : 0))
  }

  /** generateButtons: return array of letter buttons to render */
  function generateButtons() {
    const letter = "abcdefghijklmnopqrstuvwxyz".split("").map((ltr, idx) => (
      <button
        value={ltr}
        onClick={handleGuess}
        disabled={guessed.has(ltr)}
        key={idx}
      >
        {ltr}
      </button>
    ));
    return letter
  }

  return (
    <div className={style.Hangman}>
      <h1>Hangman</h1>
      <img src={images[nWrong]} alt='source'/>
      <p className={style.HangmanWord}>{guessedWord()}</p>
      <p className={style.HangmanBtns}>{generateButtons()}</p>
    </div>
  );
}


export default Hangman;
