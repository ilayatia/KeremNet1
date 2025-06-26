import { useEffect, useState } from "react";
import Post from "../../Post/Post";
import { PostModel } from "../../../Models/Post";
import useJson from "../../Hooks/use-json";
import { getPosts } from "../../../backend/api";
import { Link } from "react-router";

export default function PostPage() {
  const posts = useJson("http://localhost:8080/api/post/1");
  return (
    <>
      {posts.map((post, index) => (
        <div key={index}>
          <Post post={post}></Post>
        </div>
      ))}
    </>
  );
}
