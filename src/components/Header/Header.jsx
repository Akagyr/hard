import React from "react";
import { Link, useLocation } from "react-router-dom";

import { Button } from "../commonStyles";

import { HeaderContainer, HeaderTitle } from "./HeaderStyles";

const Header = () => {
    const {pathname} = useLocation();

    return (
        <HeaderContainer>
            <HeaderTitle>Q</HeaderTitle>
            {pathname !== "/login" && 
                <Link to="/login">
                    <Button>Logout</Button>
                </Link>
            }
        </HeaderContainer>
    );
}

export default Header;