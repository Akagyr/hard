import React from "react";

import {
    LoadingWave,
    LoadingBar,
} from "./LoaderStyles";

const Loader = () => {
    return (
        <LoadingWave>
            <LoadingBar />
            <LoadingBar />
            <LoadingBar />
            <LoadingBar />
        </LoadingWave>
    );
};

export default Loader;