import { useState } from "react";
import Cell from '../Cell/Cell'
import style from './Board.module.css'

const Board = (props) => {

  let ncols = 5
  let nrows = 5
  let chanceLightStartsOn = .25

  const [board, setBoard] = useState(createBoard())
  const [hasWon, setHasWon] = useState(false)

  function createBoard() {
    let board = [];
    // TODO: create array-of-arrays of true/false values
    for (let y = 0; y < nrows; y++) {
      let row = [];
      for (let x = 0; x < ncols; x++) {
        row.push(Math.random() < chanceLightStartsOn);
      }
      board.push(row);
    }
    return board
  }

  
  function flipCellsAroundMe(coord) {
    setBoard(oldBoard => {
      const [y, x] = coord.split('-').map(Number)
      
      const boardCopy = oldBoard.map(row => [...row])

      const flipCell = (y, x, boardCopy) => {
        console.log('this is inside flipCell')
        if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
          console.log('this is boardCopy[y][x]', boardCopy[y][x])
          boardCopy[y][x] = !boardCopy[y][x]
        }
      }
    
      flipCell(y, x, boardCopy); //flip initial cell
      flipCell(y, x - 1, boardCopy); //flip left
      flipCell(y, x + 1, boardCopy); //flip right
      flipCell(y - 1, x, boardCopy); //flip below
      flipCell(y + 1, x, boardCopy); //flip above

      let hasWon = board.every(row => row.every(cell => !cell))
      setHasWon(hasWon)
      return boardCopy
    })
  }
  
  function makeTable() {
    let tblBoard = [];
    for (let y = 0; y < nrows; y++) {
      let row = [];
      for (let x = 0; x < ncols; x++) {
        let coord = `${y}-${x}`;
        row.push(
          <Cell
            key={coord}
            isLit={board[y][x]}
            flipCellsAroundMe={() => flipCellsAroundMe(coord)}
            coord={coord}
          />
        );
      }
      tblBoard.push(<tr key={y}>{row}</tr>);
    }
    console.log('this is table board', tblBoard)
    return (
      <table className={style.Board}>
        <tbody>{tblBoard}</tbody>
      </table>
    )
  }

  return ( 
    <>
      <div>
        {hasWon ? (
          <div className={style.winner}>
            <span className={style.neonOrange}>YOU</span>
            <span className={style.neonBlue}>WIN!</span>
          </div>
        ) : (
          <div>
            <div className={style.BoardTitle}>
              <div className={style.neonOrange}>Lights</div>
              <div className={style.neonBlue}>Out</div>
            </div>
            {makeTable()}
          </div>
        )}
      </div>
    </>
  );
}

export default Board;