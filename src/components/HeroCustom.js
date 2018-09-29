import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Flex, Heading, Subhead } from 'rebass';
import { Hero, Phone, CallToAction, ScrollDownIndicator } from 'react-landing-page';

const HeroCustom = ({ hero }) => {
  return (
    <Hero
      color='white'
      bg='black'
      bgOpacity={0.5}
      backgroundImage={hero.background}
    >
      <Flex flexWrap='wrap' alignItems='center'>
        <Flex alignItems='flex-start' width={[1, 1 / 2]} p={3} mb={40}>
          <Phone
            src='https://via.placeholder.com/187x406'
            style={{transform: 'translate(32px, 64px)'}}
          />
          <Phone
            src='https://via.placeholder.com/205x412'
            color='white'
            style={{transform: 'translate(-32px, 0px)'}}
          />
        </Flex>
        <Flex width={[1, 1 / 2]} alignItems='center' flexDirection='column' p={3} >
          <Heading>{hero.title}</Heading>
          <Subhead
            fontSize={[2, 3]}
            textAlign='center'
          >
          {hero.description}
          </Subhead>
          <Flex mt={3} flexWrap='wrap' justifyContent='center' flexDirection='column'>
            <CallToAction bg='#02BDC7' mb={2}> App store</CallToAction>
            <CallToAction bg='#02BDC7'>Google Play</CallToAction>
          </Flex>
        </Flex>
      </Flex>
      <ScrollDownIndicator />
    </Hero>
  );
};

HeroCustom.propTypes = {
  hero: PropTypes.object.isRequired,
};

export default connect(state => ({ hero: state.hero }), null)(HeroCustom);
