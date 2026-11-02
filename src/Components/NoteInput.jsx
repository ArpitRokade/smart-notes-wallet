import { useState, useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

function NoteInput() {
  const [text, setText] = useState("");
  const { addNote } = useContext(NotesContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addNote(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <input 
        type="text" 
        placeholder="What's on your mind?..." 
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="note-input"
      />
      <button type="submit" className="btn-primary">
        Add Note
      </button>
    </form>
  );
}

export default NoteInput;