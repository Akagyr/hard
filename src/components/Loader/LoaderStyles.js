import styled from "styled-components";

import { blueColor } from "../commonStyles";

const LoadingWave = styled.div`
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 30%;
`;

const LoadingBar = styled.div`
    width: 20px;
    height: 10px;
    margin: 0 5px;
    background-color: ${blueColor};
    border-radius: 5px;
    animation: loading-wave-animation 1s ease-in-out infinite;

    &:nth-child(2) {
        animation-delay: 0.1s;
    }

    &:nth-child(3) {
        animation-delay: 0.2s;
    }

    &:nth-child(4) {
        animation-delay: 0.3s;
    }

    @keyframes loading-wave-animation {
        0% {
            height: 10px;
        }
    
        50% {
            height: 50px;
        }
    
        100% {
            height: 10px;
        }
    }
`;

export {
    LoadingWave,
    LoadingBar,
};