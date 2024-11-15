import { useState, useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';
import { useParams, useNavigate } from 'react-router-dom';

const EditRecipeForm = () => {
  const { id } = useParams(); 
  const recipe = useRecipeStore((state) => state.recipes.find((r) => r.id === parseInt(id))); 
  const updateRecipe = useRecipeStore((state) => state.updateRecipe); 
  const navigate = useNavigate(); 
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [cookingTime, setCookingTime] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
      setIngredients(recipe.ingredients.join(', '));
      setCookingTime(recipe.cookingTime);
    }
  }, [recipe]); 

  const handleSubmit = (event) => {
    event.preventDefault(); 

    const updatedRecipe = {
      id: parseInt(id), 
      title,
      description,
      ingredients: ingredients.split(',').map((ingredient) => ingredient.trim()), 
      cookingTime: parseInt(cookingTime), 
    };

    updateRecipe(updatedRecipe);

    navigate('/');
  };

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Recipe Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Recipe Description"
        required
      />
      <input
        type="text"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        placeholder="Ingredients (comma separated)"
        required
      />
      <input
        type="number"
        value={cookingTime}
        onChange={(e) => setCookingTime(e.target.value)}
        placeholder="Cooking Time (minutes)"
        required
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;