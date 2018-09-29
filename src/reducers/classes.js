const default_state = [
  {
    image: 'https://admdesucesso.files.wordpress.com/2014/08/91f2b47e-f6f4-432c-9a7a-ad63bbe6ad15-1.jpg',
    title: 'Carreira e Gestão',
    description: 'Apoiar as pessoas na sua formação e definição de uma carreira profissional que faça sentido para a sua vida e incorporá-lo ao mercado de trabalho.',
    modulo: [
      {
        title: 'Auto conhecimento',
        description: 'o estágio em que se encontra ...',
      },
      {
        title: 'Características de bons profissionais',
        description: 'Aplicação e-Talent ...',
      },
      {
        title: 'Conhecimentos básicos',
        description: 'Português e Matem. / Intel. Emocional e Postura no trabalho ...',
      },
      {
        title: 'Conhecendo Empresas e seus Negócios',
        description: 'segmentos/estrutura - etc ...',
      },
      {
        title: 'Conceitos de Gestão',
        description: ' Integração de áreas Fluxo Caixa - Ponto Equilíbrio etc ...',
      },
      {
        title: 'Simulação de Implantação Sistema de Gestão',
        description: '(2 etapas). Foco no que foi ensinado nos módulos 4 e 5 ...',
      },
      {
        title: 'Flexível - Certificação em Operação de ERP',
        description: '',
      },
    ],
  },
  {
    image: 'http://redecommunio.com.br/wp-content/uploads/2018/04/Coaching-Website-.jpg',
    title: 'Coaching',
    description: 'Apoiar as pessoas na sua formação e definição de uma carreira profissional que faça sentido para a sua vida e incorporá-lo ao mercado de trabalho.',
    modulo: [
      {
        title: 'Auto conhecimento',
        description: 'o estágio em que se encontra ...',
      },
      {
        title: 'Características de bons profissionais',
        description: 'Aplicação e-Talent ...',
      },
      {
        title: 'Conhecimentos básicos',
        description: 'Português e Matem. / Intel. Emocional e Postura no trabalho ...',
      },
      {
        title: 'Conhecendo Empresas e seus Negócios',
        description: 'segmentos/estrutura - etc ...',
      },
      {
        title: 'Conceitos de Gestão',
        description: ' Integração de áreas Fluxo Caixa - Ponto Equilíbrio etc ...',
      },
      {
        title: 'Simulação de Implantação Sistema de Gestão',
        description: '(2 etapas). Foco no que foi ensinado nos módulos 4 e 5 ...',
      },
      {
        title: 'Flexível - Certificação em Operação de ERP',
        description: '',
      },
    ],
  },
  {
    image: 'http://fasam.edu.br/wp-content/uploads/2017/09/marotona-de-programação-640x380.jpg',
    title: 'Programação Java',
    description: 'Apoiar as pessoas na sua formação e definição de uma carreira profissional que faça sentido para a sua vida e incorporá-lo ao mercado de trabalho.',
    modulo: [
      {
        title: 'Auto conhecimento',
        description: 'o estágio em que se encontra ...',
      },
      {
        title: 'Características de bons profissionais',
        description: 'Aplicação e-Talent ...',
      },
      {
        title: 'Conhecimentos básicos',
        description: 'Português e Matem. / Intel. Emocional e Postura no trabalho ...',
      },
      {
        title: 'Conhecendo Empresas e seus Negócios',
        description: 'segmentos/estrutura - etc ...',
      },
      {
        title: 'Conceitos de Gestão',
        description: ' Integração de áreas Fluxo Caixa - Ponto Equilíbrio etc ...',
      },
      {
        title: 'Simulação de Implantação Sistema de Gestão',
        description: '(2 etapas). Foco no que foi ensinado nos módulos 4 e 5 ...',
      },
      {
        title: 'Flexível - Certificação em Operação de ERP',
        description: '',
      },
    ],
  },
];

export default function curso(state = default_state, action) {
  switch (action.type) {
    case 'BOOSTRAP_CLASSES':
      return Object.assign({}, state, {

      });
    default:
      return state;
  }
}
