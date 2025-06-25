import { useEffect, useState } from "react"
import { PostModel } from "../../Models/Post"

interface HookReturnType{
    posts:PostModel[]
}
export default function useJson():HookReturnType{
    let [posts, setPosts] = useState<PostModel[]>([])
    
    useEffect(() => {
        fetch("/api/posts")
          .then((response) => response.json())
          .then((json) => setPosts(json))
      }, [])
    
    return {posts}
}