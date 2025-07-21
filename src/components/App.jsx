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
    setNotas(notas.filter((nota) => nota.id !== id));
  };

  return (
    <div className="App">
      <h1>Post It Simulator!</h1>
      <FormPostIt onAdd={agregarNota} />
      <ApiPostIt onAdd={agregarNota} />
      <div className="notas-container">
        {notas.map((nota) => (
          <PostIt key={nota.id} nota={nota} onDelete={eliminarNota} />
        ))}
      </div>
    </div>
  );
}

export default App;
