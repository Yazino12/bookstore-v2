import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BookStore from './components/BookStore';

function App() {
  return (
    <Router>
      <BookStore />
    </Router>
  );
}

export default App;
