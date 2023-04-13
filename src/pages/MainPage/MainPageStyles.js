import styled from "styled-components";

const MainPageContainer = styled.div`
    display: flex;
`;

const QuizeContainer = styled.div`
    width: 65%;
    text-align: center;
    padding-top: 40vh;
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

export {
    MainPageContainer,
    QuizeContainer,
    ChatContainer,
    Messages,
};