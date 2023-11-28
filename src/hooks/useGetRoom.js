import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";

import { getRoomFetch, getRoomSuccess, getRoomFailure } from "../redux/slices/roomSlice";
import { db } from "../firebase";

const useGetRoom = () => {
    const { room } = useSelector(state => state.room);
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            // dispatch(getRoomFetch());
            const queryCollection = collection(db, "room");
            const unsubscribe = onSnapshot(queryCollection, (snapshot) => {
                let tempObj = {};
                snapshot.forEach((doc) => {
                    tempObj = { ...doc.data(), id: doc.id };
                });
                dispatch(getRoomSuccess(tempObj));
                return tempObj;
            });
            return () => unsubscribe();
        } catch (error) {
            dispatch(getRoomFailure(error.message));
        }
    }, []);

    return room;
};

export default useGetRoom;