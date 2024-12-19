import { CREATE_POST } from "./types";

export function createPost(post: IPost){
  return{
    type: CREATE_POST,
    payload: post
  }
}