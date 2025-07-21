function PostIt({ nota, onDelete, onToggleImportante }) {
  // Estilo para el PostIt
  // Si la nota es importante, cambia el color de fondo
  // Si no, usa un color más claro
  // Esto se puede hacer con una clase CSS o inline styles
  const estilo = {
    backgroundColor: nota.importante ? '#EC7063' : '#FFFFCC',
  };



  return (
    <div className="postit" style={estilo}>
      <button className="cerrar" onClick={() => onDelete(nota.id)}>x</button>
      <h3>{nota.titulo || 'Sin título'}</h3>
      <p>{nota.descripcion}</p>
      <button className="importante" onClick={() => onToggleImportante(nota.id)}>
        {nota.importante ? 'Quitar Importante' : 'Marcar Importante'}
      </button>
    </div>
  );
}

export default PostIt;
