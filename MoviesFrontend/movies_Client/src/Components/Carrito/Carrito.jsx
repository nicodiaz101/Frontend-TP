import React, { useState, useEffect } from 'react';
import './Carrito.css';

const Carrito = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, []);

    const removeFromCart = (movieId) => {
        const updatedCart = cart.filter(item => item.movieId !== movieId);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const updateQuantity = (movieId, quantity) => {
        const updatedCart = cart.map(item =>
            item.movieId === movieId ? { ...item, quantity: item.quantity + quantity } : item
        ).filter(item => item.quantity > 0);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };

    const handleCheckout = () => {
        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = "/login"; // Redirige a login si no está loggeado
        } else {
            // LOGICA PARA PROCESAR LA COMPRA A IMPLEMENTAR
            alert("Compra procesada!");
        }
    };

    return (
        <>
            <div className="cart-container">
                <h1>Tu carrito</h1>
                {cart.length === 0 ? (
                    <p>Tu carrito está vacío.</p>
                ) : (
                    <>
                        {cart.map((item) => (
                            <div className="cart-item" key={item.movieId}>
                                <img src={item.poster} alt={item.title} className="cart-item-poster" />
                                <div className="cart-item-info">
                                    <h2>{item.title}</h2>
                                    <p>Precio: ${item.price}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.movieId, -1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.movieId, 1)}>+</button>
                                    </div>
                                    <button onClick={() => removeFromCart(item.movieId)} className="remove-btn">Quitar</button>
                                </div>
                            </div>
                        ))}
                        <button className="checkout-btn" onClick={handleCheckout}>Realizar compra</button>
                    </>
                )}
            </div>
        </>
    );
};

export default Carrito;
