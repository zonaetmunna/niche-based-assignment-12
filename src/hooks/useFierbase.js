import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";
import initializationAuthentication from "../config/Firebase/firebase.init";

// firebase initilization
initializationAuthentication();

const useFirebase = () => {
     const [user, setUser] = useState({});
     const [error, setError] = useState('');
     const [isLoading, setIsLoading] = useState(true);
     const [admin, setAdmin] = useState(false);
     const [token, setToken] = useState('');

     const auth = getAuth();

     // signup handler
     const registerUser = (email, password, name, history) => {
          setIsLoading(true);
          createUserWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                    const newUser = { email, displayName: name }
                    setUser(newUser);
                    setError('')
                    saveUser(email, name, 'POST');
                    updateProfile(auth.currentUser, {
                         displayName: name
                    }).then(() => {

                    }).catch((error) => {

                    });
                    history.replace('/')

               })
               .catch((error) => {
                    setError(error.message);
               })
               .finally(() => setIsLoading(false));
     };
     // login handler
     const loginUser = (email, password, location, history) => {
          setIsLoading(true)
          signInWithEmailAndPassword(auth, email, password)
               .then((userCredential) => {
                    const user = userCredential.user;
                    setUser(user)
                    setError('');

                    // redirect location and history
                    const destination = location?.state?.from || '/';
                    history.replace(destination)

               })
               .catch((error) => {
                    setError(error.message);
               })
               .finally(() => setIsLoading(false));
     }

     // user subscription
     useEffect(() => {
          const unsubscribed = onAuthStateChanged(auth, (user) => {
               if (user) {
                    setUser(user);
                    getIdToken(user)
                         .then(idToken => {
                              setToken(idToken);
                         })
               }
               else {
                    setUser({})
               }
               setIsLoading(false);
          });
          return () => unsubscribed;
     }, [auth])

     // logout handler
     const logOut = () => {
          setIsLoading(true);
          signOut(auth).then(() => {

          })
          .catch((error) => {

          })
          .finally(() => setIsLoading(false))
     }
     // 
     useEffect(() => {
          const url = `https://niche-server-side-project-assignment-12-106e3p4jy-zonaetmunna.vercel.app/users/${user.email}`;
          fetch(url)
          .then(res => res.json())
          .then(data => setAdmin(data.admin));

     }, [user.email])

     // saveUser
     const saveUser = (email, displayName, method) => {

          const user = { email, displayName }
          const url = 'https://niche-server-side-project-assignment-12-106e3p4jy-zonaetmunna.vercel.app/users';
          fetch(url, {
               method: method,
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(user)
          })
               .then(res => res.json())
     }


     return {
          registerUser,
          loginUser,
          user,
          logOut,
          error,
          isLoading,
          admin,
          token
     }

}

export default useFirebase;
