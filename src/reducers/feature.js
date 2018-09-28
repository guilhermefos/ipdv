const default_state = [
  {
    icon: '👋',
    title: 'Hero',
    description: 'What your users see first',
  },
  {
    icon: '🔥',
    title: 'Features',
    description: 'What your app can do',
  },
  {
    icon: '📩',
    title: 'Sign Up',
    description: 'How to keep in touch',
  },
]

export default function feature(state = default_state, action) {
  switch (action.type) {
    case 'BOOSTRAP_FEATURE':
      return Object.assign({}, state);
    default:
      return state;
  }
}
