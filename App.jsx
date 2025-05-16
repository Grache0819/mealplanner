
import React, { useState } from 'react';
import IngredientSelector from './components/IngredientSelector';
import RecipeList from './components/RecipeList';
import MealPlanner from './components/MealPlanner';

function App() {
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [planner, setPlanner] = useState({
    Monday: [], Tuesday: [], Wednesday: [],
    Thursday: [], Friday: [], Saturday: [], Sunday: []
  });

  const handleAddToPlanner = (recipe) => {
    const day = prompt("Add to which day? (e.g. Monday)").trim();
    if (planner[day]) {
      setPlanner(prev => ({
        ...prev,
        [day]: [...prev[day], recipe]
      }));
    } else {
      alert("Invalid day!");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-bold text-center">🍽️ Recipe & Meal Planner</h1>
      <IngredientSelector selected={selectedIngredients} setSelected={setSelectedIngredients} />
      <RecipeList selectedIngredients={selectedIngredients} onAddToPlanner={handleAddToPlanner} />
      <MealPlanner planner={planner} />
    </div>
  );
}

export default App;
