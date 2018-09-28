import React from 'react';
import { connect } from 'react-redux';

// components
import HeaderCustom from '../components/HeaderCustom';
import HeroCustom from '../components/HeroCustom';
import FeaturesCustom from '../components/FeaturesCustom';
import SignUpCustom from '../components/SignUpCustom';
import SocialProofCustom from '../components/SocialProofCustom';

const Index = () => {
  return (
    <div>
      <HeaderCustom />
      <HeroCustom />
      <FeaturesCustom />
      <SignUpCustom />
      <SocialProofCustom />
    </div>
  )
};

export default connect(state => ({ state: state.state }))(Index);
