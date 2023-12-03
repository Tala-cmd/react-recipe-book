import Header from "./Header"
import ListRecipes from "./ListRecipes"
import DetailedRecipes from "./DetailedRecipes"

const recipes=[
{
  name:'Crispy Chicken Tacos',
  imageName: 'recipes/taco.jpg',
  description: 'Crispy Chicken Tacos - these chicken tacos that are baked to the perfect crispness are definitely a must for your next taco night! Top them any way you want for a quick weeknight dinner!',
  ingredients: 'Chicken Breast Strips, Taco Seasoning, Taco Shells or Tortillas, Toppings and Garnishes'
},
{
  name:'Creamy Tomato Pasta',
  imageName: 'recipes/pasta.jpg',
  description: 'Creamy Tomato Pasta - a quick and easy recipe for making a perfectly creamy tomato pasta! Enjoy by itself or with some added protein. The whole family will enjoy this easy weeknight dinner!',
  ingredients: 'Pasta, Tomato sauce, Heavy cream, Parmesan Cheese'
}, 
{
  name: 'Lasagna Soup', 
  imageName: 'recipes/lasagna-soup.jpg',
  description: 'Lasagna Soup - a quick and easy recipe for making a flavorful homemade lasagna soup! Top it with our ricotta mixture and freshly grated parmesan cheese to bring even more great flavor. The whole family is going to love it!',
  ingredients: 'Ground beef, Lasagna noodles, Tomato sauce and crushed tomatoes, Italian seasonings and herbs'
},
{
  name:'Turkey Breast',
  imageName: 'recipes/turkey-breast.jpg',
  description:`Perfect for a weekend family dinner or if you are hosting a small crowd for Thanksgiving. So juicy, tender, and doesn't require any oven space!`,
  ingredients: 'Turkey breast, Olive oil or butter, Seasonings, Lemon juice'
}
]
function App() {

  return (
    <div>
      Tasty Recipes
      <Header />
      <ListRecipes />
      <DetailedRecipes />
    </div>
  )
}

export default App
