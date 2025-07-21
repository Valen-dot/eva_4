import React, { useState } from 'react';
import './App.css';

function App() {
  const [notas, setNotas] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');

  const agregarNota = (e) => {
    e.preventDefault();

    if (!titulo.trim() || !descripcion.trim()) {
      alert('Por favor completa ambos campos');
      return;
    }

    const nuevaNota = {
      id: Date.now(), // identificador único
      titulo: titulo,
      descripcion: descripcion,
    };

    setNotas([...notas, nuevaNota]); // agrega la nueva nota
    setTitulo('');
    setDescripcion(''); // limpia el formulario
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

