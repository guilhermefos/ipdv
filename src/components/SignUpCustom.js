import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Heading } from 'rebass';
import { Section, SignUp } from 'react-landing-page';
import { subscribe } from '../actions/chimp';

const SignUpCustom = ({ subscribe }) => {
  return (
    <div>
      <Section
        bg='#02BDC7'
        color='#fff'
        heading='Participe Conosco'
        subhead='Cadastre o email da sua escola para ficar por dentro de todos os nossos cursos e novidades'
      >
      <Heading>Sign up to our Newsletter</Heading>
      <SignUp onSubmit={(email) => subscribe(email)} mt={3}/>
      </Section>
    </div>
  )
};

SignUpCustom.propTypes = {
  subscribe: PropTypes.func.isRequired,
};

export default connect(null, { subscribe })(SignUpCustom);
