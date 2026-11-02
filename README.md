# ⚡ Smart Notes Wallet

A modern, sleek, and feature-rich **Smart Notes & Theme Saver** application built with **ReactJS** and inspired by Uiverse wallet card mechanics. It features persistent local storage, global state management via the Context API, dynamic Dark/Light mode switching, and an interactive stacked card UI.

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## ✨ Features

- **Global State Management:** Powered by React's `Context API` (`NotesContext`) for seamless cross-component communication without prop drilling.
- **Data Persistence:** Automatically saves your notes and theme preferences to `localStorage`, ensuring data survives page refreshes.
- **Full CRUD Operations:** 
  - 📝 **Add Notes:** Functional updates (`prev => [...]`) prevent accidental data overwrites.
  - ✅ **Toggle Complete:** Interactive strikethrough using immutable array mapping (`map` & spread operator).
  - ✏️ **Edit Notes:** Inline note modification with instant state reflection.
  - 🗑️ **Delete Notes:** Clean array removal using the `filter` method.
- **Dark & Light Mode:** Fully adaptive CSS variables with dynamic `document.body` attribute toggling.
- **Immersive Wallet UI:** Unique card-stacking animation where notes behave like financial cards inside a wallet pocket, complete with live completion counters.

---

## 📂 Project Structure

```text
smart-notes-wallet/
├── src/
│   ├── components/
│   │   ├── NoteInput.jsx    # Input form for creating new notes
│   │   └── NoteList.jsx     # Wallet-style stacked card list & CRUD actions
│   ├── context/
│   │   └── NotesContext.jsx # Global state, actions, and localStorage sync
│   ├── App.jsx              # Main layout & theme coordination
│   └── App.css              # Modern CSS variables, glassmorphism & animations
├── index.html
└── package.json
