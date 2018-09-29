import React from 'react';
import { connect } from 'react-redux';

// components
import HeaderCustom from '../components/HeaderCustom';
import HeroCustom from '../components/HeroCustom';
import FeaturesCustom from '../components/FeaturesCustom';
import SignUpCustom from '../components/SignUpCustom';
import SocialProofCustom from '../components/SocialProofCustom';
import PartnersCustom from '../components/PartnersCustom';
import IdealizersCustom from '../components/IdealizersCustom';
import FooterCustom from '../components/FooterCustom';

const Index = () => {
  return (
    <div>
      <HeaderCustom />
      <HeroCustom />
      <FeaturesCustom />
      <SignUpCustom />
      <SocialProofCustom />
      <PartnersCustom />
      <IdealizersCustom />
      <FooterCustom />
    </div>
  )
};

export default connect(state => ({ state: state.state }))(Index);
