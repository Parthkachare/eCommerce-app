import React, { useMemo, useState } from "react";

import useProducts from "../../hooks/useProducts";
import ProductCard from "../ProductCard/ProductCard";
import Loader from "../Loader/Loader";

import "./ProductList.css";

function ProductList() {

    const { products, loading, error } = useProducts();

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const [sort, setSort] = useState("");

    const categories = [
        "All",
        ...new Set(products.map(product => product.category))
    ];

    const filteredProducts = useMemo(() => {

        let data = [...products];

        if (category !== "All") {
            data = data.filter(
                product => product.category === category
            );
        }

        if (search !== "") {
            data = data.filter(product =>
                product.title
                    .toLowerCase()
                    .includes(search.toLowerCase())
            );
        }

        if (sort === "low") {
            data.sort((a, b) => a.price - b.price);
        }

        if (sort === "high") {
            data.sort((a, b) => b.price - a.price);
        }

        return data;

    }, [products, search, category, sort]);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return (
            <h2 className="product-list__message">
                {error}
            </h2>
        );
    }

    return (
        <>
            <div className="filters">

                <input
                    type="text"
                    placeholder="Search Products"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                >
                    {categories.map(item => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>

                <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                >
                    <option value="">Sort</option>
                    <option value="low">Price Low to High</option>
                    <option value="high">Price High to Low</option>
                </select>

            </div>

            <section className="product-list">

                {filteredProducts.map(product => (

                    <ProductCard
                        key={product.id}
                        product={product}
                    />

                ))}

            </section>
        </>
    );

}

export default ProductList;