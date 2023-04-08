import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Message from "../../components/Message/Message";

import { 
    MainPageContainer, 
    GameContainer, 
    GameStartText, 
    StartButton,
    ChatContainer,
    Messages,
    MessageTools,
    MessageInputContainer,
    MessageInput,
    MessageButtonContainer,
    MessageButton,
} from "./MainPageStyles";

const MainPage = () => {
    const { isAuth } = useSelector(state => state.login);
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAuth) {
            navigate("/login");
        }
    }, [isAuth]);

    return (
        <MainPageContainer>
            <GameContainer>
                <GameStartText>START if you are ready to start Quiz</GameStartText>
                <StartButton>START</StartButton>
            </GameContainer>
            <ChatContainer>
                <Messages>
                    <Message 
                        userImage="https://i.pinimg.com/280x280_RS/73/b5/93/73b593ab893db7f05bc854708b1f02fc.jpg" 
                        userName="Alphaplay Альфаплей"
                        messageText="Hello, World!" 
                    />
                    <Message 
                        userImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU" 
                        userName="Nickolay Yusov"
                        messageText="..." 
                    />
                    <Message 
                        userImage="https://i.pinimg.com/280x280_RS/73/b5/93/73b593ab893db7f05bc854708b1f02fc.jpg" 
                        userName="Alphaplay Альфаплей"
                        messageText="Hello" 
                    />
                </Messages>
                <MessageTools>
                    <MessageInputContainer>
                        <MessageInput placeholder="Send a message" />
                    </MessageInputContainer>
                    <MessageButtonContainer>
                        <MessageButton>SEND</MessageButton>
                    </MessageButtonContainer>
                </MessageTools>
            </ChatContainer>
        </MainPageContainer>
    );
}

export default MainPage;