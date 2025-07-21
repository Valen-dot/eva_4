import React, { useState, useEffect } from "react";
import ApiPosts from "./ApiPosts"; 
import "./PostItBoard.css";
import PostItForm from "./PostItForm";

// Componente principal del tablero de post-its

function PostItBoard() {
  const [posts, setPosts] = useState([]);
  
  const handleAdd = (newPost) => {
    setPosts((prev) => [...prev, newPost]);
  };

  // Esta función obtiene una receta aleatoria y la agrega como post-it
  const fetchAndAddPostIt = () => {
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          const meal = data.meals[0];
          const recipe = {
            title: meal.strMeal,
            description: meal.strInstructions,
            isImportant: false
          };
          handleAdd(recipe);
        }
      });
  };
  // Para que agregue un post-it al cargar la página solo una vez
  useEffect(() => {
    fetchAndAddPostIt();
  }, []);

  return (
    <div>
      {/* Este botón ahora sí agrega un nuevo post-it desde la API */}
      <button onClick={fetchAndAddPostIt}>
        Agregar post-it de receta aleatoria
      </button>
      {/* Renderiza los post-its */}
      {posts.map((post, idx) => (
        <div key={idx} className="postit">
          <h3>{post.title}</h3>
          <p>{post.description}</p>
        </div>
      ))}
    </div>
  );
}
export default PostItBoard;