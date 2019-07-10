import axios from 'axios';
const ROOT_URL = "https://jsonplaceholder.typicode.com/comments";
export const GET_COMMENTS ='GET_COMMENTS';
export function getComments(){
    const request = axios.get(ROOT_URL);
    return {
      type: GET_COMMENTS,
      payload: request
    };
}