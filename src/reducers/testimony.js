const default_state = [
  {
    avatar: 'https://www.contentshortcuts.com/wp-content/uploads/2015/07/avatarcircle-150x150.png',
    name: 'Herman Starikov',
    title: 'developer',
    description: 'Use react-landing-page for your landing page needs. Or do not, I am not a beggar...',
  },
  {
    avatar: 'http://www.volumepillsbuy.com/wp-content/uploads/2017/12/volume-pills-testimonial-1.png',
    name: 'Jhon Starikov',
    title: 'developer',
    description: 'Use react-landing-page for your landing page needs. Or do not, I am not a beggar...',
  },
];

export default function testimony(state = default_state, action) {
  switch (action.type) {
    case 'BOOSTRAP_TESTIMONY':
      return Object.assign({}, state);
    default:
      return state;
  }
}
