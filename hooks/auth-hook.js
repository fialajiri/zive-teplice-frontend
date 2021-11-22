import { useState, useEffect, useCallback } from "react";

let logoutTimer;

export  const useAuth = () => {
  const [token, setToken] = useState(false);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();
  const [adminId, setAdminId] = useState(null);
  const [userRole, setUserRole] = useState('')

  const login = useCallback((token, role) => {
    console.log(role)
    console.log(token)
    setToken(token);    
    setUserRole(role)
    
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    
    setAdminId(null);
    
  }, []);

  // useEffect(() => {
  //   if (token && tokenExpirationDate) {
  //     const remainingTime =
  //       tokenExpirationDate.getTime() - new Date().getTime();
  //     logoutTimer = setTimeout(logout, remainingTime);
  //   } else {
  //     clearTimeout(logoutTimer);
  //   }
  // }, [token, logout, tokenExpirationDate]);

  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem("userData"));
  //   if (
  //     storedData &&
  //     storedData.token &&
  //     new Date(storedData.expiration) > new Date()
  //   ) {
  //     login(
  //       storedData.adminId,
  //       storedData.token,
  //       new Date(storedData.expiration)
  //     );
  //   }
  // }, [login]);

  return {token, login, logout, adminId, userRole}
};
