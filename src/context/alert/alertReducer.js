import {
  SET_ALERT,
  REMOVE_ALERT
} from '../types';

export default (state, action) => {
  switch (action.type) {
		case SET_ALERT:
			console.log('reducer(): SET_ALERT:');
			return action.payload;
		case REMOVE_ALERT:
			console.log('reducer(): REMOVE_ALERT:');
			return null;
    default:
      return state;
  }
}
