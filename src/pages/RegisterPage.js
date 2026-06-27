import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { AuthContext } from "../contexts/AuthContext";

import "./RegisterPage.css";

function RegisterPage() {

    const navigate = useNavigate();

    const { register } = useContext(AuthContext);

    const [name, setName] = useState("");

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");

    function handleSubmit(event) {

        event.preventDefault();

        if (
            name === "" ||
            email === "" ||
            password === "" ||
            confirmPassword === ""
        ) {

            setError("Please fill all fields.");

            return;

        }

        if (password !== confirmPassword) {

            setError("Passwords do not match.");

            return;

        }

        register(
            name,
            email,
            password
        );

        navigate("/");

    }

    return (

        <div className="register">

            <form
                className="register__form"
                onSubmit={handleSubmit}
            >

                <h2>

                    Register

                </h2>

                {error &&

                    <p className="register__error">

                        {error}

                    </p>

                }

                <input

                    type="text"

                    placeholder="Full Name"

                    value={name}

                    onChange={(event) =>
                        setName(
                            event.target.value
                        )
                    }

                />

                <input

                    type="email"

                    placeholder="Email"

                    value={email}

                    onChange={(event) =>
                        setEmail(
                            event.target.value
                        )
                    }

                />

                <input

                    type="password"

                    placeholder="Password"

                    value={password}

                    onChange={(event) =>
                        setPassword(
                            event.target.value
                        )
                    }

                />

                <input

                    type="password"

                    placeholder="Confirm Password"

                    value={confirmPassword}

                    onChange={(event) =>
                        setConfirmPassword(
                            event.target.value
                        )
                    }

                />

                <button>

                    Register

                </button>

                <p>

                    Already have an account?

                    <Link to="/login">

                        Login

                    </Link>

                </p>

            </form>

        </div>

    );

}

export default RegisterPage;