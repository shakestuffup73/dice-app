import style from './Cell.module.css'

const Cell = (props) => {

  const { isLit, flipCellsAroundMe } = props

  const handleClick = (event) => {
    flipCellsAroundMe(event.target.value)
  }

  return ( 
    <>
      <td className={isLit ? `${style.CellLit}` : `${style.Cell}`} onClick={handleClick}/>
    </>
  );
}

export default Cell;