import { useEffect, useState } from "react";
import Post from "../../Post/Post";
import { PostModel } from "../../../Models/Post";
import useJson from "../../Hooks/use-json";
import { getPosts } from "../../../backend/api";

export default function HomePage() {
  const posts = useJson("http://localhost:8080/api/posts");
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
