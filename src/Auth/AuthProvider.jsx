import { createContext } from "react";

export let AuthContext = createContext(null);

function AuthProvider({ children }) {
  let authInfo = {
    user: "Razu",
  };

  function signUp(email, pass) {
    console.log("register now");
  }
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
