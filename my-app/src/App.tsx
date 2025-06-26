import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Comment from "./components/Comment/Comment";
import Post from "./components/Post/Post";
import HomePage from "./components/HomePage/HomePage";
import { createServer } from "miragejs";
import Layout from "./components/applicationLayout/Layout/Layout";


function App() {
  return (
    <div className="App">
        <Layout>
          <HomePage/>
        </Layout>
    </div>
  );
}

export default App;
