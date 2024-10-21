
export const authHeader = () => {
    const token = localStorage.getItem("token");  // Busca el token en el localStorage
    if (token) {
        return { Authorization: `Bearer ${token}` };  // Retorna el header con el token
    } else {
        return {};  // Si no hay token, devuelve un objeto vacío
    }
};