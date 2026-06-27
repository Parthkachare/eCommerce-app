import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

import "./LoginPage.css";

function LoginPage() {

    const navigate = useNavigate();

    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [error, setError] = useState("");

    function handleSubmit(event) {

        event.preventDefault();

        if (email.trim() === "" || password.trim() === "") {

            setError("Please fill all fields.");

            return;

        }

        login(email, password);

        navigate("/");

    }

    return (

        <div className="login">

            <form
                className="login__form"
                onSubmit={handleSubmit}
            >

                <h2>Login</h2>

                {error && <p className="login__error">{error}</p>}

                <input

                    type="email"

                    placeholder="Email"

                    value={email}

                    onChange={(event) =>
                        setEmail(event.target.value)
                    }

                />

                <input

                    type="password"

                    placeholder="Password"

                    value={password}

                    onChange={(event) =>
                        setPassword(event.target.value)
                    }

                />

                <button>

                    Login

                </button>

                <p>

                    Don't have an account?

                    <Link to="/register">

                        Register

                    </Link>

                </p>

            </form>

        </div>

    );

}

export default LoginPage;