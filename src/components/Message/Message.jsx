import React from "react";

import { 
    MessageContainer,
    MessageUser,
    MessageUserImage,
    MessageUserName,
    MessageTextContainer,
    MessageText,
} from "./Messsage";

const Message = ({userImage, userName, messageText}) => {
    return (
        <MessageContainer>
            <MessageUser>
                <MessageUserImage src={userImage} alt="user" />
                <MessageUserName>{userName}</MessageUserName>
            </MessageUser>
            <MessageTextContainer>
                <MessageText>{messageText}</MessageText>
            </MessageTextContainer>
        </MessageContainer>
    );
}

export default Message;