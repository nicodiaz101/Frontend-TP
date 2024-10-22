import React, { useState, useEffect } from 'react';
import './Carrito.css';

const Carrito = () => {
    const [cart, setCart] = useState([]);
    const [userEmail, setUserEmail] = useState('');
    const [orderConfirmation, setOrderConfirmation] = useState(null);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', {
            weekday: 'long',  // Lunes, Martes...
            year: 'numeric',  // Año completo
            month: 'long',    // Mes completo (Enero, Febrero...)
            day: 'numeric',   // Día del mes
            hour: '2-digit',  // Hora con dos dígitos
            minute: '2-digit' // Minutos con dos dígitos
        });
    };

    // Obtener carrito de localStorage
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
        // Obtener el email directamente del localStorage
        const email = localStorage.getItem('email');
        if (email) {
            setUserEmail(email); // Guardar email en el estado
        }
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
            // Crear lista de títulos de películas
            const movieTitles = cart.map(item => item.title);

            // Preparar la solicitud de compra
            const orderRequest = {
                user: { email: userEmail },
                movies: movieTitles,
            };

            // Enviar solicitud de compra al backend
            fetch('http://localhost:4002/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` // Si necesitas token para la autenticación
                },
                body: JSON.stringify(orderRequest),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Orden creada:', data);
                    setOrderConfirmation(data); // Mostrar la orden creada
                    // Limpiar carrito tras la compra
                    setCart([]);
                    localStorage.removeItem('cart');
                })
                .catch(error => alert('Error al procesar la compra:', error));
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
                {/* Mostrar detalles de la orden tras el checkout */}
                {orderConfirmation && (
                    <div className="order-confirmation">
                        <h2>¡Compra realizada con éxito!</h2>
                        <p>Orden ID: {orderConfirmation.orderId}</p>
                        <p>Fecha: {formatDate(orderConfirmation.orderDate)}</p>
                        <div className="precio">
                            <p>Total: ${orderConfirmation.amount}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Carrito;