import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userReadiness } from "../../redux/actions/users/usersAction";
import { getUsers } from "../../redux/actions/users/usersAction";

import { 
    QuizeTitleText,
    QuizeStartButton,
} from "./StartForQuizStyles";


const StartForQuiz = ({userId}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const quizeStart = () => {
        dispatch(userReadiness({
            userId: userId,
            userReadiness: true,
        }));
        dispatch(getUsers());
        navigate("/readyforquize");
    };

    return (
        <>
            <QuizeTitleText>START if you are ready to start Quiz</QuizeTitleText>
            <QuizeStartButton onClick={() => quizeStart()}>START</QuizeStartButton>
        </>
    );
};

export default StartForQuiz;