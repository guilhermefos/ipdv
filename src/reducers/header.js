const default_state = {
  brand: 'Instituto Projeto de Vida',
  button: 'Entrar',
}

export default function header(state = default_state, action) {
  switch (action.type) {
    case 'BOOSTRAP_HEADER':
      return Object.assign({}, state);
    default:
      return state;
  }
}