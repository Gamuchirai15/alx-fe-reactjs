import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((recipe) => recipe.id === recipeId)
  );
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  const toggleFavorite = () => {
    if (favorites.includes(recipe.id)) {
      removeFavorite(recipe.id);
    } else {
      addFavorite(recipe.id);
    }
  };

  if (!recipe) {
    return <p>Recipe not found</p>;
  }

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <button onClick={toggleFavorite}>
        {favorites.includes(recipe.id) ? 'Remove from Favorites' : 'Add to Favorites'}
      </button>
    </div>
  );
};

export default RecipeDetails;