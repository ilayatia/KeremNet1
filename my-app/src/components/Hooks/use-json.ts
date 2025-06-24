import { useEffect, useState } from "react"
import { PostModel } from "../../Models/Post"

export default function useJson(){
    let [posts, setPosts] = useState<PostModel[]>([])
    
    useEffect(() => {
        fetch("/api/posts")
          .then((response) => response.json())
          .then((json) => setPosts(json))
      }, [])
    
    return {posts}
}