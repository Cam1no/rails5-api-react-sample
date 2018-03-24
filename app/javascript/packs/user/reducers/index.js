import { user } from '../constants/ActionTypes';
const { FETCH_ALL_USER } = user;

const initialState = {
  users: [],
}

export default (state = initialState, action) => {
  switch (action.type){
    case FETCH_ALL_USER:
      return Object.assign({}, state, { users: action.users });
    default:
      return state;
  }
}
