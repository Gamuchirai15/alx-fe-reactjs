import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data.json"; 

const RecipeDetail = () => {
  const { id } = useParams(); 
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    
    const foundRecipe = data.find((recipe) => recipe.id === parseInt(id));
    if (foundRecipe) {
      setRecipe(foundRecipe);
    } else {
      
      navigate("/");
    }
  }, [id, navigate]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">{recipe.title}</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-72 object-cover rounded-lg"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-800">Ingredients</h2>
          <ul className="list-disc pl-5 mt-4 text-gray-700">
            {recipe.ingredients?.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <h2 className="text-2xl font-semibold text-gray-800 mt-6">Instructions</h2>
          <ol className="list-decimal pl-5 mt-4 text-gray-700">
            {recipe.instructions?.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
