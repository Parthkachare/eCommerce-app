import React, {
    useContext,
    useState
}
from "react";

import { Link } from "react-router-dom";

import {
    CartContext
}
from "../../contexts/CartContext";

import "./ProductCard.css";


function ProductCard({
    product
}) {

    const {
        addToCart
    } = useContext(
        CartContext
    );

    const [isAdding, setIsAdding] =
        useState(
            false
        );


    async function handleAddToCart() {

        setIsAdding(
            true
        );

        addToCart({

            id: product.id,

            title: product.title,

            price: product.price,

            image: product.image

        });

        setTimeout(() => {

            setIsAdding(
                false
            );

        }, 500);

    }


    return (

        <div className="product-card">

            <Link
                to={`/product/${product.id}`}
            >

                <div className="product-card__image">

                    <img
                        src={product.image}
                        alt={product.title}
                        loading="lazy"
                    />

                </div>

            </Link>


            <div className="product-card__content">

                <h3 className="product-card__title">

                    {product.title}

                </h3>


                <p className="product-card__category">

                    {product.category}

                </p>


                <div className="product-card__rating">

                    {"★".repeat(

                        Math.round(
                            product.rating.rate
                        )

                    )}

                </div>


                <h2 className="product-card__price">

                    ${product.price}

                </h2>


                <button

                    className="product-card__button"

                    onClick={
                        handleAddToCart
                    }

                    disabled={
                        isAdding
                    }

                >

                    {

                        isAdding

                            ?

                            "Adding..."

                            :

                            "Add To Cart"

                    }

                </button>

            </div>

        </div>

    );

}


export default ProductCard;