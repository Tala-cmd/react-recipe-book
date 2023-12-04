import React, { useState } from 'react'

function Recipes({ recipes }) {
  const [showDescription, setShowDescription] = useState(false)

  return (
    <li className='recipe'>
      <p>{recipes.name}</p>
      <h3>{recipes.ingredients}</h3>

      <div className='container'>
        <button className='button-1' onClick={()=> setShowDescription(!showDescription) }>Description & Recipe</button>
        <button className='button-2'>X</button>
      </div>

    {showDescription && 
      <div className='recipe-description'>
        <img src={recipes.imageName}></img>
        <p>Description:</p>
        <h5>{recipes.description}</h5>

        <p>Recipe:</p>
        <h5>{recipes.recipe}</h5>
      </div>
      }
    </li>
  )
}

export default Recipes