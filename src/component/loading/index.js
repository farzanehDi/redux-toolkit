import React from 'react';
import {useSelector} from "react-redux";

const Loading = () => {

    const loading =useSelector(state=>state.loading.value)

    if(loading) return (
        <h1>
            ***loading***
        </h1>
    );
};

export default Loading;