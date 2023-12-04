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

  return (
    <div>
      <Header />
      <NewRecipeForm />
      <ListRecipes data={recipes} onDelete={handleDelete}/>
    </div>
  )
}

export default App
