import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Message from "../../components/Message/Message";
import MessageTools from "../../components/MessageTools/MessageTools";
import { getMessagesFetch } from "../../redux/slices/messagesSlice";

import { 
    MainPageContainer, 
    GameContainer, 
    GameStartText, 
    StartButton,
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
            <GameContainer>
                <GameStartText>START if you are ready to start Quiz</GameStartText>
                <StartButton>START</StartButton>
            </GameContainer>
            <ChatContainer>
                <Messages>
                    {showMessages}
                </Messages>
                <MessageTools newMessageId={messages.length + 1} userId={user.id} userName={user.name} userPhoto={user.photo} />
            </ChatContainer>
        </MainPageContainer>
    );
}

export default MainPage;