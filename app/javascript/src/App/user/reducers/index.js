import { user } from '../constants/ActionTypes';
const {
  FETCH_ALL_USER,
  DELETE_USER,
  CREATE_USER,
} = user;

const initialState = {
  users: [],
}

export default (state = initialState, action) => {
  switch (action.type){
    case FETCH_ALL_USER:
      return Object.assign({}, state, { users: action.users });
    case DELETE_USER:
      return Object.assign({}, state, {
        users: state.users.filter(user => user.id !== action.user_id )
      })
    case CREATE_USER:
      return Object.assign({}, state, {})
    default:
      return state;
  }
}
