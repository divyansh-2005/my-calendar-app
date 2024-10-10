import React from 'react';

const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <button
      onClick={toggleDarkMode}
      style={{
        padding: '8px',
        borderRadius: '50%',
        backgroundColor: darkMode ? '#4a5568' : '#edf2f7',
        color: darkMode ? '#ffffff' : '#1a202c',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {darkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;