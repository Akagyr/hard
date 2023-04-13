import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import googleIcon from "../../assets/google_icon.png";
import { login } from "../../redux/actions/login/loginAction";

import {
    LoginContainer,
    ButtonLogin,
    GoogleIcon,
    GoogleText,
} from "./LoginPageStyles";


const LoginPage = () => {
    const dispatch = useDispatch();
    const { isAuth } = useSelector(state => state.login);
    const navigate = useNavigate();

    useEffect(() => {
        if(isAuth) {
            navigate("../");
        }
    }, [isAuth]);

    return (
        <LoginContainer>
            <ButtonLogin onClick={() => dispatch(login())}>
                <GoogleIcon src={googleIcon} alt="google-icon" />
                <GoogleText>Login with Google</GoogleText>
            </ButtonLogin>
        </LoginContainer>
    );
};

export default LoginPage;