import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './components/Comment';
import RecipeReviewCard from './components/Post';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <RecipeReviewCard likes={66} comments={[{name:"master shifu",text:"i agree"},{name:"po",text:"im hungry"}]} name="Ilay" date="127.0.0.1" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' />
      </header>
    </div>
  );
}

export default App;
