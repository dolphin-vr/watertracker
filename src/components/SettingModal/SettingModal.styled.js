import styled from "styled-components";


export const Container = styled.div`
  margin: auto;
  width: 100%;
  padding: 32px 12px;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: 32px 24px;
    background-color: #f2f2f2;
  }

  @media screen and (min-width: 1440px) {
    max-width: 1008px;
    max-height: 592px;
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
  h2 {
    font-size: 26px;
    font-weight: 500;
    font-style: normal;
    line-height: 1.24;
    
  }

  @media screen and (min-width: 768px) {
    h3 {
      font-size: 26px;
      line-height: 1.23;
    }
  }
`;

export const ContainerAvatar = styled.div`
  width: 220px;
  display: flex;
  align-items: center;
  margin-bottom: 24px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 80px;
  height: 80px;
  background: lightgray 50% / cover no-repeat;
`;

export const InputImg = styled.input`
  display: none;
`;

export const LinkImgUpload = styled.span`
  color: #407bff;
  cursor: pointer;
  margin-left: 8px;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

export const TitleH5 = styled.h5`
  margin-bottom: 12px;
  
  font-size: 18px;
  font-weight: 500;
  line-height: 1.12;
`;

// ================== STYLE FORM SETTIHGMODAL================
export const ContainerGender = styled.div`
  display: flex;
`;

export const BoxGender = styled.label``;

export const ContainerBlockSeting = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 24px;
  }
`;

export const ContainerInfoUser = styled.div`
  @media screen and (min-width: 1440px) {
    width: 392px;
  }
`;

export const ContainerChangePass = styled.div`
  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`;

export const LabelInput = styled.label`
  font-size: 18px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const InputStyle = styled.input`
  width: 100%;
  height: 44px;

  border: 1px solid #d7e3ff;
  color: #9ebbff;
  border-radius: 6px;
  margin: 8px 0px 16px 0px;
  font-size: 16px;

  padding: 16px 8px;

  &:active,
  &:focus,
  &:hover {
    color: #407bff;
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 44px;
    /* background-image: url() */
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
    height: 44px;
  }
`;

export const ButtonSubmit = styled.button`
  height: 36px;
  color: #ffffff;
  background-color: #407bff;
  border-radius: 10px;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
  box-shadow: 0 4px 8px rgba(64, 123, 255, 0.34);
  width: 280px;
  height: 36px;
  margin-left: auto;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 160px;
    height: 44px;
  }

  @media screen and (min-width: 1440px) {
    width: 160px;
    height: 44px;
  }
`;