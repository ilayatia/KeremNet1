export interface Props{
    name:string
    text:string
    date:string
    likes:number
    comments:Comm[]
}
export interface Comm{
    name:string
    text:string
}