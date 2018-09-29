import React from 'react';
import { connect } from 'react-redux';

import { Flex } from 'rebass';

const FooterCustom = () => {
  return (
    <div>
      <Flex justifyContent='center' p={3}>
        <div>© Projeto de Vida - 2018</div>
      </Flex>
    </div>
  );
};

export default connect(state => ({ state: state.state }), null)(FooterCustom);
