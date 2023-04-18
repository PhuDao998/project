import React, { useContext, useState, useEffect } from "react";
import Cookies from 'universal-cookie';

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const cookies = new Cookies();
    const [currentUser, setCurrentUser] = useState();
    const [loading, setLoading] = useState(false);
    const serverUrl = process.env.REACT_APP_SERVER_DOMAIN;

    async function signup(email, password) {
        let req = await fetch(`${serverUrl}/api/v1/user/create`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                password
            })
        });
        let res = await req.json();
        return res;
    }

    async function login(email, password) {
        let req = await fetch(`${serverUrl}/api/v1/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: "donglt12345@gmail.com",
                password: "123456"
            })
        });
        let res = await req.json();
        if (res.refreshToken && res.user) {
            cookies.set("refreshToken", res.refreshToken, { path: "/" });
            cookies.set("accessToken", res.accessToken, { path: "/" });
            setCurrentUser(res.user);
        }
        return res;
    }

    async function logout() {
        await fetch(`${serverUrl}/api/v1/auth/logout`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: currentUser.email,
                refreshToken: "123"
            })
        });
        cookies.remove('refreshToken');
        cookies.remove('accessToken');
        setCurrentUser(null);
    }

    // function resetPassword(email) {
    //     return auth.sendPasswordResetEmail(email);
    // }

    // function updateEmail(email) {
    //     return currentUser.updateEmail(email);
    // }

    // function updatePassword(password) {
    //     return currentUser.updatePassword(password);
    // }

    useEffect(() => {
        console.log(' verify user')
    }, []);

    const value = {
        currentUser,
        login,
        signup,
        logout,
        // resetPassword,
        // updateEmail,
        // updatePassword
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}