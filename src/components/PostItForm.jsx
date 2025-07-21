import React, { useState } from 'react';

function PostItForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isImportant, setIsImportant] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description.trim()) {
      alert("La descripción es obligatoria.");
      return;
    }

    onAdd({ title, description, isImportant });
    setTitle('');
    setDescription('');
    setIsImportant(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título (opcional)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Descripción *"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <label>
        Importante:
        <input
          type="checkbox"
          checked={isImportant}
          onChange={() => setIsImportant(!isImportant)}
        />
      </label>
      <button type="submit">Agregar</button>
    </form>
  );
}

export default PostItForm;