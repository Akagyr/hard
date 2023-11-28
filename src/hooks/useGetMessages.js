import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";

import { getMessagesFetch, getMessagesSuccess, getMessagesFailure } from "../redux/slices/messagesSlice";
import { db } from "../firebase";

const useGetMessages = () => {
    const { messages } = useSelector(state => state.messages);
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            // dispatch(getMessagesFetch());
            const queryCollection = collection(db, "messages");
            const unsubscribe = onSnapshot(queryCollection, (snapshot) => {
                let tempArr = [];
                snapshot.forEach((doc) => {
                    tempArr.push({ ...doc.data(), id: doc.id });
                });
                dispatch(getMessagesSuccess(tempArr));
                return tempArr;
            });
            return () => unsubscribe();
        } catch (error) {
            dispatch(getMessagesFailure(error));
        }
    }, []);

    return messages;
};

export default useGetMessages;