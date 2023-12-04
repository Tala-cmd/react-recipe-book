import React from 'react'
import Recipes from './Recipes'

function ListRecipes({ data, onDelete }) {
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