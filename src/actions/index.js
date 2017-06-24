/**
 * Actions
 */

// Action types
import * as types from './actions';

// Actions
export function selectBook(book) {
  console.log(`A book is selected: ${book.title}`);
  return {
    type: types.BOOK_SELECTED,
    payload: book
  }
}
