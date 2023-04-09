import styled from "styled-components";

import { Button } from "../../components/commonStyles";

const MessageToolsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const MessageInputContainer = styled.div`
    width: 80%;
`;

const MessageInput = styled.textarea`
    width: 95%;
    resize: none;
    height: 80px;
    background: rgba(255,255,255,.3);
    border-radius: 10px;
    padding: 10px;
    color: #fff;
    outline: none;
    boeder: none;
    
    &::placeholder {
        color: rgb(166, 166, 166);
    }
`;

const MessageButtonContainer = styled.div`
    width: 20%;
    text-align: center;
`;

const MessageButton = styled(Button)`
    width: 100%;
    background-color: rgba(0,0,0,.1);
    border-radius: 8px;
`;

export {
    MessageToolsContainer,
    MessageInputContainer,
    MessageInput,
    MessageButtonContainer,
    MessageButton,
};