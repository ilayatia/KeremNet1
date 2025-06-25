import { useEffect, useState } from "react";
import Post from "../Post/Post";
import './HomePage.css'
import { PostModel } from "../../Models/Post";
import useJson from "../Hooks/use-json";

export default function HomePage(){
    let {posts}= useJson()
    return <>
       {posts.map((post,index)=>{
        return <div key={index}>
        <div  className="margin"></div>
        <Post  post={{comments:post.comments,date:post.date,likes:post.likes,name:post.name,text:post.text}}></Post></div>
       })}
    
    </>
}