import styled from "styled-components";

export const Container = styled.div`
                max-width: 100%;
                padding: 24px 12px;
                z-index: 100;
                position: absolute;
                transform: translate(-50%, -50%);
                top: 58%;
                left: 50%;
                background-color: white;
                border-radius: 10px;
                margin: 0 auto;
                @media screen and (min-width: 768px) {
                    {
                        padding: 32px 24px;
                        width: 704px;
                        top: 50%;
                    }
                }
                @media screen and (min-width: 1280px) {
                    {
                        padding: 32px 24px;
                        width: 592px;
                    }
                }`

export const Title = styled.h2 `
    
font-size: 26px;
font-weight: 500;
color:#2F2F2F ;
line-height: calc(32 / 26);
margin-bottom: 24px;
`

export const Backdrop = styled.div`
 position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 100;
        background-color: gray;
        overflow: auto;`
