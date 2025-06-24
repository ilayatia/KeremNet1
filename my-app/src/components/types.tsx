export interface Comm{
  name:string
  text:string
}
export interface Props{
    name:string
    likes:number
    text:string
    date:string
    comments:Comm[]
}
