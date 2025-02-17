import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth, googleProvider } from "./firebase_config";
import useAxiosPublic from "../Hooks/useAxiosPublic";

export let AuthContext = createContext(null);

function AuthProvider({ children }) {
  let [user, setUser] = useState();
  let [loading, setLoading] = useState(true);
  let axiosPublic = useAxiosPublic();

  let authInfo = {
    user,
    loading,
    signUp,
    signIn,
    logOut,
    updateUser,
    googleAuth,
  };

  function signUp(email, pass) {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  }
  function signIn(email, pass) {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  }
  function logOut() {
    return signOut(auth);
  }
  function updateUser(name, image) {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    });
  }

  function googleAuth() {
    return signInWithPopup(auth, googleProvider);
  }
  //on state change
  useEffect(() => {
    let unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);

      if (user) {
        axiosPublic
          .post("/jwt", { email: user?.email })
          .then((res) => {
            localStorage.setItem("access-token", res.data?.token);
            setLoading(false);
          })
          .catch((err) => console.log(err));
      }
    });
    return () => {
      unsubscribe();
    };
  }, [axiosPublic]);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
