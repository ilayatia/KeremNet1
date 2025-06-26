import { wait } from "@testing-library/user-event/dist/utils";
import { CommentModel } from "../Models/Comment";
import { J } from "react-router/dist/development/register-DCE0tH5m";
import { PostModel } from "../Models/Post";

interface returnType{
    json:PostModel[],
    status:number
}
export const getPosts = async (url: string):Promise<returnType> => {
    // const waiting = await wait(1000)
  const response = await fetch(url);
  const json = await response.json();
  const status:number = response.status
  return {json,status};
};
export const postComment = async (url: string, data: CommentModel):Promise<returnType> => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json =await response.json();
  const status:number = response.status
  return {json,status};
};
