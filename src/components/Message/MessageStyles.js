import styled from "styled-components";

import { blueColor } from "../commonStyles";

const SentMessageContainer = styled.div`
    margin-bottom: 20px;
    width: 60%;
`;

const ReceivedMessageContainer = styled.div`
    margin-bottom: 20px;
    width: 60%;
    margin-left: auto;
`;

const MessageUserInfo = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    overflow: hidden;
`;

const MessageUserImage = styled.img`
    width: 25px;
    border-radius: 50%;
    margin-left: 5px;
`;

const MessageUserName = styled.p`
    font-size: 12px;
    margin-left: 5px;
    color: ${blueColor};
`;

const MessageTextContainer = styled.div`
    padding: 15px 0 15px 5px;
    border-radius: 5px;
    background: rgba(0,0,0,.1);
    box-shadow: 0 5px 15px 1px rgba(0,0,0,.6);
`;

const MessageText = styled.p`
    color: #fff;
    font-size: 13px;
`;

export {
    SentMessageContainer,
    ReceivedMessageContainer,
    MessageUserInfo,
    MessageUserImage,
    MessageUserName,
    MessageTextContainer,
    MessageText,
};