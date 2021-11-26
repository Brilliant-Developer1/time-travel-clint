import { useEffect, useState } from "react"
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init'
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, GoogleAuthProvider, signOut,signInWithPopup ,onAuthStateChanged, updateProfile,} from "firebase/auth"

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    const signinUsingGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const user = result.user;
            saveUser(user.email, user.displayName, 'PUT')
            setAuthError('');
            const destination = location?.state?.from || '/';
             history.replace(destination); // for redirect
        })
        .catch((error) => {
            setAuthError(error.message) ;
        })
        .finally(() => setIsLoading(false));
    }

    const registerUser = (name, email, password,history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            setAuthError('');
            const newUser = {email, displayName: name};
            setUser(newUser)
            //save User to Data base
            saveUser(email, name, 'POST')
            //send name to firebase after user created
            updateProfile(auth.currentUser, {
                displayName:name
            }) 
            .then(() => {
                // Profile Updated
            })
            .catch((error) => {
                setAuthError(error.message) ;
            })
            history.replace('/')
          })
          .catch((error) => {
            setAuthError(error.message) ;
          })
          .finally(() => setIsLoading(false));
    }
    const loginUser = (email, password ,location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
             const destination = location?.state?.from || '/';
             history.replace(destination); // for redirect
            setAuthError('');
        })
        .catch((error) => {
            setAuthError(error.message) ;
        })
        .finally(() => setIsLoading(false));
    }
    // check user is Admin or not
    useEffect( () => {
        fetch(`https://pure-springs-17814.herokuapp.com/users/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
        .then(() => {
            setUser({});
            alert('Sign-out Successfully')
        })
        .finally(() => setIsLoading(false))
    }

    const saveUser = (email, displayName, method) => { // to save the user to DB
        const user = {email, displayName}
        fetch('https://pure-springs-17814.herokuapp.com/users', {
            method: method,
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then()
    }
    // To Check if the user is signed In or not
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, user => {
        if(user){
            setUser(user)
        }
        else{
            setUser({})
        }
        setIsLoading(false)
       }) 
       return () => unsubscribe;
    }, [auth])
    return {
        user,
        admin,
        signinUsingGoogle,
        registerUser,
        loginUser,
        logout,
        authError,
        isLoading
    }
}
export default useFirebase;