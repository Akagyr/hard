import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

import StartForQuiz from "../../components/StartForQuiz/StartForQuiz";
import ReadyForQuize from "../../components/ReadyForQuiz/ReadyForQuiz";
import QuestionsQuiz from "../../components/QuestionsQuiz/QuestionsQuiz";
import ResultsQuiz from "../../components/ResultsQuiz/ResultsQuiz";
import Messages from "../../components/Messages/Messages";

import {
    MainPageContainer,
    QuizeContainer,
    ChatContainer,
} from "./MainPageStyles";


const MainPage = () => {
    const { isAuth, user } = useSelector(state => state.login);
    
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [isAuth]);


    return (
        <MainPageContainer>
            <QuizeContainer>
                <Routes>
                    <Route index element={<StartForQuiz userId={user.id} />} />
                    <Route path="/readyforquize" element={<ReadyForQuize userId={user.id} />} />
                    <Route path="/questions" element={<QuestionsQuiz userId={user.id} />} />
                    <Route path="/result" element={<ResultsQuiz userId={user.id} />} />
                </Routes>
            </QuizeContainer>
            <ChatContainer>
                <Messages />
            </ChatContainer>
        </MainPageContainer>
    );
};

export default MainPage;