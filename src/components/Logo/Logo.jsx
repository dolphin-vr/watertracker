import { WaterTrackerLogoText, LogoContainer, Nowrap } from './Logo.styled';
import sprite from "../../images/sprite.svg";
    
const Logo = () => {
    return (
        <LogoContainer to="/">
            <svg width="40" height="48">
                <use href={sprite + "#logo"}></use>
            </svg>
            <WaterTrackerLogoText>Tracker <Nowrap>of water</Nowrap></WaterTrackerLogoText>
        </LogoContainer>
    );
};

export default Logo;
