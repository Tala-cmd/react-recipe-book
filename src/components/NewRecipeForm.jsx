import React, { useState } from 'react'

function NewRecipeForm() {
  const [form, setForm] = useState(true)

  return (
    <>
    {form ? 
      <div className='container'> 
        <img className='arrow' src='recipes/curved-arrow.svg'></img> 
        <button className='button' onClick={()=> setForm(!form)}>Add a new recipe?</button>
      </div> 
      : 
      <div className='container'>

        <form className='form-add-recipe'> 

          <label>Name of the recipe</label>
          <input type='text'></input>

          <label>Ingredients</label>
          <input type='text'></input>

          <label>Image URL</label>
          <input type='text'></input>

          <label>Description</label>
          <input type='text'></input>

          <label>Recipe</label>
          <input type='text'></input>

          <button className='submit-button'>Submit</button>
        </form>

</div>
    }

    
    </>
  )
}

export default NewRecipeForm