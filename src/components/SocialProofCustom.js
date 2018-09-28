import React from 'react';
import { connect } from 'react-redux';
import { Flex } from 'rebass';
import { Section, Testimony } from 'react-landing-page';

const SocialProofCustom = ({ testimony }) => {
  return (
    <div>
      <Section
        bg='white'
        heading='O que as pessoas estão dizendo'
      >
        <Flex flexWrap='wrap' justifyContent='space-between'>
          {Object.keys(testimony).map(key => (
            <Testimony
              key={testimony[key].avatar}
              mb={30}
              ml={10}
              authorAvatar={testimony[key].avatar}
              authorName={testimony[key].name}
              authorTitle={testimony[key].title}
            >
              {testimony[key].description}
            </Testimony>
          ))}
        </Flex>
      </Section>
    </div>
  )
};

export default connect(state => ({ testimony: state.testimony }), null)(SocialProofCustom);
