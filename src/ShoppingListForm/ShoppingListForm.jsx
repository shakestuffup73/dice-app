
const ShoppingListForm = (props) => {

  const { addItem } = props
  
  function handleSubmit(evt){
    evt.preventDefault()
  }

  return ( 
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id='name'
          name='name'
        />  
        <label htmlFor="qty">Quantity:</label>
        <input 
          type="text" 
          id='qty'
          name='qty'
        />
        <button type='submit' onClick={() => addItem}>Submit</button>  
      </form>
    </>
  );
}

export default ShoppingListForm;