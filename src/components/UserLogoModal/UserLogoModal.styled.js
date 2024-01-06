import styled from 'styled-components';
import Modal from 'react-modal';

export const ModalStyled = styled(Modal)`
    position: absolute;
    top: 48px;
    left: 182px;
    right: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
    height: 88px;
    width: 118px;
    padding: 16px;

    &.OverlayLM {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0; 
        width: 100%;
        height: 100%;
        z-index: 100;
        background-color: transparent;
    }

    @media (min-width: 768px) {
        top: 56px;
        left: 618px;
        right: 32px;
    }

    @media (min-width: 1440px) {
        top: 56px;
        left: 1210px;
        right: 112px;
    }
`;

export const ContainerULM = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 16px;
`;

export const UserLogoModalBtn = styled.button`
    display: flex;
    width: 100%;
    height: 20px;
    border: none;
    padding: 0;
    gap: 8px;
    background-color: transparent;
    cursor: pointer;
    align-items: center;
`;

export const UserLogoModalName = styled.p`
    color: #407BFF;
    margin: 0;
`;



