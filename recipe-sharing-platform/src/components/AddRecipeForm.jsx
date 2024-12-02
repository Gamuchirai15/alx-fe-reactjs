import React, { useState } from 'react';

const AddRecipeForm = () => {
  
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !instructions) {
      setError('All fields are required');
      return;
    }

    const newRecipe = {
      title,
      ingredients: ingredients.split('\n'), 
      instructions,
    };

    console.log('New Recipe:', newRecipe);

    setTitle('');
    setIngredients('');
    setInstructions('');
    setError('');
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">Add New Recipe</h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipe title"
          />
        </div>

        <div>
          <label htmlFor="ingredients" className="block text-lg font-medium text-gray-700">Ingredients</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter ingredients, one per line"
          />
        </div>

        <div>
          <label htmlFor="instructions" className="block text-lg font-medium text-gray-700">Cooking Instructions</label>
          <textarea
            id="instructions"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter cooking instructions"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-2 bg-blue-500 text-white rounded-md shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-500 transition-shadow"
          >
            Add Recipe
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddRecipeForm;
