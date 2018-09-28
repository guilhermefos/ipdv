import React from 'react';
import { connect } from 'react-redux';

import { SignUp, Section } from 'react-landing-page';

const SignUpCustom = ({ state }) => {
  return (
    <div>
      <Section
        bg='lightGray'
        color='black'
        heading='Participe Conosco'
        subhead='Cadastre o email da sua escola para ficar por dentro de todos os nossos cursos e novidades'
      >
        <SignUp onSubmit={(email) => alert(`got email`)} mt={3}/>
      </Section>
    </div>
  )
};

export default connect(state => ({ state: state.state }), null)(SignUpCustom);
