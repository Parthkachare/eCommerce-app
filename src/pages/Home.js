import React from "react";

import ProductList from "../components/ProductList/ProductList";

function Home() {

    return (

        <>

            <section className="hero">

                <div className="hero__content">

                    <h1>

                        Welcome to ShopEase

                    </h1>

                    <p>

                        Discover the latest fashion, electronics, jewellery and accessories at affordable prices.

                    </p>

                    <a

                        href="#products"

                        className="hero__button"

                    >

                        Shop Now

                    </a>

                </div>

            </section>

            <section id="products">

                <ProductList />

            </section>

        </>

    );

}

export default Home;