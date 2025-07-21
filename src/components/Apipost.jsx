import React, { useEffect } from 'react';

function ApiPosts({ onAdd }) {
  useEffect(() => {
    fetch("https://spoonacular.com/food-api/v1/recipes/random?php=")
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }     
        return response;
      })
      
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          const meal = data.meals[0];
          const recipe = {
            title: meal.strMeal,
            description: meal.strInstructions,
            isImportant: false
          };
          onAdd(recipe);
        }
      });
  }, [onAdd]);

  return null;
}

export default ApiPosts;
