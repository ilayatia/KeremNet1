import { useEffect, useState } from "react";
import { PostModel } from "../../Models/Post";
import { getPosts } from "../../backend/api";


export default function useJson(url:string): PostModel[] {
  let [posts, setPosts] = useState<PostModel[]>([]);

  useEffect(() => {
    getPosts(url).then((posts)=>{setPosts(posts)})
  }, []);

  return posts ;
}
