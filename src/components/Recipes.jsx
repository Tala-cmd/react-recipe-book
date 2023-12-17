import { useState } from 'react'

function Recipes({ recipes, onDelete }) {
  const [showDescription, setShowDescription] = useState(false)

  function handleDelete(){
    const confirm = window.confirm('Are you sure you want to delete this recipe?');
    confirm && onDelete(recipes.id)
  }

  return (
    <li className='recipe'>
      <p>{recipes.name}</p>
      <h3>{recipes.ingredients}</h3>

      <div className='container'>
        <button className={showDescription ? 'active' : 'button-1'} onClick={()=> setShowDescription(!showDescription) }>Description & Recipe</button>
        <button className='button-2' onClick={()=> handleDelete()}>X</button>
      </div>

    {showDescription && 
      <div className='recipe-description'>
        <img src={recipes.image} alt={recipes.name}></img>
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