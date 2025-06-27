import { useEffect, useState } from "react";
import Post from "../../Post/Post";
import { PostModel } from "../../../Models/Post";
import useJson from "../../Hooks/use-json";
import { addPost, getPosts, postComment } from "../../../backend/api";
import "./AddPostPage.css";

interface PostToPostToServer{
    date:string,
    likes:number,
    name:string,
    text:string
}
export default function AddPostPage() {
    const [formData,setFormData] = useState<PostToPostToServer>({date:"",likes:0,name:"",text:""})
    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }
  function onSubmit(){
    addPost("http://localhost:8080/api/addpost",formData)
}
  return (
    <div className="div-border">
      <form onSubmit={onSubmit}>
        <label>
            Name:
            <input type="text" name="name" value={formData?.name} onChange={handleInputChange}></input>
        </label>
        <br />
        <label>
            Date:
            <input type="text" name="date" value={formData?.date} onChange={handleInputChange}></input>
        </label>
        <br />
        <label>
            Text:
            <input type="text" name="text" value={formData?.text} onChange={handleInputChange}></input>
        </label>
        <br />
        <label>
            Likes:
            <input type="number" name="likes" value={formData?.likes} onChange={handleInputChange}></input>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
