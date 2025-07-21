function PostIt({ nota, onDelete }) {
  const estilo = {
    backgroundColor: nota.importante ? '#EC7063' : '#FFFFCC',
  };

  return (
    <div className="postit" style={estilo}>
      <button className="cerrar" onClick={() => onDelete(nota.id)}>x</button>
      <h3>{nota.titulo || 'Sin título'}</h3>
      <p>{nota.descripcion}</p>
    </div>
  );
}

export default PostIt;
