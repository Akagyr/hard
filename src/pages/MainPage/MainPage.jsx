import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useNavigate } from "react-router-dom";

import Message from "../../components/Message/Message";
import MessageTools from "../../components/MessageTools/MessageTools";
import { getMessagesFetch } from "../../redux/slices/messagesSlice";
import StartForQuiz from "../../components/StartForQuiz/StartForQuiz";
import ReadyForQuize from "../../components/ReadyForQuiz/ReadyForQuiz";
import { getUsers } from "../../redux/actions/users/usersAction";

import { 
    MainPageContainer, 
    QuizeContainer,
    ChatContainer,
    Messages,
} from "./MainPageStyles";

const MainPage = () => {
    const { isAuth, user } = useSelector(state => state.login);
    const { messages } = useSelector(state => state.messages);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMessagesFetch());
        dispatch(getUsers());
    }, []);

    useEffect(() => {
        if(!isAuth) {
            navigate("/login");
        }
    }, [isAuth]);

    const showMessages = messages.map((item, index) => (
        <Message 
            key={index}
            userId={item.userId}
            userName={item.userName}
            userPhoto={item.userPhoto} 
            messageText={item.message} 
        />));

    return (
        <MainPageContainer>
            <QuizeContainer>
                <Routes>
                    <Route index element={<StartForQuiz userId={user.id} />} />
                    <Route path="/readyforquize" element={<ReadyForQuize userId={user.id} />} />
                </Routes>
            </QuizeContainer>
            <ChatContainer>
                <Messages>
                    {showMessages}
                </Messages>
                <MessageTools 
                    userId={user.id} 
                    userName={user.name} 
                    userPhoto={user.photo} 
                />
            </ChatContainer>
        </MainPageContainer>
    );
};

export default MainPage;