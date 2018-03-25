import { user } from '../constants/ActionTypes';

const { FETCH_ALL_USER, DELETE_USER } = user;

export const fetchUsers = users => {
  return {
    type: FETCH_ALL_USER,
    users: users,
  }
}

export const deleteUser = user_id => {
  return {
    type: DELETE_USER,
    user_id: user_id,
  }
}
