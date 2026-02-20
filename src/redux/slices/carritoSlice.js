import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productos: [],
};

export const carritoSlice = createSlice({
    name: "carrito",
    initialState,
    reducers: {
        updateCart: (state, action) => {
            const { id, imagen, titulo, descripcion, precioUnitario, cantidad } = action.payload;

            // Buscar si el producto ya existe
            const productoExistente = state.productos.find((p) => p.id === id);

            if (productoExistente) {
                // Si existe, actualizar cantidad
                if (cantidad > 0) {
                    productoExistente.cantidad = cantidad;
                } else {
                    // Si cantidad es 0, eliminar del carrito
                    state.productos = state.productos.filter((p) => p.id !== id);
                }
            } else if (cantidad > 0) {
                // Si no existe y cantidad > 0, agregar nuevo producto
                state.productos.push({
                    id,
                    imagen,
                    titulo,
                    descripcion,
                    precioUnitario,
                    cantidad,
                });
            }

            // Guardar en sessionStorage
            sessionStorage.setItem("carrito", JSON.stringify(state.productos));
        },

        clearCart: (state) => {
            state.productos = [];
            sessionStorage.removeItem("carrito");
        },



        loadFromSession: (state) => {
            const saved = sessionStorage.getItem("carrito");
            if (saved) {
                state.productos = JSON.parse(saved);
            }
        },
    },
});

export const { updateCart, clearCart, loadFromSession } = carritoSlice.actions;

export const selectCantidadPorId = (state, id) => {
  const producto = state.carrito.productos.find((p) => p.id === id);
  return producto ? producto.cantidad : 0;
};

export const selectTotal = (state) => {
    return state.carrito.productos.reduce(
        (total, p) => total + p.precioUnitario * p.cantidad,
        0
    );
};

export const selectCarrito = (state) => state.carrito.productos;

export default carritoSlice.reducer;