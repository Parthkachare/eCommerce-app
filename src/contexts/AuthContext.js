import React, {
    createContext,
    useEffect,
    useState
}
from "react";

export const AuthContext =
    createContext();


export function AuthProvider({
    children
}) {

    const [user, setUser] =
        useState(null);

    const [isLoggedIn, setIsLoggedIn] =
        useState(false);


    // ==========================
    // LOAD USER FROM LOCAL STORAGE
    // ==========================

    useEffect(() => {

        const savedUser =
            localStorage.getItem(
                "user"
            );

        if (savedUser) {

            setUser(
                JSON.parse(
                    savedUser
                )
            );

            setIsLoggedIn(
                true
            );

        }

    }, []);


    // ==========================
    // LOGIN
    // ==========================

    function login(
        email,
        password
    ) {

        const currentUser = {

            email,

            password

        };

        setUser(
            currentUser
        );

        setIsLoggedIn(
            true
        );

        localStorage.setItem(

            "user",

            JSON.stringify(
                currentUser
            )

        );

    }


    // ==========================
    // REGISTER
    // ==========================

    function register(
        name,
        email,
        password
    ) {

        const newUser = {

            name,

            email,

            password

        };

        setUser(
            newUser
        );

        setIsLoggedIn(
            true
        );

        localStorage.setItem(

            "user",

            JSON.stringify(
                newUser
            )

        );

    }


    // ==========================
    // LOGOUT
    // ==========================

    function logout() {

        setUser(
            null
        );

        setIsLoggedIn(
            false
        );

        localStorage.removeItem(
            "user"
        );

    }


    return (

        <AuthContext.Provider

            value={{

                user,

                isLoggedIn,

                login,

                register,

                logout

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}