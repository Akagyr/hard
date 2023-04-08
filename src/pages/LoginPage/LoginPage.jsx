import React from "react";
import styled from "styled-components";

import { Button } from "../../components/commonStyles";

const LoginContainer = styled.div`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    text-align: center;
    background-color: #232327;
    width: 400px;
    padding: 60px 30px;
    border-radius: 5px;
`;

const ButtonLogin = styled(Button)`
    border-color: #fcf131;
    color: #fff;
    display: flex;
    padding: 5px 0 5px 5px;
    width: 100%
`;

const GoogleTextContainer = styled.div`
    width: 100%;
    text-align: center;
`;

const LoginPage = () => {
    return (
        <LoginContainer>
            <ButtonLogin>
                <span>G</span>
                <GoogleTextContainer>Login with Google</GoogleTextContainer>
            </ButtonLogin>
        </LoginContainer>
    );
}

export default LoginPage;