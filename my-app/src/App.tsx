import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Comment from "./components/Comment/Comment";
import Post from "./components/Post/Post";
import HomePage from "./components/HomePage/HomePage";
import { createServer } from "miragejs";
import data from "./backend/data.json";
import { StartServer } from "./backend/start-mock-server";
import Layout from "./components/applicationLayout/Layout/Layout";

StartServer()

function App() {
  return (
    <div className="App">
        <Layout/>
    </div>
  );
}

export default App;
