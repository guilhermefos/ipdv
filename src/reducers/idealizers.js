const default_state = [
  {
    name: 'Herman Starikov',
    title: 'developer',
    avatar: 'https://www.contentshortcuts.com/wp-content/uploads/2015/07/avatarcircle-150x150.png',
    linked_in: '#'
  },
  {
    name: 'Herman Starikov',
    title: 'developer',
    avatar: 'https://www.contentshortcuts.com/wp-content/uploads/2015/07/avatarcircle-150x150.png',
    linked_in: '#'
  },
  {
    name: 'Herman Starikov',
    title: 'developer',
    avatar: 'https://www.contentshortcuts.com/wp-content/uploads/2015/07/avatarcircle-150x150.png',
    linked_in: '#'
  },
]

export default function idealizers(state = default_state, action) {
  switch (action.type) {
    case 'BOOSTRAP_IDEALIZERS':
      return Object.assign({}, state);
    default:
      return state;
  }
}
