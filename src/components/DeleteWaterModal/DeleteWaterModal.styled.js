import styled from "styled-components";

export const modalDelete = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  content: {
    position: "absolute",
    backgroundColor: "#fff",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    width: "280px",
    height: "280px",
    padding: "32px 24px",
    border: "none",
    "@media (min-width: 768px)": {
      width: "592px",
      height: "208px",
    },
  },
};

export const modalTablet = {};

export const Title = styled.h2`
  margin: 0;
  font-size: 26px;
  margin-bottom: 24px;
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
  top: 36px;
  right: 24px;
  padding: 0;
  cursor: pointer;
`;

export const Text = styled.p`
  font-size: 18px;
  margin: 0;
  margin-bottom: 24px;
`;

export const WrapBtn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const BtnDelete = styled.button`
  height: 36px;
  border-radius: 10px;
  border: none;
  background-color: #ef5050;
  color: #fff;
  box-shadow: 0 4px 8px rgba(64, 123, 255, 0.34);
  cursor: pointer;
`;

export const BtnCancel = styled.button`
  height: 36px;
  border-radius: 10px;
  border: none;
  color: #407bff;
  background-color: #d7e3ff;
  cursor: pointer;
`;
