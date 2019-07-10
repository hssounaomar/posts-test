import { GET_POST } from "../actions/posts";
export default function(state = [], action) {
    switch (action.type) {
        case GET_POST:
            return action.payload.data;
      default:
        return state;
    }
}