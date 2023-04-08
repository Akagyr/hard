import React from "react";

import googleIcon from "../../assets/google_icon.png";

import {
    LoginContainer,
    ButtonLogin,
    GoogleIcon,
    GoogleText,
} from "./LoginPageStyles";

const LoginPage = () => {
    return (
        <LoginContainer>
            <ButtonLogin>
                <GoogleIcon src={googleIcon} alt="google-icon" />
                <GoogleText>Login with Google</GoogleText>
            </ButtonLogin>
        </LoginContainer>
    );
}

export default LoginPage;