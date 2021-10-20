import { getAuth, signInWithPopup, GoogleAuthProvider,createUserWithEmailAndPassword,signOut,onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAthuntication from "../Pages/LogIn/Firebase/Firebase.init";
initializeAthuntication();
const useFirebase =()=>{
    const [user,setUser]=useState({});
    const [error,setError]=useState({})
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    // google signin system 
    const signInUsingGoogle=()=>{
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user);
        })
        .catch(error=>{
            setError(error.message)
        })
        .finally(() => setIsLoading(false));
    }
    // email and password system 
    const signUpUsingEmail=(email,password)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then(result=>{
            setUser(result.user)
            setError('')
        })
        
        .catch(error=>{
            setError(error.message);
        })
        .finally(() => setIsLoading(false));

    }
    const signInUsingEmail=(email,password)=>{
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
            setUser(result.user)
            setError('')

        })
        .catch(error=>{
       setError(error)
       setError("You have no account")
        })
        .finally(() => setIsLoading(false));

    }
    //Observer state chenge
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])
   
//   signOut sytem 
 const logOut =()=>{
    setIsLoading(true);
    signOut(auth)
    .then(()=>{})
    .catch(error=>{
        setError(error.message)
    })
 }
    return {
        user,
        error,
        isLoading,
        signInUsingEmail,
        signInUsingGoogle,
        signUpUsingEmail,
        logOut
    }
}

export default useFirebase;