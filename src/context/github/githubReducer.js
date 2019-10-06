import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING
} from '../types';

export default (state, action) => {
  switch (action.type) {
		case SEARCH_USERS:
			console.log('reducer(): SEARCH_USERS:');
			return {
				...state,
				users: action.payload,
				loading: false
			}
		case GET_USER:
			console.log('reducer(): GET_USER:');
			return {
				...state,
				user: action.payload,
				loading: false
			}
		case CLEAR_USERS:
			console.log('reducer(): CLEAR_USERS:');
			return {
				...state,
				users: [],
				loading: false
			}
		case GET_REPOS:
			console.log('reducer(): GET_REPOS:');
			return {
				...state,
				repos: action.payload,
				loading: false
			}
    case SET_LOADING:
      return {
        ...state,
        loading: true
      }
    default:
      return state;
  }
}
