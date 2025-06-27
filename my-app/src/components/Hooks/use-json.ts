import { useEffect, useState } from "react";
import { PostModel } from "../../Models/Post";
import { getPosts } from "../../backend/api";
import e from "express";
import { error } from "console";

interface returnValue {
  posts: PostModel[];
  err: string;
  loading: boolean;
}
export default function useJson(url: string): returnValue {
  let [posts, setPosts] = useState<PostModel[]>([]);
  const [err, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        const {json,status} = await getPosts(url);
        if (status === 200){
          setPosts(json)
        }
        else{
          setError("Failed to fetch...")
         } 
      } catch (e) {
        console.log(e);
        setError("Failed to fetch...");
      } finally {
          setLoading(false);
      }
    };
    loadPosts();
  }, []);

  return { posts, err, loading };
}
