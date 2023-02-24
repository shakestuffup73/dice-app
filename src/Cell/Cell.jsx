import './Cell.module.css'

const Cell = (props) => {

  const { isLit, flipCellsAroundMe } = props

  function handleClick(evt) {
    flipCellsAroundMe()
  }

  return ( 
    <>
      <td className={"Cell" + isLit ? " Cell-lit" : ""} onClick={handleClick} />
    </>
  );
}

export default Cell;