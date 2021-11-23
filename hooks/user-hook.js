import { useState, useEffect, useCallback } from "react";

export const useUser = () => {
    const [userName, setUserName] = useState(null)
    const [email, setEmail] = useState(null);
    const [role, setRole] = useState(null);

    const setUser = useCallback((username, email, role) => {
        setUserName(username);
        setRole(role);
        setEmail(email);
    }, [])

    const clearUser = useCallback(() => {
        setUserName(null);
        setRole(null);
        setEmail(null);
    }, [])

    return {userName, email, role, setUser, clearUser}
}

