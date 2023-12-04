import React, { useState } from 'react'

function NewRecipeForm({ onAddRecipe }) {
  const [form, setForm] = useState(true)
  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [image, setImage] = useState('https://i.guim.co.uk/img/media/59325b8ff9759234a6dc5ed7444d2231253732a3/0_198_6601_3961/master/6601.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=0443b68376524d100492ed42c94b492d')
  const [description, setDescription] = useState('')
  const [recipe, setRecipe] = useState('')

function handleSubmit(e){
  e.preventDefault();
  const id= crypto.randomUUID();

  const newRecipe={
    id,
    name,
    image,
    ingredients, 
    description,
    recipe
  }
  onAddRecipe(newRecipe)

  setName('');
  setIngredients('');
  setDescription('');
  setRecipe('');
  setForm(true);
}

  return (
    <>
    {form ? 
      <div className='container'> 
        <img className='arrow' src='recipes/curved-arrow.svg'></img> 
        <button className='button' onClick={()=> setForm(!form)}>Add a new recipe?</button>
      </div> 
      : 
        <form className='form-add-recipe' onSubmit={handleSubmit}> 

          <label>Name of the recipe</label>
          <input type='text' value={name} onChange={(e)=> setName(e.target.value)} required></input>

          <label>Ingredients</label>
          <input type='text' value={ingredients} onChange={((e)=> setIngredients(e.target.value))} required></input>

          <label>Image URL</label>
          <input type='text' value={image} onChange={(e)=> setImage(e.target.value)} required></input>
          
          <label>Description</label>
          <input type='text' className='recipe-description-input' required
          value={description} onChange={((e)=> setDescription(e.target.value))}></input>

          <label>Recipe</label>
          <input type='text' className='recipe-description-input'required
          value={recipe} onChange={((e)=> setRecipe(e.target.value))}></input>

          <button className='submit-button' onClick={() => setForm(true)}>Submit</button>
        </form>
    }
    </>
  )
}

export default NewRecipeForm