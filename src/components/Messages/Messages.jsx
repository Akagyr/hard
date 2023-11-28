import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import Message from "../../components/Message/Message";
import MessageTools from "../../components/MessageTools/MessageTools";
import useGetMessages from "../../hooks/useGetMessages";

import {
    MessagesContainer,
} from "./MessagesStyles";

const Messages = () => {
    const { user } = useSelector(state => state.login);
    const messages = useGetMessages();
    const scollToLastMessageRef = useRef(null);

    useEffect(() => {
        if (messages.length) {
            scollToLastMessageRef.current.scrollTo(0, scollToLastMessageRef.current.scrollHeight);
        }
    }, [messages]);

    const showMessages = messages.map((item, index) => (
        <Message
            key={index}
            userId={item.userId}
            userName={item.userName}
            userPhoto={item.userPhoto}
            messageText={item.message}
        />
    ));

    return (
        <>
            <MessagesContainer className="chat__list" ref={scollToLastMessageRef}>
                {showMessages}
            </MessagesContainer>
            <MessageTools
                userId={user.id}
                userName={user.name}
                userPhoto={user.photo}
            />
        </>
    );
};

export default Messages;