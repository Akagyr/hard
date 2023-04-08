import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { Button } from "../commonStyles";
import { logout } from "../../redux/slices/loginSlice";

import { HeaderContainer, HeaderTitle } from "./HeaderStyles";



const Header = () => {
    const {pathname} = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate("login");
    };

    return (
        <HeaderContainer>
            <HeaderTitle>Q</HeaderTitle>
            {pathname !== "/login" && 
                <Button onClick={() => handleLogout()}>Logout</Button>
            }
        </HeaderContainer>
    );
}

export default Header;