import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import recipeData from '../data.json'; 

const RecipeDetail = () => {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    const selectedRecipe = recipeData.find((item) => item.id === parseInt(id));
    setRecipe(selectedRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="text-center mt-10">
        <p>Recipe not found!</p>
        <button
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded shadow-md hover:shadow-lg transition-shadow"
          onClick={() => navigate('/')}
        >
          Go Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-6">{recipe.title}</h1>
      <div className="mb-8">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg shadow-lg" // Added shadow-lg for the image
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
          <ul className="list-disc pl-5">
            {recipe.ingredients ? (
              recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="text-gray-700">{ingredient}</li>
              ))
            ) : (
              <li>No ingredients listed.</li>
            )}
          </ul>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-2xl font-semibold mb-4">Cooking Instructions</h2>
          <p className="text-gray-700">{recipe.instructions}</p>
        </div>
      </div>
      <div className="text-center mt-8">
        <button
          className="px-6 py-2 bg-blue-500 text-white rounded shadow-md hover:shadow-lg transition-shadow"
          onClick={() => navigate('/')}
        >
          Back to Recipes
        </button>
      </div>
    </div>
  );
};

export default RecipeDetail;
