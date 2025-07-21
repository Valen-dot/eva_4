import { useState } from 'react';

function FormPostIt({ onAdd }) {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [importante, setImportante] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!descripcion.trim()) {
      alert('La descripción es obligatoria.');
      return;
    }
    onAdd({
      id: Date.now(),
      titulo,
      descripcion,
      importante,
    });
    setTitulo('');
    setDescripcion('');
    setImportante(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Título" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
      <textarea placeholder="Descripción" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      <label>
        <input type="checkbox" checked={importante} onChange={() => setImportante(!importante)} />
        Importante!
      </label>
      <button type="submit">AGREGAR</button>
    </form>
  );
}

export default FormPostIt;