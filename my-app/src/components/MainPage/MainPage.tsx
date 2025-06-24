import Comment from '../Comment/Comment';
import Post from '../Post/Post';
import React, { useState, useEffect } from "react"


import {Props,Comm} from '../Models/types'
const MainPage =()=>{
    const [posts, setPosts] = useState<Props[]>([])//save the posts to state

    useEffect(() => {//fetches the data from the server
    fetch("/api/posts")
      .then((response) => response.json())
      .then((json:Props[]) =>{setPosts(json)})
  }, [])

    return <>
     <div className="card">
   <span></span>
            <div className="content">KeremNet</div>
        </div>
    <div>
       {posts.map((post:Props) => (
        <>
        <div className='margin'></div>
        <Post comments={post.comments} likes={post.likes} name={post.name} date={post.date} text={post.text} />
       </>
      ))}
    </div></>
}
export default MainPage

