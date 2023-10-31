import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getQuestionsFetch } from "../redux/slices/questionsSlice";

const useGetQuestions = () => {
    const { questions } = useSelector(state => state.questions);
    const dispatch = useDispatch();

    useEffect(() => {
        if(questions.length === 0) {
            dispatch(getQuestionsFetch());
        }
    }, [questions]);

    return questions;
};

export default useGetQuestions;