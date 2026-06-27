import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../../contexts/CartContext";

import "./Cart.css";

function Cart() {

    const {

        cartItems,

        removeFromCart,

        increaseQuantity,

        decreaseQuantity,

        totalPrice

    } = useContext(CartContext);

    if (cartItems.length === 0) {

        return (

            <div className="cart-empty">

                <h1>Your Cart is Empty</h1>

                <p>Add some products to continue shopping.</p>

                <Link to="/" className="shop-btn">

                    Continue Shopping

                </Link>

            </div>

        );

    }

    return (

        <div className="cart-container">

            <div className="cart-left">

                <h1>Shopping Cart</h1>

                {

                    cartItems.map(item => (

                        <div
                            key={item.id}
                            className="cart-card"
                        >

                            <img
                                src={item.image}
                                alt={item.title}
                                className="cart-image"
                            />

                            <div className="cart-info">

                                <h3>{item.title}</h3>

                                <p className="category">

                                    {item.category}

                                </p>

                                <h2>

                                    ${item.price}

                                </h2>

                            </div>

                            <div className="cart-actions">

                                <div className="qty">

                                    <button
                                        onClick={() =>
                                            decreaseQuantity(item.id)
                                        }
                                    >

                                        -

                                    </button>

                                    <span>

                                        {item.quantity}

                                    </span>

                                    <button
                                        onClick={() =>
                                            increaseQuantity(item.id)
                                        }
                                    >

                                        +

                                    </button>

                                </div>

                                <button

                                    className="remove-btn"

                                    onClick={() =>
                                        removeFromCart(item.id)
                                    }

                                >

                                    Remove

                                </button>

                            </div>

                        </div>

                    ))

                }

            </div>

            <div className="cart-right">

                <h2>Order Summary</h2>

                <hr />

                <p>

                    Items :

                    <strong>

                        {cartItems.length}

                    </strong>

                </p>

                <p>

                    Total :

                    <strong>

                        ${totalPrice.toFixed(2)}

                    </strong>

                </p>

                <Link

                    to="/checkout"

                    className="checkout-btn"

                >

                    Proceed To Checkout

                </Link>

            </div>

        </div>

    );

}

export default Cart;