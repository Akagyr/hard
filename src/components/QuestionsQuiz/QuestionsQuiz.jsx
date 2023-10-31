import React, { useState } from "react";

import useGetQuestions from "../../hooks/useGetQuestions";
import iconSuccess from "../../assets/answer_success.svg";
import iconFailure from "../../assets/answer_failure.svg";
import Loader from "../Loader/Loader";

import {
    AnswersLine,
    AnswerStatusIcon,
    QuestionContainer,
    QuestionText,
    QuestionAnswers,
    QuestionAnswerBtn,
} from "./QuestionsQuizStyles";


const QuestionsQuiz = () => {
    const [answersStatus, setAnswersStatus] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [isDisabled, setIsDisabled] = useState(false);
    const questions = useGetQuestions();


    const answerButtonClick = (answer) => {
        const newAnswer = answer === questions[currentQuestion].answer;
        setAnswersStatus([...answersStatus, newAnswer]);
        currentQuestion < (questions.length - 1) ? setCurrentQuestion(currentQuestion + 1) : setIsDisabled(true);
    };
    
    return (
        <>
            <AnswersLine>
                {answersStatus.map((item, index) => item 
                ? <AnswerStatusIcon key={index} src={iconSuccess} alt={iconSuccess} /> 
                : <AnswerStatusIcon key={index}src={iconFailure} alt={iconFailure} />)}
            </AnswersLine>
            { questions.length === 0 
            ?<Loader />
            :<QuestionContainer>
                <QuestionText>{questions[currentQuestion].question}</QuestionText>
                <QuestionAnswers>
                    {questions[currentQuestion].options.map((option, index) => 
                        <QuestionAnswerBtn key={index} disabled={isDisabled} onClick={() => answerButtonClick(option)}>
                            {option}
                        </QuestionAnswerBtn>)}
                </QuestionAnswers>
            </QuestionContainer>
            }
        </>
    );
};

export default QuestionsQuiz;