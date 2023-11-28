import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collection, onSnapshot } from "firebase/firestore";

import { getUsersFetch, getUsersSuccess, getUsersFailure } from "../redux/slices/usersSlice";
import { db } from "../firebase";

const useGetUsers = () => {
    const { users } = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        try {
            // dispatch(getUsersFetch());
            const queryCollection = collection(db, "users");
            const unsubscribe = onSnapshot(queryCollection, (snapshot) => {
                let tempArr = [];
                snapshot.forEach((doc) => {
                    tempArr.push({ ...doc.data(), id: doc.id });
                });
                dispatch(getUsersSuccess(tempArr));
                return tempArr;
            });
            return () => unsubscribe();
        } catch (error) {
            dispatch(getUsersFailure(error));
        }
    }, []);

    return users;
};

export default useGetUsers;