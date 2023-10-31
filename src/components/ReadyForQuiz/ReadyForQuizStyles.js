import styled from "styled-components";

import { Button, blueColor } from "../commonStyles";

const QuizeCancelButton = styled(Button)`
    padding: 5px 50px;
    background-color: ${blueColor};
    color: #fff;

    &:hover {
        background-color: ${blueColor};
    }
`;

export {
    QuizeCancelButton,
};