const BASE_URL =
    "https://fakestoreapi.com/products";


// ==========================
// GET ALL PRODUCTS
// ==========================

export async function fetchProducts() {

    try {

        const response =
            await fetch(
                BASE_URL
            );

        if (!response.ok) {

            throw new Error(
                "Unable to fetch products."
            );

        }

        const data =
            await response.json();

        return data;

    }

    catch (error) {

        console.error(
            error.message
        );

        return [];

    }

}


// ==========================
// GET SINGLE PRODUCT
// ==========================

export async function fetchSingleProduct(
    id
) {

    try {

        const response =
            await fetch(
                `${BASE_URL}/${id}`
            );

        if (!response.ok) {

            throw new Error(
                "Unable to fetch product."
            );

        }

        const data =
            await response.json();

        return data;

    }

    catch (error) {

        console.error(
            error.message
        );

        return null;

    }

}


// ==========================
// GET CATEGORIES
// ==========================

export async function fetchCategories() {

    try {

        const response =
            await fetch(
                `${BASE_URL}/categories`
            );

        if (!response.ok) {

            throw new Error(
                "Unable to fetch categories."
            );

        }

        const data =
            await response.json();

        return data;

    }

    catch (error) {

        console.error(
            error.message
        );

        return [];

    }

}