import { useEffect } from 'react';

function ApiPostIt({ onAdd }) {
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
      .then((res) => res.json())
      .then((data) => {
        data.meals?.slice(0, 3).forEach((meal) => {
          onAdd({
            id: `api-${meal.idMeal}`,
            titulo: meal.strMeal,
            descripcion: meal.strInstructions.slice(0, 80) + '...',
            importante: false,
          });
        });
      });
  }, []);

  return null;
}

export default ApiPostIt;

