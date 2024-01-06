import React from 'react';
import { WaterTrackerLogo } from './WaterTrackerLogo';
import { WaterTrackerLogoText, LogoContainer, Nowrap } from './Logo.styled';
    
const Logo = () => {
    return (
        <LogoContainer to="/">
            <WaterTrackerLogo />
            <WaterTrackerLogoText>Tracker <Nowrap>of water</Nowrap></WaterTrackerLogoText>
        </LogoContainer>
    );
};

export default Logo;
