import styled from "styled-components";

const MessagesContainer = styled.div`
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
    MessagesContainer,
};