import { useState } from "react";
import ShoppingItem from "../ShoppingItem/ShoppingItem";
import ShoppingListForm from "../ShoppingListForm/ShoppingListForm";

const ShoppingList = (props) => {

  const [items, setItems] = useState([
    {name: 'banana', qty: 2},
    {name: 'eggs', qty: 1}
  ])

  const addItem = (item) => {
    setItems([...items, item])
  }

  return ( 
    <>
      <div>
        <ShoppingListForm addItem={addItem} />
      </div>
      <ul>
        {items.map((item, idx) => (
          <ShoppingItem key={idx} item={item} />
        ))}
      </ul>
    </>
  );
}

export default ShoppingList;