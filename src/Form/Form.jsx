import { useState } from "react";
import ShoppingList from "../ShoppingList/ShoppingList";

const Form = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  function handleChange(evt) {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  function handleSubmit(evt){
    evt.preventDefault()
  }

  return ( 
    <>
      <div>
        <h1>Form Demo</h1>
        <form onSubmit={handleSubmit}>
          <input type='text' name='username' placeholder='name' value={formData.name} onChange={handleChange}/>
          <input type="email" name='email' placeholder='email' value={formData.email} onChange={handleChange}/>
          <input type="password" name='password' placeholder='password' value={formData.password} onChange={handleChange}/>
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default Form;