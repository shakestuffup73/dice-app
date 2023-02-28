import { useState } from "react";

const ShoppingList = () => {

  const [items, setItems] = useState([
    { name: 'bread', qty: '1 loaf'},
    { name: 'milk', qty: '1 gallon'}
  ])

  function addItem(item){
    setItems([...items, item])
  }

  return ( 
    <>
      <ul>
        {items.map((item, idx) => (
          <li>{item.name}: {item.qty}</li>
        ))}
      </ul>
      <input type="text" />
    </>
  );
}

export default ShoppingList;