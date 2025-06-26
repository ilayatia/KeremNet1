import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Comment from "./components/Comment/Comment";
import Post from "./components/Post/Post";
import HomePage from "./components/Pages/HomePage/HomePage";
import { createServer } from "miragejs";
import Layout from "./components/applicationLayout/Layout/Layout";
import PostPage from "./components/Pages/PostPage/PostPage";
import { BrowserRouter, Route, Routes } from "react-router";


function App() {
  return (
    <div className="App">
      <Layout>
      <BrowserRouter>
      <Routes>
        <Route path="/post" element={<PostPage/>} ></Route>
        <Route path="/" element={<PostPage/>} ></Route>
      </Routes>
      </BrowserRouter>
      </Layout>
    </div>
  );
}

export default App;
