import axios from 'axios';
const ROOT_URL = "https://jsonplaceholder.typicode.com/posts";
export const GET_POSTS ='GET_POSTS';
export const GET_POST='GET_POST';
export function getPostById(id){
    const request = axios.get(`${ROOT_URL}/${id}`);
    return {
      type: GET_POST,
      payload: request
    };
}
export function getPosts(){
    const request = axios.get(ROOT_URL);
    return {
      type: GET_POSTS,
      payload: request
    };
}