import React from 'react';
import PostIt from './PostIt';

function PostItList({ notes, onDelete }) {
  return (
    <div className="postit-list">
      {notes.map((note, index) => (
        <PostIt
          key={index}
          note={note}
          onDelete={() => onDelete(index)}
        />
      ))}
    </div>
  );
}


export default PostItList;