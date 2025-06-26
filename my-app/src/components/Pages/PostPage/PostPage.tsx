import { useEffect, useState } from "react";
import Post from "../../Post/Post";
import { PostModel } from "../../../Models/Post";
import useJson from "../../Hooks/use-json";
import { getPosts } from "../../../backend/api";

export default function PostPage() {
  const {err,loading,posts} = useJson("http://localhost:8080/api/post/1")
  return (
    <>
      {err && <div className="error">{err}</div>}
      {(!loading)?posts.map((post, index) => (
        <div key={index}>
          <Post post={post}></Post>
        </div>
      )):<div className="loading">Loading...</div>}
    </>
  );
}
