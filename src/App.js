import React, { Suspense, lazy } from "react";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Loader from "./components/Loader/Loader";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";

const Home = lazy(() => import("./pages/Home"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const Profile = lazy(() => import("./pages/Profile"));
const OrderSuccess = lazy(() => import("./pages/OrderSuccess"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {

    return (

        <AuthProvider>

            <CartProvider>

                <BrowserRouter>

                    <Navbar />

                    <Suspense fallback={<Loader />}>

                        <Routes>

                            <Route
                                path="/"
                                element={<Home />}
                            />

                            <Route
                                path="/product/:id"
                                element={<ProductDetail />}
                            />

                            <Route
                                path="/cart"
                                element={<CartPage />}
                            />

                            <Route
                                path="/login"
                                element={<LoginPage />}
                            />

                            <Route
                                path="/register"
                                element={<RegisterPage />}
                            />

                            <Route
                                path="/profile"
                                element={
                                    <ProtectedRoute>
                                        <Profile />
                                    </ProtectedRoute>
                                }
                            />

                            <Route
                                path="/checkout"
                                element={
                                    <ProtectedRoute>
                                        <CheckoutPage />
                                    </ProtectedRoute>
                                }
                            />

                            <Route
                                path="/success"
                                element={<OrderSuccess />}
                            />

                            <Route
                                path="*"
                                element={<NotFound />}
                            />

                        </Routes>

                    </Suspense>

                    <Footer />

                </BrowserRouter>

            </CartProvider>

        </AuthProvider>

    );

}

export default App;