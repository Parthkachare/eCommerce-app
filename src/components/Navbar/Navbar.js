import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";
import { AuthContext } from "../../contexts/AuthContext";

import "./Navbar.css";

function Navbar() {

    const {

        cartItems

    } = useContext(CartContext);

    const {

        user,

        isLoggedIn,

        logout

    } = useContext(AuthContext);

    return (

        <header className="navbar">

            <div className="navbar__logo">

                <Link

                    to="/"

                    className="navbar__logo-link"

                >

                    ShopEase

                </Link>

            </div>

            <nav className="navbar__menu">

                <Link

                    to="/"

                    className="navbar__link"

                >

                    Home

                </Link>

                <Link

                    to="/cart"

                    className="navbar__link"

                >

                    Cart

                    <span className="navbar__count">

                        {cartItems.length}

                    </span>

                </Link>

                {

                    isLoggedIn

                        ?

                        <>

                            <span className="navbar__user">

                                Welcome {user?.name || "User"}

                            </span>

                            <button

                                className="navbar__logout"

                                onClick={logout}

                            >

                                Logout

                            </button>

                        </>

                        :

                        <>

                            <Link

                                to="/login"

                                className="navbar__link"

                            >

                                Login

                            </Link>

                            <Link

                                to="/register"

                                className="navbar__link"

                            >

                                Register

                            </Link>
                            <Link
    to="/profile"
    className="navbar__link"
>
    Profile
</Link>

                        </>

                }

            </nav>

        </header>

    );

}

export default Navbar;