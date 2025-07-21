import { useState } from 'react';
import './App.css';
import FormPostIt from './components/FormPostIt';
import PostIt from './components/PostIt';
import ApiPostIt from './components/ApiPostIt';

function App() {
  const [notas, setNotas] = useState([]);

  const agregarNota = (nueva) => {
    setNotas([...notas, nueva]);
  };

  const eliminarNota = (id) => {
    setNotas(notas.map((nota) => nota.id == id ? {... nota,importante:!nota.importante}: nota));
  };

   // Función para marcar una nota como importante
  const alternarimportacia = (id) => {
    setNotas(notas.map((nota) => 
      nota.id === id ? { ...nota, importante: !nota.importante } : nota
    ));
  }
  function onToggleImportante(id) {
    setNotas(notas.map((nota) => nota.id === id ? { ...nota, importante: !nota.importante } : nota
    ));
  }

  return (
    <div className="App">
      <h1>Post It Simulator!</h1>
      <FormPostIt onAdd={agregarNota} />
      <ApiPostIt onAdd={agregarNota} />
      <div className="notas-container">
        {notas.map((nota) => (
          <PostIt key={nota.id}
           nota={nota} 
           onDelete={eliminarNota}
           onToggleImportante={alternarimportacia} />
        ))}
      </div>
    </div>
  );
}

export default App;
