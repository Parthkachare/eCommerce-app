import React, {
    createContext,
    useEffect,
    useState
}
from "react";

export const CartContext =
    createContext();


export function CartProvider({
    children
}) {

    const [cartItems, setCartItems] =
        useState(() => {

            const savedCart =
                localStorage.getItem(
                    "cart"
                );

            return savedCart
                ? JSON.parse(savedCart)
                : [];

        });


    // ==========================
    // SAVE CART TO LOCAL STORAGE
    // ==========================

    useEffect(() => {

        localStorage.setItem(

            "cart",

            JSON.stringify(
                cartItems
            )

        );

    }, [cartItems]);


    // ==========================
    // ADD TO CART
    // ==========================

    function addToCart(product) {

        const existingItem =
            cartItems.find(

                item =>
                    item.id ===
                    product.id

            );

        if (existingItem) {

            const updatedCart =
                cartItems.map(

                    item =>

                        item.id ===
                        product.id

                            ?

                            {
                                ...item,

                                quantity:
                                    item.quantity + 1
                            }

                            :

                            item

                );

            setCartItems(
                updatedCart
            );

        }

        else {

            setCartItems([

                ...cartItems,

                {

                    ...product,

                    quantity: 1

                }

            ]);

        }

    }


    // ==========================
    // REMOVE PRODUCT
    // ==========================

    function removeFromCart(
        id
    ) {

        const updatedCart =
            cartItems.filter(

                item =>
                    item.id !==
                    id

            );

        setCartItems(
            updatedCart
        );

    }


    // ==========================
    // INCREASE QUANTITY
    // ==========================

    function increaseQuantity(
        id
    ) {

        const updatedCart =
            cartItems.map(

                item =>

                    item.id ===
                    id

                        ?

                        {

                            ...item,

                            quantity:
                                item.quantity + 1

                        }

                        :

                        item

            );

        setCartItems(
            updatedCart
        );

    }


    // ==========================
    // DECREASE QUANTITY
    // ==========================

    function decreaseQuantity(
        id
    ) {

        const updatedCart =
            cartItems.map(

                item =>

                    item.id ===
                    id

                        ?

                        {

                            ...item,

                            quantity:
                                item.quantity > 1
                                    ? item.quantity - 1
                                    : 1

                        }

                        :

                        item

            );

        setCartItems(
            updatedCart
        );

    }


    // ==========================
    // TOTAL PRICE
    // ==========================

    const totalPrice =
        cartItems.reduce(

            (total, item) =>

                total +
                item.price *
                item.quantity,

            0

        );


    // ==========================
    // CLEAR CART
    // ==========================

    function clearCart() {

        setCartItems([]);

    }


    return (

        <CartContext.Provider

            value={{

                cartItems,

                addToCart,

                removeFromCart,

                increaseQuantity,

                decreaseQuantity,

                totalPrice,

                clearCart

            }}

        >

            {children}

        </CartContext.Provider>

    );

}