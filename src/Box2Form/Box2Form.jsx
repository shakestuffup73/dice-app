import { useState } from "react"

const Box2Form = (props) => {

  const { createBox } = props

  const [formData, setFormData] = useState({
    height: '',
    width: '',
    color: '',
  })

  function handleChange(evt) {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  function handleSubmit(evt){
    evt.preventDefault()
    createBox(formData)
  }

  return ( 
    <>
      <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Height</label>
          <input 
            type="text"
            name='height'
            value={formData.height}
            onChange={handleChange}
            id='height' 
          />
          <label htmlFor="">Width</label>
          <input 
            type="text"
            name='width'
            value={formData.width}
            onChange={handleChange}
            id='width' 
          />
          <label htmlFor="">Color</label>
          <input 
            type="text"
            name='color'
            value={formData.color}
            onChange={handleChange}
            id='color' 
          />
        </div>
        <button>Add New Box</button>
      </form>
    </>
  );
}

export default Box2Form;