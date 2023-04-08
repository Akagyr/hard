import styled from "styled-components";

import { Button } from "../../components/commonStyles";

const MainPageContainer = styled.div`
    display: flex;
`;

const GameContainer = styled.div`
    width: 65%;
    text-align: center;
    padding-top: 40vh;
`;

const GameStartText = styled.p`
    color: #fff;
    margin-bottom: 20px;
    font-size: 22px;
`;

const StartButton = styled(Button)`
    padding: 5px 50px;
`;

const ChatContainer = styled.div`
    width: 35%;
    height: 90vh;
    border-left: 1px solid white;
    border-radius: 5px 0 0 5px;
    background-image: url("https://img2.wallspic.com/crops/8/3/5/9/6/169538/169538-black-grey-colored-blue-light-3840x2160.png");
    display: flex;
    flex-direction: column;
    padding: 10px 5px 30px;
`;

const Messages = styled.div`
    height: 85%;
    margin-bottom: 5%;
    overflow-y: scroll;

    &::-webkit-scrollbar {
        width: 8px;
    }
    
    &::-webkit-scrollbar-track {
        background: transparent;;
    }
    
    &::-webkit-scrollbar-thumb {
        background: rgba(255,255,255,.2);
        border-radius: 20px;
    }
`;

const MessageTools = styled.div`
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
};