import React from 'react';
import { connect } from 'react-redux';

import { Relative, Absolute, Flex, NavLink } from 'rebass';

const HeaderCustom = ({ header }) => {
  return (
    <Relative pb={5}>
      <Absolute zIndex={1} left={0} right={0} top={0}>
        <Flex is='header' p={3}>
          <NavLink href='/' fontSize={3}>{header.brand}</NavLink>
          <NavLink href='/login' ml='auto'>{header.button}</NavLink>
        </Flex>
      </Absolute>
    </Relative>
  );
};

export default connect(state => ({ header: state.header }), null)(HeaderCustom);
