import styled from "styled-components";

const HeaderContainer = styled.header`
    background-color: #232327;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 30px;
    max-height: 10vh;
    
`;

const HeaderTitle = styled.h1`
    color: #fff;
    font-weight: 900;
    font-size: 50px;
`;

export {
    HeaderContainer,
    HeaderTitle,
};