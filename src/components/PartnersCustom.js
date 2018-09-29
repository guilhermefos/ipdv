import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Flex } from 'rebass';
import { Section, Contributor } from 'react-landing-page';

const PartnersCustom = ({ partners }) => {
  return (
    <Section
      bg='#CBB728'
      color='#fff'
      heading='Parceiros'
      subhead='Conheça as empresas parceiras do Instituto Projeto de Vida'
    >
      <Flex flexWrap='wrap' alignItems='center' justifyContent='center'>
        {Object.keys(partners).map((key) => (
          <Contributor
            key={partners[key].title}
            ml={10}
            fullName={partners[key].title}
            title={partners[key].description}
            avatar={partners[key].icon}
          >
          </Contributor>
        ))}
      </Flex>
    </Section>
  );
};

PartnersCustom.propTypes = {
  partners: PropTypes.object.isRequired,
};

export default connect(state => ({ partners: state.partners }), null)(PartnersCustom);
