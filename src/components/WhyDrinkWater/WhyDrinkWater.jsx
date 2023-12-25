import {
  StyledCircle,
  StyledDiv,
  StyledHeader,
  StyledLi,
  StyledParagraph,
  StyledSvg,
  StyledUl,
} from "./WhyDrinkWater.styled";

export const WhyDrinkWater = () => {
  return (
    <div>
      <StyledDiv>
        <StyledHeader>Why drink water</StyledHeader>
        <StyledUl>
          <StyledLi>
            <StyledSvg>
              <StyledCircle cx="4" cy="4" r="4" />
            </StyledSvg>
            <StyledParagraph>Supply of nutrients to all organs</StyledParagraph>
          </StyledLi>
          <StyledLi>
            <StyledSvg>
              <StyledCircle cx="4" cy="4" r="4" />
            </StyledSvg>
            <StyledParagraph>Providing oxygen to the lungs</StyledParagraph>
          </StyledLi>
          <StyledLi>
            <StyledSvg>
              <StyledCircle cx="4" cy="4" r="4" />
            </StyledSvg>
            <StyledParagraph>Maintaining the work of the heart</StyledParagraph>
          </StyledLi>
          <StyledLi>
            <StyledSvg>
              <StyledCircle cx="4" cy="4" r="4" />
            </StyledSvg>
            <StyledParagraph>Release of processed substances</StyledParagraph>
          </StyledLi>
          <StyledLi>
            <StyledSvg>
              <StyledCircle cx="4" cy="4" r="4" />
            </StyledSvg>
            <StyledParagraph>
              Ensuring the stability of the internal environment
            </StyledParagraph>
          </StyledLi>
          <StyledLi>
            <StyledSvg>
              <StyledCircle cx="4" cy="4" r="4" />
            </StyledSvg>
            <StyledParagraph>
              Maintaining within the normal temperature
            </StyledParagraph>
          </StyledLi>
          <StyledLi lastelementli="true">
            <StyledSvg>
              <StyledCircle cx="4" cy="4" r="4" />
            </StyledSvg>
            <StyledParagraph>
              Maintaining an immune system capable of resisting disease
            </StyledParagraph>
          </StyledLi>
        </StyledUl>
      </StyledDiv>
    </div>
  );
};
