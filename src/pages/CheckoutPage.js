import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../contexts/CartContext";

import "./CheckoutPage.css";

function CheckoutPage() {

    const { cartItems, totalPrice, clearCart } = useContext(CartContext);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        pincode: ""
    });

    const [error, setError] = useState("");

    function handleChange(event) {

        setFormData({

            ...formData,

            [event.target.name]: event.target.value

        });

    }

    function handleSubmit(event) {

        event.preventDefault();

        const {

            name,

            email,

            phone,

            address,

            city,

            pincode

        } = formData;

        if (

            !name ||

            !email ||

            !phone ||

            !address ||

            !city ||

            !pincode

        ) {

            setError("Please fill all fields.");

            return;

        }

        clearCart();

        navigate("/success");

    }

    return (

        <div className="checkout-container">

            <div className="checkout-left">

                <h1>Checkout</h1>

                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        onChange={handleChange}
                    />

                    <textarea
                        name="address"
                        placeholder="Delivery Address"
                        rows="4"
                        onChange={handleChange}
                    />

                    <div className="row">

                        <input
                            type="text"
                            name="city"
                            placeholder="City"
                            onChange={handleChange}
                        />

                        <input
                            type="text"
                            name="pincode"
                            placeholder="Pincode"
                            onChange={handleChange}
                        />

                    </div>

                    {error &&

                        <p className="error">

                            {error}

                        </p>

                    }

                    <button>

                        Place Order

                    </button>

                </form>

            </div>

            <div className="checkout-right">

                <h2>Order Summary</h2>

                <hr />

                {

                    cartItems.map(item => (

                        <div
                            key={item.id}
                            className="summary-item"
                        >

                            <img
                                src={item.image}
                                alt={item.title}
                            />

                            <div>

                                <h4>

                                    {item.title}

                                </h4>

                                <p>

                                    Qty : {item.quantity}

                                </p>

                            </div>

                            <strong>

                                ${(item.price * item.quantity).toFixed(2)}

                            </strong>

                        </div>

                    ))

                }

                <hr />

                <h2>

                    Total : ${totalPrice.toFixed(2)}

                </h2>

            </div>

        </div>

    );

}

export default CheckoutPage;