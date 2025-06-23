import Comment from './Comment';
import RecipeReviewCard from './Post';
import React, { useState, useEffect } from "react"
import { createServer } from "miragejs"
import A from '../json-server/posts.json' 

createServer({
  routes() {
    this.get("/api/posts", () => [
      { id: "1", name: "Luke" },
      { id: "2", name: "Leia" },
      { id: "3", name: "Anakin" },
    ])
  },
})
interface User{
    id:string,
    name:string
}
const MainPage =()=>{
    const [posts, setPosts] = useState([])

    useEffect(() => {
    fetch("/api/posts")
      .then((response) => response.json())
      .then((json) => setPosts(json))
  }, [])

    return <div>
        <div>{"A"}</div>
        <RecipeReviewCard name="Ilay" date={new Date()} text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum' >
            <Comment name='master shifu' text='i agree'/>
            <Comment name='mother shifa' text='im hungry'/>
       </RecipeReviewCard>
       
       <div className='margin'></div>
        <RecipeReviewCard name="Foo" date={new Date(2006,2,22,22,22)} text='course kerem is the best' >
            <Comment name='master shifu' text='i agree'/>
            <Comment name='TaiLung' text='im hungry'/>
       </RecipeReviewCard>

       <div className='margin'></div>
        <RecipeReviewCard name="Bar" date={new Date()} text='i want שניצל!' >
            <Comment name='Agur' text='i agree'/>
            <Comment name='Monkey' text='im hungry'/>
       </RecipeReviewCard>
        <ul>
       {posts.map((user:User) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>

    </div>
}
export default MainPage

