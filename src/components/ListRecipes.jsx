import React from 'react'
import Recipes from './Recipes'
import NewRecipeForm from './NewRecipeForm'

function ListRecipes({ data, onDelete, onAddRecipe}) {
  return (
    <div>
      <ul>
        {data.map((recipes)=> 
        <Recipes recipes={recipes} key={recipes.id} onDelete={onDelete} /> )}
      </ul>
    </div>
  )
}

export default ListRecipes