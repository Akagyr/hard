import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import useGetRoom from "../../hooks/useGetRoom";
import { updateRoomStatus, updateRoomCurrentQuestion, updateRoomFinishedQuiz } from "../../redux/actions/room/roomAction";
import { updateUserReadiness } from "../../redux/actions/users/usersAction";
import useGetUsers from "../../hooks/useGetUsers";

import {
    Results,
    ResultsTitle,
    ResultsTitleUser,
    ResultsUser,
    UserInfo,
    ResultsUserPhoto,
    ResultsUserName,
    OkBtn,
} from "./ResultsQuizStyles";


const ResultsQuiz = ({userId}) => {
    const users = useGetUsers();
    const room = useGetRoom();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const okBtnClick = () => {
        dispatch(updateRoomStatus({
            id: room.id,
            isStartedQuize: false,
        }));
        dispatch(updateRoomCurrentQuestion({
            id: room.id,
            currentQuestion: 0,
        }));
        dispatch(updateRoomFinishedQuiz({
            id: room.id,
            isFinishedQuiz: false,
        }));
        dispatch(updateUserReadiness({
            userId: userId,
            userReadiness: false,
        }));
        navigate("/");
    };

    const showUsersScore = users.map((item, index) =>
        <ResultsUser key={index}>
            <UserInfo>
                <ResultsUserPhoto src={item.userPhoto} alt="" />
                <ResultsUserName>{item.userName}</ResultsUserName>
            </UserInfo>
            <p>{item.score}</p>
        </ResultsUser>);

    return (
        <>
            <Results>
                <ResultsTitle>
                    <ResultsTitleUser>user</ResultsTitleUser>
                    <p>scores</p>
                </ResultsTitle>
                {showUsersScore}
            </Results>
            <OkBtn onClick={() => okBtnClick()}>ok</OkBtn>
        </>
    );
};

export default ResultsQuiz;