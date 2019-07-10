import axios from 'axios';
const ROOT_URL = "https://jsonplaceholder.typicode.com/users";
export const GET_USERS ='GET_USERS';
export function getUsers(){
    const request = axios.get(ROOT_URL);
    return {
      type: GET_USERS,
      payload: request
    };
}