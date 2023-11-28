import styled from "styled-components";

import { Button, blueColor, disabledColor } from "../commonStyles";

const AnswersLine = styled.ul`
    display: flex;
    justify-content: center;
    margin: 20px 0 40px;
    height: 30px;
`;

const AnswerStatusIcon = styled.img`
    heigth: 100%;
`;

const QuestionContainer = styled.div`
    width: 30%;
    margin: 0 auto;
    border: 1px solid ${blueColor};
    border-radius: 5px;
    background-color: #232327;
    padding: 50px 20px 30px;
`;

const QuestionText = styled.p`
    color: #fff;
    text-align: left;
    height: 100px;
    margin-bottom: 50px;
    padding: 0 10px;
    line-height: 1.7;
    font-size: 13px;
`;

const QuestionAnswers = styled.div`
    margin: 0 auto;
`;

const QuestionAnswerBtn = styled(Button)`
    display: block;
    width: 100%;
    margin-bottom: 25px;
    
    &:last-child {
        margin-bottom: 0;
    }
    
    &[disabled] {
        border-color: ${disabledColor};
        color: ${disabledColor};

        &:hover {
            background-color: unset;
        }
    }
`;

export {
    AnswersLine,
    AnswerStatusIcon,
    QuestionContainer,
    QuestionText,
    QuestionAnswers,
    QuestionAnswerBtn,
};