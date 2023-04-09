import React from "react";
import { useSelector } from "react-redux";

import { 
    MyMessageContainer,
    OtherMessageContainer,
    MessageUser,
    MessageUserImage,
    MessageUserName,
    MessageTextContainer,
    MessageText,
} from "./Messsage";


const Message = ({userId,  userName, userPhoto, messageText}) => {
    const {user} = useSelector(state => state.login);

    return (
        <>
            {userId === user.id
                ?<MyMessageContainer>
                    <MessageUser>
                        <MessageUserImage src={userPhoto} alt="user" />
                        <MessageUserName>{userName}</MessageUserName>
                    </MessageUser>
                    <MessageTextContainer>
                        <MessageText>{messageText}</MessageText>
                    </MessageTextContainer>
                </MyMessageContainer>
                :<OtherMessageContainer>
                    <MessageUser>
                        <MessageUserImage src={userPhoto} alt="user" />
                        <MessageUserName>{userName}</MessageUserName>
                    </MessageUser>
                    <MessageTextContainer>
                        <MessageText>{messageText}</MessageText>
                    </MessageTextContainer>
                </OtherMessageContainer>
            }
        </>
    );
}

export default Message;