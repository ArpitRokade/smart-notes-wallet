import { useState, useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

function NoteList() {
  const { notes, toggleCompleteNote, deleteNote, editNote } = useContext(NotesContext);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditStart = (note) => {
    setEditingId(note.id);
    setEditText(note.text);
  };

  const handleEditSave = (id) => {
    editNote(id, editText);
    setEditingId(null);
    setEditText("");
  };

  const completedCount = notes.filter(n => n.completed).length;

  return (
    <div className="wallet">
      <div className="wallet-back"></div>

      {/* Render Notes as Stacked Wallet Cards */}
      {notes.length === 0 ? (
        <div style={{ position: 'absolute', bottom: '70px', zIndex: 50, textAlign: 'center', width: '100%' }}>
          <span style={{ color: '#839e7b', fontSize: '13px', fontWeight: '500' }}>No notes in wallet. Add one above!</span>
        </div>
      ) : (
        notes.map((note, index) => {
          const isEditing = editingId === note.id;
          // Stacking position calculation from bottom
          const bottomOffset = 40 + (index * 15);

          return (
            <div 
              key={note.id} 
              className={`card ${note.completed ? 'completed-card' : ''}`}
              style={{ bottom: `${Math.min(bottomOffset, 110)}px`, zIndex: 10 + index }}
            >
              <div className="card-inner">
                <div className="card-top">
                  <span>Note #{index + 1}</span>
                  <div className="chip"></div>
                </div>

                <div style={{ margin: '8px 0' }}>
                  {isEditing ? (
                    <input 
                      type="text" 
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className="edit-note-input"
                    />
                  ) : (
                    <div 
                      onClick={() => toggleCompleteNote(note.id)}
                      className={`note-content-text ${note.completed ? 'completed' : ''}`}
                      title={note.text}
                    >
                      {note.text}
                    </div>
                  )}
                </div>

                <div className="card-bottom">
                  <span style={{ fontSize: '10px', opacity: 0.7 }}>
                    {note.completed ? 'Completed' : 'Active'}
                  </span>
                  
                  <div className="card-actions">
                    {isEditing ? (
                      <button onClick={() => handleEditSave(note.id)} className="card-action-btn" style={{ background: '#10b981' }}>Save</button>
                    ) : (
                      <button onClick={() => handleEditStart(note)} className="card-action-btn edit">Edit</button>
                    )}
                    <button onClick={() => deleteNote(note.id)} className="card-action-btn delete">Delete</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}

      {/* Pocket & Live Stats Counter */}
      <div className="pocket">
        <svg className="pocket-svg" viewBox="0 0 280 160" fill="none" style={{ width: '100%', height: '100%' }}>
          <path d="M 0 20 C 0 10, 5 10, 10 10 C 20 10, 25 25, 40 25 L 240 25 C 255 25, 260 10, 270 10 C 275 10, 280 10, 280 20 L 280 120 C 280 155, 260 160, 240 160 L 40 160 C 20 160, 0 155, 0 120 Z" fill="#1e341e"></path>
          <path d="M 8 22 C 8 16, 12 16, 15 16 C 23 16, 27 29, 40 29 L 240 29 C 253 29, 257 16, 265 16 C 268 16, 272 16, 272 22 L 272 120 C 272 150, 255 152, 240 152 L 40 152 C 25 152, 8 152, 8 120 Z" stroke="#3d5635" strokeWidth="1.5" strokeDasharray="6 4"></path>
        </svg>
        <div className="pocket-content">
          <div style={{ position: 'relative', height: '22px', width: '100%' }}>
            <div className="balance-stars">••••••</div>
            <div className="balance-real">{completedCount} / {notes.length} Done</div>
          </div>
          <div style={{ color: '#698263', fontSize: '12px', fontWeight: '500' }}>
            Hover to view & Edit notes 
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoteList;