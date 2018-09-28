const default_state = {
  background: 'https://source.unsplash.com/weekly?study/1600x900',
  title: 'Aplicativo Projeto de Vida',
  description: 'Inscreva-se nos melhores cursos preparatorios para o mercado de trabalho'
}

export default function hero(state = default_state, action) {
  switch (action.type) {
    case 'BOOSTRAP_HERO':
      return Object.assign({}, state);
    default:
      return state;
  }
}
