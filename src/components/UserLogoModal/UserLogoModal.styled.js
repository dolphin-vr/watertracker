// import styled from 'styled-components';
// import Modal from 'react-modal';

// export const ModalStyled = styled(Modal)`
//     &.custom-overlay {
//         background: none;
//     }
// `;

// export const Backdrop = styled.div`
//     position: fixed;
//     top: 0;
//     left: 0;
//     right: 0;
//     bottom: 0; 
//     z-index: 100;
//     background-color: transparent;
// `;

// export const ContainerULM = styled.div`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     flex-direction: column;
//     gap: ${({ theme }) => theme.spacing(4)};

//     position: absolute;
//     left: 182px;
//     top: 48px;
//     right: 20px;
//     bottom: 1300px;
//     transform: translateX(-50%);
//     background-color: ${({ theme }) => theme.colors.primary.White};
//     border-radius: 10px;
//     box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
//     height: 88px;
//     width: 118px;
//     padding: ${({ theme }) => theme.spacing(4)};
//     z-index: 100;

//     @media (min-width: 768px) {
//         left: 618px;
//         top: 56px;
//         right: 32px;
//         bottom: 1220px;
//     }

//     @media (min-width: 1440px) {
//         left: 1210px;
//         top: 56px;
//         right: 112px;
//         bottom: 656px;
//     }
// `;

// export const UserLogoModalBtn = styled.button`
//     display: flex;
//     width: 100%;
//     height: 20px;
//     border: none;
//     padding: 0;
//     gap: ${({ theme }) => theme.spacing(2)};
//     background-color: transparent;
//     cursor: pointer;
//     align-items: center;
// `;

// export const UserLogoModalName = styled.p`
//     color: ${({ theme }) => theme.colors.primary.Blue};
//     margin: 0;
// `;

import styled from "styled-components";

export const ContainerULM = styled.div`
    height: fit-content;
    position: absolute;
    top: 56px;

    // @media (min-width: 1440px) {
    //     top: 56px;
    // }
`;

export const ULMContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 118px;
    height: 88px; 
    padding: 16px;
    gap: 16px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 4px 8px 0px rgba(64, 123, 255, 0.2);
`;
export const UserLogoModalBtn = styled.button`
    display: flex;
    width: 100%;
    border: none;
    padding: 0;
    gap: 8px;
    background-color: transparent;
    cursor: pointer;
    align-items: center;
`;
export const UserLogoModalName = styled.p`
    color: #407bff;
    margin: 0;
`;

