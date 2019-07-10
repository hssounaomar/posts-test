import { GET_POSTS,GET_POST } from "../actions/posts";
export default function(state = [], action) {
    switch (action.type) {
        case GET_POSTS:
        return  action.payload.data.sort((a,b)=>b.id-a.id);
        case GET_POST:
            return action.payload.data;
      default:
        return state;
    }
}