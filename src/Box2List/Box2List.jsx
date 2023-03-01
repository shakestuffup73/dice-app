import { useState } from "react";
import Box2 from "../Box2/Box2";

const Box2List = () => {

  const [boxes, setBoxes] = useState([
    {width: 10, height: 40, color: 'orange'}
  ])

  const allBoxes = boxes.map(box => (
    <Box2
      width={box.width}
      height={box.height}
      color={box.color}
    />
  ))

  return ( 
    <>
      <h1>Color Box Maker</h1>
      {allBoxes}
    </>
  );
}

export default Box2List;