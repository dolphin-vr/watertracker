import { AddPortionButton, SvgIcon, WaterProgressWrap } from "../../pages/MainPage/MainPage.styled";
import { DailyNorma } from "../DailyNorma/DailyNorma";
import { WaterProgresBar } from "../WaterProgresBar/WaterProgresBar";
import { Wrapper } from "./MainStat.styled";

export const MainStat = ({ onClick }) => {
  return (
    <Wrapper>
      <DailyNorma className="_dailynorma" />
      <WaterProgressWrap className="_progress">
        <WaterProgresBar />
        <AddPortionButton type="button" onClick={() => onClick()}>
          <SvgIcon tag={"add"} />
          Add water
        </AddPortionButton>
      </WaterProgressWrap>
    </Wrapper>
  );
};


          // <MainPageStatistic className="_mainstat">
          //   <DailyNorma className="_dailynorma" />
          //   <WaterProgressWrap className="_progress">
          //     <WaterProgresBar />
          //     <AddPortionButton type="button" onClick={() => onOpenModalWindow()}>
          //       <StyledSvgPlus>
          //         <use href={sprite + "#pluscircle"}>Add water</use>
          //       </StyledSvgPlus>
          //       Add water
          //     </AddPortionButton>
          //   </WaterProgressWrap>
          // </MainPageStatistic>;