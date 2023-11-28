import React from "react";
import { useSelector } from "react-redux";

import {
    SentMessageContainer,
    ReceivedMessageContainer,
    MessageUserInfo,
    MessageUserImage,
    MessageUserName,
    MessageTextContainer,
    MessageText,
} from "./MessageStyles";


const Message = ({ userId, userName, userPhoto, messageText }) => {
    const { user } = useSelector(state => state.login);

    return (
        <>
            {userId === user.id
                ? <SentMessageContainer>
                    <MessageUserInfo>
                        <MessageUserImage src={userPhoto} alt={userPhoto} />
                        <MessageUserName>{userName}</MessageUserName>
                    </MessageUserInfo>
                    <MessageTextContainer>
                        <MessageText>{messageText}</MessageText>
                    </MessageTextContainer>
                </SentMessageContainer>
                : <ReceivedMessageContainer>
                    <MessageUserInfo>
                        <MessageUserImage src={userPhoto} alt={userPhoto} />
                        <MessageUserName>{userName}</MessageUserName>
                    </MessageUserInfo>
                    <MessageTextContainer>
                        <MessageText>{messageText}</MessageText>
                    </MessageTextContainer>
                </ReceivedMessageContainer>
            }
        </>
    );
};

export default Message;