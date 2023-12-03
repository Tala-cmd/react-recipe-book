import React from 'react'

function Recipes({ recipes }) {
  return (
    <li className='recipe'>
      <p>{recipes.name}</p>
      <h3>{recipes.ingredients}</h3>
    <div className='container'>

      <button>Description & Recipe</button>
    </div>

      <div className='recipe-description'>
        <img src={recipes.imageName}></img>
        <p>Description:</p>
        <h5>{recipes.description}</h5>

        <p>Recipe:</p>
        <h5>{recipes.recipe}</h5>
      </div>
    </li>
  )
}

export default Recipes