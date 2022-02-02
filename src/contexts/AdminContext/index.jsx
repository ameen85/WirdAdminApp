import React, { useEffect, useContext, useState } from "react";
import cookie from "react-cookies";
import { login } from "services/auth";

export const AdminContext = React.createContext();
function AdminProvider({ children }) {
  const [IsLogdedIn, setIsLogdedIn] = useState(false);

  useEffect(() => {
    const token = cookie.load("token");
    // console.log("userCookie >>> ", token);
    if (token) {
      setIsLogdedIn(true);
    }
  }, []);
  let state = {
    AdminContext,
    IsLogdedIn,
    login,
    logout,
  };
  return (
    // TODO : add usecallback and memo to avoid re-rendering and read from the cache.
    <AdminContext.Provider value={state}>
      {" "}
      // to check if didn't work put empty object
      {children}
    </AdminContext.Provider>
  );
}
export default AdminProvider;

export function logout() {
  cookie.remove("token");
  return "loged out successfully";
}
