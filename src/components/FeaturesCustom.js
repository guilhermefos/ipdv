import React from 'react';
import { connect } from 'react-redux';

import { Heading, Flex } from 'rebass';
import { Feature } from 'react-landing-page';

const FeaturesCustom = ({ feature }) => {
  return (
    <div>
      <Heading mt={25} textAlign='center' style={{ color: '#9B9B9B' }}>Nossas Frentes</Heading>
      <Flex flexWrap='wrap' alignItems='stretch' justifyContent='center'>
        {Object.keys(feature).map((key) => (
          <Feature
            key={feature[key].icon}
            icon={feature[key].icon}
            description={feature[key].description}
          >
            {feature[key].title}
          </Feature>
        ))}
      </Flex>
    </div>
  );
};

export default connect(state => ({ feature: state.feature }), null)(FeaturesCustom);
