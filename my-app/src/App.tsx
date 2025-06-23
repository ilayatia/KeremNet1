import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './components/Comment';
import RecipeReviewCard from './components/Post';
import MainPage from './components/MainPage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainPage/>
      </header>
    </div>
  );
}

export default App;
