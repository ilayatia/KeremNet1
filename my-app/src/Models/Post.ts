import { CommentModel } from "./Comment"

export interface PostModel{
        name:string
        text:string
        date:string
        likes:number
        comments:CommentModel[]
}