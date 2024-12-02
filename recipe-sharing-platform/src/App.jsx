// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Importing React Router components
import HomePage from './components/HomePage'; // Importing the HomePage component
import RecipeDetail from './components/RecipeDetail'; // Importing the RecipeDetail component
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <Router> {/* Wrapping the routes with Router to enable routing functionality */}
      <Routes> {/* Defining different routes */}
        <Route path="/" element={<HomePage />} /> {/* HomePage route */}
        <Route path="/recipe/:id" element={<RecipeDetail />} /> {/* RecipeDetail route with dynamic id */}
        <Route path="/addrecipe/:id" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
