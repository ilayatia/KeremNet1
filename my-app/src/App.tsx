import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Comment from "./components/Comment/Comment";
import Post from "./components/Post/Post";
import HomePage from "./components/Pages/HomePage/HomePage";
import { createServer } from "miragejs";
import Layout from "./components/applicationLayout/Layout/Layout";
import PostPage from "./components/Pages/PostPage/PostPage";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AddPostPage from "./components/Pages/AddPostPage/AddPostPage";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
      <Layout>
          <Routes>
            <Route path="/post" element={<PostPage />}></Route>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/addpost" element={<AddPostPage />}></Route>
          </Routes>
      </Layout>
        </BrowserRouter>
    </div>
  );
}

export default App;
