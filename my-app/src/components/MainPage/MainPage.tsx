import Comment from '../Comment/Comment';
import Post, { PostProps } from '../Post/Post';
import React, { useState, useEffect } from "react"



const MainPage =()=>{
    const [posts, setPosts] = useState<PostProps[]>([])//save the posts to state

    useEffect(() => {//fetches the data from the server
    fetch("/api/posts")
      .then((response) => response.json())
      .then((json:PostProps[]) =>{setPosts(json)})
  }, [])

    return <>
     <div className="card">
   <span></span>
            <div className="content">KeremNet</div>
        </div>
    <div>
       {posts.map((post:PostProps) => (
        <>
        <div className='margin'></div>
        <Post comments={post.comments} likes={post.likes} name={post.name} date={post.date} text={post.text} />
       </>
      ))}
    </div></>
}
export default MainPage

