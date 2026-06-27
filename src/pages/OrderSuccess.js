import React from "react";
import { Link } from "react-router-dom";

import "./OrderSuccess.css";

function OrderSuccess() {

    return (

        <div className="success">

            <h1>🎉 Order Placed Successfully!</h1>

            <p>

                Thank you for shopping with ShopEase.

            </p>

            <p>

                Your order has been placed successfully.

            </p>

            <Link

                to="/"

                className="success__button"

            >

                Continue Shopping

            </Link>

        </div>

    );

}

export default OrderSuccess;