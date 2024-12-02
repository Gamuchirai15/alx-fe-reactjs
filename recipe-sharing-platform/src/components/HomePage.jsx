import { useState, useEffect } from "react";
import data from "../data.json"; 
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    
    setRecipes(data);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Recipe Sharing Platform</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="max-w-xs rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
          >
            <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{recipe.title}</h2>
              <p className="text-gray-600 mt-2">{recipe.summary}</p>
              <a
                href={`/recipe/${recipe.id}`}
                className="mt-4 text-blue-500 hover:text-blue-700"
              >
                View Recipe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
