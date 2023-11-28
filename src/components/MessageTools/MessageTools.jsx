import React, { useRef } from "react";
import { useDispatch } from "react-redux";

import { addMessage } from "../../redux/actions/messages/messagesAction";

import { 
    MessageToolsContainer,
    MessageInputContainer,
    MessageInput,
    MessageButtonContainer,
    MessageButton,
} from "./MessageToolsStyles";


const MessageTools = ({userId, userName, userPhoto}) => {
    const messageInputRef = useRef(null);
    const dispatch = useDispatch();

    const sendMessage = (message) => {
        dispatch(addMessage({
            userId: userId,
            userName: userName,
            userPhoto: userPhoto,
            message: message,
        }));
        messageInputRef.current.value = null;
    };

    return (
        <MessageToolsContainer>
            <MessageInputContainer>
                <MessageInput ref={messageInputRef} placeholder="Send a message" />
            </MessageInputContainer>
            <MessageButtonContainer>
                <MessageButton onClick={() => sendMessage(messageInputRef.current.value)}>SEND</MessageButton>
            </MessageButtonContainer>
        </MessageToolsContainer>
    );
};

export default MessageTools;