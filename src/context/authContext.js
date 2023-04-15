import { useContext, createContext, useEffect } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

import { auth } from "../firebase";
import { loginSuccess } from "../redux/slices/loginSlice";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const dispatch = useDispatch();
    const { user } = useSelector(state => state.login);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider);
    };

    const googleSignOut = () => {
        signOut(auth);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if(currentUser) dispatch(loginSuccess({
                id: currentUser.uid,
                name: currentUser.displayName,
                email: currentUser.email,
                photo: currentUser.photoURL,
            }));
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ googleSignIn, googleSignOut, user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const UserAuth = () => {
    return useContext(AuthContext);
};