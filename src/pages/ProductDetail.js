import React, {
    useContext,
    useEffect,
    useState
} from "react";

import {
    useParams
} from "react-router-dom";

import {
    fetchSingleProduct
} from "../services/api";

import {
    CartContext
} from "../contexts/CartContext";


function ProductDetail() {

    const { id } =
        useParams();

    const {
        addToCart
    } = useContext(
        CartContext
    );

    const [product, setProduct] =
        useState(null);

    const [loading, setLoading] =
        useState(true);


    useEffect(() => {

        async function loadProduct() {

            const data =
                await fetchSingleProduct(
                    id
                );

            setProduct(
                data
            );

            setLoading(
                false
            );

        }

        loadProduct();

    }, [id]);


    if (loading) {

        return <h2>Loading...</h2>;

    }


    return (

        <section
            className="product-detail"
        >

            <img

                src={product.image}

                alt={product.title}

                width="250"

            />

            <h1>

                {product.title}

            </h1>

            <h2>

                ${product.price}

            </h2>

            <p>

                {product.description}

            </p>

            <button

                onClick={() =>
                    addToCart(product)
                }

            >

                Add To Cart

            </button>

        </section>

    );

}

export default ProductDetail;