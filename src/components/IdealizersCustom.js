import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Flex, Heading, NavLink } from 'rebass';
import { Contributor } from 'react-landing-page';

const IdealizersCustom = ({ idealizers }) => {
  return (
    <div>
      <Heading mt={20} mb={20} textAlign='center' style={{ color: '#9B9B9B' }}>Idealizadores</Heading>
      <Flex flexWrap='wrap' alignItems='stretch' justifyContent='center'>
        {Object.keys(idealizers).map((key) => (
          <Contributor
            key={idealizers[key].name}
            fullName={idealizers[key].name}
            title={idealizers[key].title}
            avatar={idealizers[key].avatar}
          >
            <Flex>
              <NavLink href={idealizers[key].linked_in}>LinkedIn</NavLink>
            </Flex>
          </Contributor>
        ))}
      </Flex>
    </div>
  )
};

IdealizersCustom.propTypes = {
  idealizers: PropTypes.object.isRequired,
};

export default connect(state => ({ idealizers: state.idealizers }), null)(IdealizersCustom);
