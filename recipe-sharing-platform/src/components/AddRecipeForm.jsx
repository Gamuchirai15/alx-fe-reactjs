import React, { useState } from 'react';

const AddRecipeForm = () => {
  // State for form inputs
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState(''); // Renamed from 'instructions' to 'steps'
  const [error, setError] = useState('');

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    if (!title || !ingredients || !steps) {
      setError('All fields are required');
      return;
    }

    // Simulate adding a new recipe (e.g., send to an API or state)
    const newRecipe = {
      title,
      ingredients: ingredients.split('\n'), // Convert ingredients into an array
      steps, // Using 'steps' for the cooking instructions
    };

    console.log('New Recipe:', newRecipe);

    // Reset the form fields after submission
    setTitle('');
    setIngredients('');
    setSteps('');
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
          <label htmlFor="steps" className="block text-lg font-medium text-gray-700">Cooking Steps</label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="5"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter cooking steps"
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
