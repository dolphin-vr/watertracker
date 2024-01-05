import styled from "styled-components";

export const StyledModal = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 10px;
  width: 592px;
  height: 504px;
  padding: 32px 24px;
`;
export const StyledOverlay = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8);
`;

export const BtnClose = styled.button`
  background-color: transparent;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  position: absolute;
  top: 32px;
  right: 24px;
`;

export const Title = styled.h2`
  margin: 0;
  margin-bottom: 24px;
`;

export const Text = styled.p`
  margin: 0;
  margin-bottom: 16px;
`;

export const WrapCounter = styled.div`
  display: flex;
  gap: 7px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
export const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 30px;
  border: none;
  box-shadow: 0px 2px 4px rgba(64, 123, 255, 0.2);
`;

export const Counter = styled.div`
  font-weight: 700;
  width: 92px;
  height: 36px;
  border-radius: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  border: 1px solid;
`;
