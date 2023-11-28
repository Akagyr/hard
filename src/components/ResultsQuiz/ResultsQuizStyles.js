import styled from "styled-components";

import { Button, blueColor } from "../commonStyles";


const Results = styled.div`
    padding: 15px 0 0 15px;
    color: #fff;
    width: 250px;
    font-size: 13px;
`;

const ResultsTitle = styled.div`
    display: grid;
    grid-template-columns: 80% 20%;
    align-items: center;
    margin-bottom: 15px;
`;

const ResultsTitleUser = styled.p`
    text-align: left;
`;

const ResultsUser = styled.div`
    display: grid;
    grid-template-columns: 80% 20%;
    align-items: center;
    margin-top: 5px;

    &:first-child {
        margin-top: 0;
    }
`;

const UserInfo = styled.div`
    display: flex;
    align-items: center;
    text-align: left;
`;

const ResultsUserPhoto = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
`;

const ResultsUserName = styled.p`
    color: ${blueColor};
    margin-left: 5px;
`;

const OkBtn = styled(Button)`
    padding: 3px 60px;
    position: absolute;
    top: 50%;
    left: 43%;
`;

export {
    Results,
    ResultsTitle,
    ResultsTitleUser,
    ResultsUser,
    UserInfo,
    ResultsUserPhoto,
    ResultsUserName,
    OkBtn,
};