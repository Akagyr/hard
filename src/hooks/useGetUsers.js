import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUsers } from "../redux/actions/users/usersAction";

const useGetUsers = () => {
    const { users } = useSelector(state => state.users);
    const dispatch = useDispatch();

    useEffect(() => {
        if(users.length === 0) {
            dispatch(getUsers());
        }
    }, [users]);

    return users;
};

export default useGetUsers;