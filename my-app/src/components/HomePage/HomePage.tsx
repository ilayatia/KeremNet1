import { useEffect, useState } from "react";
import Post from "../Post/Post";
import './HomePage.css'
import { PostModel } from "../../Models/Post";

export default function HomePage(){
    let [posts, setPosts] = useState<PostModel[]>([])

    useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json))
  }, [])

    return <>
       {posts.map(post=>{
        return <>
        <div className="margin"></div>
        <Post post={{comments:post.comments,date:post.date,likes:post.likes,name:post.name,text:post.text}}></Post></>
       })}
    
    </>
}