import React from 'react'
import Recipes from './Recipes'

function ListRecipes({ data }) {
  return (
    <div>
      <ul className='food'>
        {data.map((recipes)=> 
        <Recipes recipes={recipes} key={recipes.id} /> )}
      </ul>
      
    </div>
  )
}

export default ListRecipes