import Header from "./Header"
import ListRecipes from "./ListRecipes"
import DetailedRecipes from "./DetailedRecipes"
import { useState } from "react"

const recipesArray=[
{
  id:1,
  name:'Crispy Chicken Tacos',
  imageName: 'recipes/taco.jpg',
  description: 'Crispy Chicken Tacos - these chicken tacos that are baked to the perfect crispness are definitely a must for your next taco night! Top them any way you want for a quick weeknight dinner!',
  ingredients: 'Chicken Breast Strips, Taco Seasoning, Taco Shells or Tortillas, Toppings and Garnishes.',
  recipe: 'Season chicken, cook until golden, and fill tacos with crunchy goodness. Top with lettuce, tomatoes, cheese, salsa, and a hint of lime. Quick, savory, and satisfying.'

},
{
  id:2,
  name:'Creamy Tomato Pasta',
  imageName: 'recipes/pasta.jpg',
  description: 'Creamy Tomato Pasta - a quick and easy recipe for making a perfectly creamy tomato pasta! Enjoy by itself or with some added protein. The whole family will enjoy this easy weeknight dinner!',
  ingredients: 'Pasta, Tomato sauce, Heavy cream, Parmesan Cheese.',
  recipe: 'Cook al dente pasta, then toss it in a velvety sauce made with tomatoes, cream, garlic, and Parmesan cheese. Finish with a sprinkle of fresh basil for a burst of flavor. '
}, 
{
  id:3,
  name: 'Lasagna Soup', 
  imageName: 'recipes/lasagna-soup.jpg',
  description: 'Lasagna Soup - a quick and easy recipe for making a flavorful homemade lasagna soup! Top it with our ricotta mixture and freshly grated parmesan cheese to bring even more great flavor. The whole family is going to love it!',
  ingredients: 'Ground beef, Lasagna noodles, Tomato sauce and crushed tomatoes, Italian seasonings and herbs.',
  recipe: ' Cook beef with onions, garlic, and Italian spices. Add tomatoes, broth, and broken lasagna noodles. Simmer until noodles are soft, stir in spinach. Serve hot with ricotta and Parmesan.'
},
{
  id:4,
  name:'Turkey Breast',
  imageName: 'recipes/turkey-breast.jpg',
  description:`Perfect for a weekend family dinner or if you are hosting a small crowd for Thanksgiving. So juicy, tender, and doesn't require any oven space!`,
  ingredients: 'Turkey breast, Olive oil or butter, Seasonings, Lemon juice.',
  recipe: 'Rub turkey with a mix of herbs, salt, and pepper. Roast until golden and juices run clear. Rest, then slice.'
}
]
function App() {
  const [recipes, setRecipes] = useState(recipesArray)

  function handleDelete(id){
    setRecipes((recipes)=> recipes
    .filter((recipe)=> recipe.id !== id))
  
  }

  return (
    <div>
      <Header />
      <ListRecipes data={recipes} onDelete={handleDelete}/>
      <DetailedRecipes />
    </div>
  )
}

export default App
