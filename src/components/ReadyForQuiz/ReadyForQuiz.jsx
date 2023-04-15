import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { userReadiness } from "../../redux/actions/users/usersAction";
import { getUsers } from "../../redux/actions/users/usersAction";
import useGetUsers from "../../hooks/useGetUsers";

import { 
    QuizeCancelButton,
    QuizeTitleText,
} from "./ReadyForQuizStyles";


const ReadyForQuiz = ({userId}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useGetUsers();

    useEffect(() => {
        if(users.find(user => user.userReadiness === false)) {
            console.log("User is not ready");
        } else {
            console.log("Users are ready");
        }
    }, [users]);

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