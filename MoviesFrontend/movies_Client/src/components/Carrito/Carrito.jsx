import React, { useState, useEffect } from 'react';
import './Carrito.css';
import { useDispatch } from 'react-redux';
import { createOrders } from '../../Redux/orderSlice';

const Carrito = () => {
    const [cart, setCart] = useState([]);
    const [userEmail, setUserEmail] = useState('');
    const [orderConfirmation, setOrderConfirmation] = useState(null);
    const [error, setError] = useState(""); // Estado para el mensaje de error

    const dispatch = useDispatch();

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

    const handleCheckout = async (e) => { // Función para procesar la compra
        e.preventDefault();

        const token = localStorage.getItem('token');
        if (!token) {
            window.location.href = "/login"; // Redirige a login si no está loggeado
        } else {
            // Crear lista de títulos de películas con cantidades
            const movieTitles = [];
            cart.forEach(item => {
                for (let i = 0; i < item.quantity; i++) {
                    movieTitles.push(item.title);
                }
            });

            try{
                // Preparar la solicitud de compra
                const orderRequest = {
                    user: { email: userEmail },
                    movies: movieTitles,
                };

                // Enviar solicitud de compra al backend
                const response = await dispatch(createOrders(orderRequest)).unwrap();
                if (response) {
                    console.log('Orden creada:', response);
                    setOrderConfirmation(response); // Mostrar la orden creada
                    // Limpiar carrito tras la compra
                    setCart([]);
                    localStorage.removeItem('cart');
                }
            } catch (error) {
                console.error("Error:", error);
                console.error("Error response:", error.response?.data);
                setError("Error al procesar la compra. Película sin stock suficiente.");
            }
        }
    };

    return (
        <>
            <div className="cart-container">
                <h1>Tu carrito</h1>
                {cart.length === 0 ? (
                    <p className='CarritoVacio'>Tu carrito está vacío.</p>
                ) : (
                    <>
                        {cart.map((item) => (
                            <div className="cart-item" key={item.movieId}>
                                <img src={item.poster} alt={item.title} className="cart-item-poster" />
                                <div className="cart-item-info">
                                    <h2>{item.title}</h2>
                                    <p>Precio: ${(item.price - (item.price * (item.discountPercentage / 100))).toFixed(2)}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => updateQuantity(item.movieId, -1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.movieId, 1)}>+</button>
                                    </div>
                                    <button onClick={() => removeFromCart(item.movieId)} className="eliminar-btn">Quitar</button>
                                </div>
                            </div>
                        ))}
                        <div className="precio-total">
                            <p>Total: ${cart.reduce((acc, item) => acc + (item.price - (item.discountPercentage * item.price / 100))* item.quantity, 0).toFixed(2)}</p>
                        </div>
                        {error && <p className= "error">{error}</p>} {/* Muestra el mensaje de error */}
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
                            <p>Total: ${orderConfirmation.amount.toFixed(2)}</p>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Carrito;