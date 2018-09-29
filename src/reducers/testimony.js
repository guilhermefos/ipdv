const default_state = [
  {
    avatar: 'https://www.contentshortcuts.com/wp-content/uploads/2015/07/avatarcircle-150x150.png',
    name: 'Ana Júlia',
    title: 'Aluno',
    description: 'Consegui o meu primeiro emprego, após concluir o curso.',
  },
  {
    avatar: 'http://www.volumepillsbuy.com/wp-content/uploads/2017/12/volume-pills-testimonial-1.png',
    name: 'Gabriel',
    title: 'Aluno',
    description: 'Encontrei a carreira perfeita para o meu perfil profissional.',
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
