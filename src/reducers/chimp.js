export default function chimp(state = {}, action) {
  switch (action.type) {
    case 'ADD_SUBSCRIBED':
      return Object.assign({}, state, {
        subscribed: action.subscribed
      });
    default:
      return state;
  }
}
