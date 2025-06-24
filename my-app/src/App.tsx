import React from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './components/Comment';
import RecipeReviewCard from './components/Post';
import MainPage from './components/MainPage';
import { createServer } from "miragejs"
import data from './json-server/posts.json' 
import Post from './components/Post';
createServer({
  routes() {
    this.get("/api/posts", () => data.posts)//create server that will return the data from the json file
  },
})

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
