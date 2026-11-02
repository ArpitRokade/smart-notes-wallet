import { useContext, useEffect } from 'react';
import { NotesProvider, NotesContext } from './context/NotesContext';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
import './App.css';

function AppContent() {
  const { theme, toggleTheme } = useContext(NotesContext);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <div className="app-wrapper">
      <div className="app-container">
        
        <header className="app-header">
          <h1 className="app-title">⚡ Smart Notes Pockets</h1>
          <button onClick={toggleTheme} className="theme-btn">
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
        </header>

        <NoteInput />
        <NoteList />

      </div>
    </div>
  );
}

export default function App() {
  return (
    <NotesProvider>
      <AppContent />
    </NotesProvider>
  );
}