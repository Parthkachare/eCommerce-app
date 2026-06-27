import React, {
    useState
}
from "react";

import "./Checkout.css";


function Checkout() {

    const [formData, setFormData] =
        useState({

            name: "",

            email: "",

            address: ""

        });


    function handleChange(
        event
    ) {

        setFormData({

            ...formData,

            [event.target.name]:
                event.target.value

        });

    }


    function handleSubmit(
        event
    ) {

        event.preventDefault();

        alert(
            "Order placed successfully."
        );

    }


    return (

        <div className="checkout">

            <h1>

                Checkout

            </h1>

            <form

                onSubmit={
                    handleSubmit
                }

            >

                <input

                    type="text"

                    name="name"

                    placeholder="Name"

                    onChange={
                        handleChange
                    }

                />

                <input

                    type="email"

                    name="email"

                    placeholder="Email"

                    onChange={
                        handleChange
                    }

                />

                <textarea

                    name="address"

                    placeholder="Address"

                    onChange={
                        handleChange
                    }

                />

                <button>

                    Place Order

                </button>

            </form>

        </div>

    );

}

export default Checkout;