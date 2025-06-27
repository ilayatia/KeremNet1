import { useEffect, useState } from "react";
import Post from "../../Post/Post";
import { PostModel } from "../../../Models/Post";
import useJson from "../../Hooks/use-json";
import { getPosts } from "../../../backend/api";
import "./AddPostPage.css";

export default function AddPostPage() {
    const [formData,setFormData] = useState<PostModel>()
  return (
    <div>
      <form>
        <label>
            Name:
            <input type="text" name="name" value={formData?.name}></input>
        </label>
      </form>
    </div>
  );
}
