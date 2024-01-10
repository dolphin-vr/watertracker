import {
  StyledDiv,
  StyledHeader,
  StyledLi,
  StyledParagraph,
  StyledUl,
} from "./WhyDrinkWater.styled";
import sprite from "../../images/sprite.svg";
export const WhyDrinkWater = () => {
  return (
      <StyledDiv>
        <StyledHeader>Why drink water</StyledHeader>
        <StyledUl>
          <StyledLi><svg fill="white" width="8" height="8"><use href={sprite + "#dot"}></use></svg><StyledParagraph>Supply of nutrients to all organs</StyledParagraph></StyledLi>
          <StyledLi><svg fill="white" width="8" height="8"><use href={sprite + "#dot"}></use></svg><StyledParagraph>Providing oxygen to the lungs</StyledParagraph></StyledLi>
          <StyledLi>
          <svg fill="white" width="8" height="8">
            <use href={sprite + "#dot"}></use>
          </svg>
            <StyledParagraph>Maintaining the work of the heart</StyledParagraph>
          </StyledLi>
          <StyledLi>
          <svg fill="white" width="8" height="8">
            <use href={sprite + "#dot"}></use>
          </svg>
            <StyledParagraph>Release of processed substances</StyledParagraph>
          </StyledLi>
          <StyledLi>
          <svg fill="white" width="8" height="8">
            <use href={sprite + "#dot"}></use>
          </svg>
            <StyledParagraph>
              Ensuring the stability of the internal environment
            </StyledParagraph>
          </StyledLi>
          <StyledLi>
          <svg fill="white" width="8" height="8">
            <use href={sprite + "#dot"}></use>
          </svg>
            <StyledParagraph>
              Maintaining within the normal temperature
            </StyledParagraph>
          </StyledLi>
          <StyledLi>
          <svg fill="white" width="8" height="8">
            <use href={sprite + "#dot"}></use>
          </svg>
            <StyledParagraph>
              Maintaining an immune system capable of resisting disease
            </StyledParagraph>
          </StyledLi>
        </StyledUl>
      </StyledDiv>
  );
};
