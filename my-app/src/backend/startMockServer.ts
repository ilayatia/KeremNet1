import { createServer } from "miragejs";
import data from './data.json'
export function StartServer(){
    createServer({
  routes() {
    this.get("/api/posts", () => data.posts);
  },
});
}