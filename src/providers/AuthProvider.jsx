import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import loadingImg from '../assets/icon/loading.png'


export const AuthContext = createContext(null);
const auth = getAuth(app);

// Inline Spinner Styles
const spinnerStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999
};

const spinnerImageStyles = {
    width: "250px",
    height: "250px",
    animation: "spin 1s infinite linear"
};

const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // sign in user
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // signin with google
    const googleSignIn = () =>{
        // setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }


    // logOut
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };

    // update user profile
    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    // Manage User
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('Current User', currentUser);
            setLoading(false);
        });
        return () => {
            return unsubscribe();
        }
    }, []);

    // auth info
    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googleSignIn
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {loading ? (
                <div style={spinnerStyles}>
                    <img 
                        src={loadingImg} 
                        alt="loading" 
                        style={spinnerImageStyles}
                    />
                    <h2 className="text-2xl text-yellow-600 text-center">Loading.......</h2>
                </div>
            ) : (
                children
            )}
        </AuthContext.Provider>
    );
};

export default AuthProvider;















// import { createContext, useEffect, useState } from "react";
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
// import { app } from "../firebase/firebase.config";

// export const AuthContext = createContext(null);
// const auth = getAuth(app);

// const AuthProvider = ({children}) => {
//     const [user, setUser] = useState(null);
//     const [loading, setLoading] = useState(true);

//     // create user 
//     const createUser = (email, password) =>{
//         setLoading(true)
//         return createUserWithEmailAndPassword(auth, email, password)
//     };

//     // sign in user
//     const signIn = (email, password) =>{
//         setLoading(true);
//         return signInWithEmailAndPassword(auth, email, password);
//     };

//     // logOut
//     const logOut = () =>{
//         setLoading(true);
//         return signOut(auth);
//     }

//     // Manage User
//     useEffect(() =>{
//             const unsubscribe = onAuthStateChanged(auth, currentUser =>{
//             setUser(currentUser);
//             console.log('Current User', currentUser);
//             setLoading(false);
//         });
//         return () => {
//             return unsubscribe();
//         }
//     }, []);


//     // auth info
//     const authInfo = {
//         user,
//         loading,
//         createUser,
//         signIn,
//         logOut
//     };


//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;