import styled from "styled-components";

const blueColor = "#56bab7";

const Button = styled.button`
    outline: none;
    background-color: transparent;
    border: 2px solid ${blueColor};
    color: ${blueColor};
    padding: 3px 20px;
    font-size: 14px;
    border-radius: 3px;
    cursor: pointer;
    transition: .3s;

    &:hover {
        background-color: #1d3d3c;
    }
`;

const QuizeTitleText = styled.p`
    color: #fff;
    margin-bottom: 20px;
    font-size: 22px;
`;

export {
    blueColor,
    QuizeTitleText,
    Button,
};