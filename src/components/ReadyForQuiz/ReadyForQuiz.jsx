import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { updateUserReadiness } from "../../redux/actions/users/usersAction";
import { updateRoomStatus } from "../../redux/actions/room/roomAction";
import useGetUsers from "../../hooks/useGetUsers";
import useGetRoom from "../../hooks/useGetRoom";
import { QuizeTitleText } from "../commonStyles";

import { QuizeCancelButton } from "./ReadyForQuizStyles";


const ReadyForQuiz = ({ userId }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const users = useGetUsers();
    const room = useGetRoom();

    useEffect(() => {
        let isReady = users.find(user => user.userReadiness === false) ? false : true;
        if (isReady && users.length >= 2) {
            dispatch(updateRoomStatus({
                id: room.id,
                isStartedQuize: true,
            }));
            navigate("/questions");
        }
    }, [users]);

    const quizeCancel = () => {
        dispatch(updateUserReadiness({
            userId: userId,
            userReadiness: false,
        }));
        navigate("/");
    };

    return (
        <>
            <QuizeTitleText>Ready to start The Quize</QuizeTitleText>
            <QuizeCancelButton onClick={() => quizeCancel()}>CANCEL</QuizeCancelButton>
        </>
    );
};

export default ReadyForQuiz;