// State argument is not application state, only the state
// for which this reducer is responsilble.
export default function (state = null, action) {
  switch(action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }

  return state;
}
