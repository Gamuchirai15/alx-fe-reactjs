import React, { useState } from 'react';

const AddRecipeForm = () => {
  // State for form inputs
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  
  // State for errors
  const [errors, setErrors] = useState({});

  // Form validation function
  const validate = () => {
    const validationErrors = {};

    if (!title) validationErrors.title = 'Title is required';
    if (!ingredients) validationErrors.ingredients = 'Ingredients are required';
    if (!steps) validationErrors.steps = 'Steps are required';
    if (ingredients && ingredients.split('\n').length < 2) {
      validationErrors.ingredients = 'At least two ingredients are required';
    }

    return validationErrors;
  };

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors); // Set errors if validation fails
      return;
    }

    // Simulate adding a new recipe (e.g., send to an API or state)
    const newRecipe = {
      title,
      ingredients: ingredients.split('\n'), // Convert ingredients into an array
      steps,
    };

    console.log('New Recipe:', newRecipe);

    // Reset the form fields after submission
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({}); // Reset errors
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4 text-center">Add New Recipe</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Field */}
        <div>
          <label htmlFor="title" className="block text-lg font-medium text-gray-700">Recipe Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full px-4 py-2 border ${errors.title ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter recipe title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients Field */}
        <div>
          <label htmlFor="ingredients" className="block text-lg font-medium text-gray-700">Ingredients</label>
          <textarea
            id="ingredients"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="5"
            className={`w-full px-4 py-2 border ${errors.ingredients ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter ingredients, one per line"
          />
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Steps Field */}
        <div>
          <label htmlFor="steps" className="block text-lg font-medium text-gray-700">Cooking Steps</label>
          <textarea
            id="steps"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="5"
            className={`w-full px-4 py-2 border ${errors.steps ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            placeholder="Enter cooking steps"
          />
          {errors.steps && <p className="text-red-500 text-sm mt-1">{errors.steps}</p>}
        </div>

        {/* Submit Button */}
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
