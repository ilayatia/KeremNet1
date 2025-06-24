import Comment from './Comment';
import RecipeReviewCard from './Post';
import React, { useState, useEffect } from "react"
import { createServer } from "miragejs"
import data from '../json-server/posts.json' 

createServer({
  routes() {
    this.get("/api/posts", () => data.posts)//create server that will return the data from the json file
  },
})
interface Comm{
  name:string,
  text:string
}
interface Post{
    "name":string,
    "date":Date,
    "text":string,
    "comments":Comm[]
}
const MainPage =()=>{
    const [posts, setPosts] = useState([])//save the posts to state

    useEffect(() => {//fetches the data from the server
    fetch("/api/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json))
  }, [])

    return <>
     <div className="card">
   <span></span>
            <div className="content">KeremNet</div>
        </div>
    <div>
       {posts.map((post:Post) => (
        <>
        <div className='margin'></div>
        <RecipeReviewCard name={post.name} date={new Date()} text={post.text} >
            {post.comments.map(comm=><Comment name={comm.name} text ={comm.text}></Comment>)}
       </RecipeReviewCard>
       </>
      ))}
    </div></>
}
export default MainPage

