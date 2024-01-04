import styled from 'styled-components';
import Modal from 'react-modal';

export const ModalStyled = styled(Modal)`
    &.custom-overlay {
        background: none;
    }
`;

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; 
    z-index: 100;
    background-color: rgba(0, 0, 0, 0.80);
`;

export const ModalContainer = styled.div`
    position: absolute;
    top: 296px;
    left: 424px;
    background-color: #FFF;
    border-radius: 10px;
    width: 280px;
    height: 260px;
    padding: 32px 24px;
    z-index: 100;

    @media (min-width: 768px) {
        width: 592px;
        height: 208px;
    }

    @media (min-width: 1440px) {
        width: 592px;
        height: 208px;
    }
`;

export const Title = styled.h2`
    color: #2F2F2F;
    font-family: Roboto;
    font-size: 26px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
    margin: 0; 
`;

export const XBtn = styled.button`
    width: 24px;
    height: 24px;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Ask = styled.p`
    color: #2F2F2F;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
    margin-top: 24px;
`;

export const Wrap = styled.div`
    margin-top: 24px;
    @media (min-width: 768px) {
        display: flex;
        justify-content: flex-end;
    }
    @media (min-width: 1440px) {
        display: flex;
        justify-content: flex-start;
    }
`;

export const CancelBtn = styled.button`
    margin-top: 24px;
    width: 232px;
    padding: 8px 30px;
    border-radius: 10px;
    background-color: #D7E3FF;
    color: #407BFF;
    border: none;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    margin-right: 24px;
    &:hover {
        opacity: 0.7;
    }
    @media (min-width: 768px) {
        padding: 10px 30px;
        width: 160px;
    }
`;

export const LogoutBtn = styled.button`
    margin-top: 24px;
    width: 232px;
    padding: 8px 30px;
    border-radius: 10px;
    background-color: #EF5050;
    color: #FFFFFF;
    border: none;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.34);
    &:hover {
        opacity: 0.7;
    }
    @media (min-width: 768px) {
        padding: 10px 30px;
        width: 160px;
    }
`;
