import { createContext, useState, useEffect } from 'react';

// 1. Context banaya (Global Wi-Fi tower)
export const NotesContext = createContext();

// 2. Provider Component (Jo poore app ko data supply karega)
export function NotesProvider({ children }) {
  
  // --- THEME STATE WITH LOCALSTORAGE ---
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('app_theme') || 'light';
  });

  useEffect(() => {
    localStorage.setItem('app_theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };


  // --- NOTES STATE WITH LOCALSTORAGE ---
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('app_notes');
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem('app_notes', JSON.stringify(notes));
  }, [notes]);


  // --- NOTES FUNCTIONS (ACTIONS) ---

  // 1. Naya Note Add karna (Overwrite na ho isliye 'prev' ka use!)
  const addNote = (text) => {
    if (!text.trim()) return; // Agar khali text hai toh kuch mat karo
    
    const newNote = {
      id: Date.now(),       // Har note ko ek unique ID di (timestamp se)
      text: text,           // Note ka content
      completed: false,     // Shuru mein note incomplete rahega (strikethrough ke liye)
    };

    setNotes(prev => [newNote, ...prev]); // Purana data safe rakha, naya note aage jod diya!
  };


  // 2. Note ko Complete / Strikethrough toggle karna (map aur spread se)
  const toggleCompleteNote = (id) => {
    setNotes(prev => 
      prev.map(note => 
        note.id === id ? { ...note, completed: !note.completed } : note
      )
    );
  };

  // 4. Note ko Edit karne ka function (map aur spread se)
  const editNote = (id, newText) => {
    if (!newText.trim()) return;
    setNotes(prev =>
      prev.map(note =>
        note.id === id ? { ...note, text: newText } : note
      )
    );
  };


  // 3. Note ko Delete karna (filter ka use karke)
  const deleteNote = (id) => {
    setNotes(prev => prev.filter(note => note.id !== id));
  };


  return (
    <NotesContext.Provider value={{ theme, notes, toggleTheme, addNote, toggleCompleteNote, deleteNote,editNote }}>
      {children}
    </NotesContext.Provider>
  );
}