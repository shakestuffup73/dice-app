import style from './Cell.module.css'

const Cell = (props) => {

  const { isLit, flipCellsAroundMe, coord } = props

  function handleClick (){
    console.log('this is coord', coord)
    flipCellsAroundMe()
  }

  return ( 
    <>
      <td className={isLit ? `${style.CellLit}` : `${style.Cell}`} onClick={() => handleClick()}/>
    </>
  );
}

export default Cell;