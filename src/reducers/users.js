import { GET_USERS } from "../actions/users";
export default function(state = [], action) {
    switch (action.type) {
        case GET_USERS:
        return  action.payload.data;
      default:
        return state;
    }
}