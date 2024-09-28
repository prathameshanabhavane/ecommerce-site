import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const itemExists = state.find(item => item.id === action.payload.id);
            if (itemExists) {
                return state;
            }
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);
    // console.log(cart);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
