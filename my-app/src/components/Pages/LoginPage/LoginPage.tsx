import { useEffect, useState } from "react";
import Post from "../../Post/Post";
import { PostModel } from "../../../Models/Post";
import useJson from "../../Hooks/use-json";
import { getPosts } from "../../../backend/api";

export default function LoginPage() {
  const {err,loading,posts} = useJson("http://localhost:8080/api/post/1")
  return (
    <div className="div-border">
        <h2>Log in </h2>
      <form>
        <label>
            Name:
            <input type="text" name="username" ></input>
        </label>
        <br />
        <label>
            Password:
            <input type="text" name="passsword"></input>
        </label>
        <br />  
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
