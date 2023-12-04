import recipesArray from './RecipesArray'
import Header from "./Header"
import ListRecipes from "./ListRecipes"
import NewRecipeForm from "./NewRecipeForm"
import { useState } from "react"

function App() {
  const [recipes, setRecipes] = useState(recipesArray)

  function handleDelete(id){
    setRecipes((recipes)=> recipes
    .filter((recipe)=> recipe.id !== id))
  }

  function handleAddRecipe(recipe){
    setRecipes((recipes)=> [recipe, ...recipes])
  }

  return (
    <div>
      <Header />
      <NewRecipeForm onAddRecipe={handleAddRecipe} />
      <ListRecipes data={recipes} onDelete={handleDelete} />
    </div>
  )
}

export default App
