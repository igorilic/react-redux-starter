import * as types from '../actions/actions';

export default function(state = null, action) {
  switch(action.type) {
    case types.BOOK_SELECTED:
      return action.payload;
    default:
      return state;
  }
}
