import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userReadiness } from "../../redux/actions/users/usersAction";
import { getUsers } from "../../redux/actions/users/usersAction";

import { 
    QuizeCancelButton,
    QuizeTitleText,
} from "./ReadyForQuizStyles";


const ReadyForQuiz = ({userId}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const quizeCancel = () => {
        dispatch(userReadiness({
            userId: userId,
            userReadiness: false,
        }));
        dispatch(getUsers());
        navigate("../");
    };

    return (
        <>
            <QuizeTitleText>Ready to start The Quize</QuizeTitleText>
            <QuizeCancelButton onClick={() => quizeCancel()}>CANCEL</QuizeCancelButton>
        </>
    );
};

export default ReadyForQuiz;