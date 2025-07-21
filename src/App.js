import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [notas, setNotas] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  // Obtener recetas desde TheMealDB al cargar la página
  useEffect(() => {
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      .then((res) => res.json())
      .then((data) => {
        if (data.meals) {
          // Convertimos cada receta en una nota
          const recetas = data.meals.map((meal) => ({
            id: meal.idMeal,
            titulo: meal.strMeal,
            descripcion: meal.strInstructions.substring(0, 100) + '...', // resumen
          }));
          setNotas(recetas);
        } else {
          console.warn("No se encontraron recetas");
        }
      })
      .catch((err) => {
        console.error('Error al obtener recetas:', err);
      });
  }, []);

  //  Agregar nota manual (solo local)
  const agregarNota = (e) => {
    e.preventDefault();

    if (!titulo.trim() || !descripcion.trim()) {
      alert('Por favor completa ambos campos');
      return;
    }

    const nuevaNota = {
      id: Date.now(),
      titulo,
      descripcion,
    };

    setNotas([...notas, nuevaNota]);
    setTitulo('');
    setDescripcion('');
  };

  return (
    <div className="App">
      <h1>Recetas</h1>

      <form onSubmit={agregarNota}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Agregar Nota</button>
      </form>

      <div className="notas-container">
        {notas.map((nota) => (
          <div key={nota.id} className="postit">
            <h3>{nota.titulo}</h3>
            <p>{nota.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

