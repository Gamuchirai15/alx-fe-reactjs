import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import EditRecipeForm from './components/EditRecipeForm';
import FavoritesList from './components/FavoritesList';
import RecommendationsList from './components/RecommendationsList';
import { useRecipeStore } from './recipeStore';

function App() {
  const setRecipes = useRecipeStore((state) => state.setRecipes);

  useEffect(() => {
    const fetchedRecipes = [
      { id: 1, title: 'Spaghetti Carbonara', description: 'Classic Italian pasta', ingredients: ['spaghetti', 'egg', 'cheese', 'bacon'], cookingTime: 20 },
      { id: 2, title: 'Chicken Curry', description: 'Spicy and delicious curry', ingredients: ['chicken', 'spices', 'rice'], cookingTime: 40 },
      { id: 3, title: 'Pancakes', description: 'Fluffy and sweet pancakes', ingredients: ['flour', 'milk', 'egg', 'syrup'], cookingTime: 15 },
    ];
    setRecipes(fetchedRecipes);
  }, [setRecipes]);

  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <AddRecipeForm />
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route path="/recipe/:id" element={<RecipeDetails />} />
          <Route path="/edit/:id" element={<EditRecipeForm />} />
        </Routes>

        {/* Favorites and Recommendations sections */}
        <FavoritesList />
        <RecommendationsList />
      </div>
    </Router>
  );
}

export default App;