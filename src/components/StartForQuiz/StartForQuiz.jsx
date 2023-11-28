import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { updateUserReadiness } from "../../redux/actions/users/usersAction";
import useGetUsers from "../../hooks/useGetUsers";

import { 
    QuizeTitleText,
    QuizeStartButton,
} from "./StartForQuizStyles";


const StartForQuiz = ({userId}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useGetUsers();

    const quizeStart = () => {
        dispatch(updateUserReadiness({
            userId: userId,
            userReadiness: true,
        }));
        navigate("/readyforquize");
    };

    return (
        <>
            {users.length < 2
            ?<QuizeTitleText>There are less than 2 users in the room, please wait for the others to connect</QuizeTitleText>
            :<>
                <QuizeTitleText>START if you are ready to start Quiz</QuizeTitleText>
                <QuizeStartButton onClick={() => quizeStart()}>START</QuizeStartButton>
            </>}
        </>
    );
};

export default StartForQuiz;