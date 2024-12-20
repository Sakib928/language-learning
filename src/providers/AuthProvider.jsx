import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [reload, setReload] = useState(false);
  const logout = () => {
    localStorage.clear();
    window.location.reload();
  };

  const authInfo = {
    user,
    setUser,
    reload,
    setReload,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
