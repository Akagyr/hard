import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import useGetQuestions from "../../hooks/useGetQuestions";
import iconSuccess from "../../assets/answer_success.svg";
import iconFailure from "../../assets/answer_failure.svg";
import Loader from "../Loader/Loader";
import { updateUserScores } from "../../redux/actions/users/usersAction";
import useGetRoom from "../../hooks/useGetRoom";
import { updateRoomCurrentQuestion, updateRoomFinishedQuiz } from "../../redux/actions/room/roomAction";

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
    const [isDisabled, setIsDisabled] = useState(false);
    const [score, setScore] = useState(0);

    const { user } = useSelector(state => state.login);
    const questions = useGetQuestions();
    const { id, currentQuestion, isFinishedQuiz } = useGetRoom();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        if (isFinishedQuiz) {
            dispatch(updateUserScores({
                userId: user.id,
                score: score,
            }));
            navigate("/result");
        }
    }, [isFinishedQuiz]);

    const answerButtonClick = (answer) => {
        const newAnswer = answer === questions[currentQuestion].answer;
        setAnswersStatus([...answersStatus, newAnswer]);
        setScore(newAnswer ? score + 1 : score - 1);

        if (currentQuestion < (questions.length - 1)) {
            dispatch(updateRoomCurrentQuestion({
                id: id,
                currentQuestion: currentQuestion + 1,
            }));
        } else {
            setIsDisabled(true);
            dispatch(updateRoomFinishedQuiz({
                id: id,
                isFinishedQuiz: true,
            }));
        }
    };

    return (
        <>
            {questions.length === 0 || typeof currentQuestion !== "number"
                ? <Loader />
                : <>
                    <AnswersLine>
                        {answersStatus.map((item, index) => item
                            ? <AnswerStatusIcon key={index} src={iconSuccess} alt={iconSuccess} />
                            : <AnswerStatusIcon key={index} src={iconFailure} alt={iconFailure} />
                        )}
                    </AnswersLine>
                    <QuestionContainer>
                        <QuestionText>{questions[currentQuestion].question}</QuestionText>
                        <QuestionAnswers>
                            {questions[currentQuestion].options.map((option, index) =>
                                <QuestionAnswerBtn key={index} disabled={isDisabled} onClick={() => answerButtonClick(option)}>
                                    {option}
                                </QuestionAnswerBtn>
                            )}
                        </QuestionAnswers>
                    </QuestionContainer>
                </>
            }
        </>
    );
};

export default QuestionsQuiz;