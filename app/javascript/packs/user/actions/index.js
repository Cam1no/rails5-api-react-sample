import { user } from '../constants/ActionTypes';

const { FETCH_ALL_USER } = user;

export const fetchUsers = users => {
  return {
    type: FETCH_ALL_USER,
    users: users,
  }
}
