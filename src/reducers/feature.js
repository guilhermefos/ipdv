const default_state = [
  {
    icon: '🚀',
    title: 'Total',
    description: 'Apoiar as pessoas na sua formação e definição de uma carreira profissional que faça sentido para a sua vida e incorporá-lo ao mercado de trabalho.',
  },
  {
    icon: '🎓',
    title: 'Carreira',
    description: 'Apoiar as pessoas na sua formação e definição de uma carreira profissional que faça sentido para a sua vida e incorporá-lo ao mercado de trabalho.',
  },
  {
    icon: '🌟',
    title: 'Transforma',
    description: 'Apoiar as pessoas na sua formação e definição de uma carreira profissional que faça sentido para a sua vida e incorporá-lo ao mercado de trabalho.',
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
