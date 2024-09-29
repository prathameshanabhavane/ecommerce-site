import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const itemExists = state.find(item => item.id === action.payload.id);
            if (itemExists) {
                return state;
            }
            return [...state, { ...action.payload, quantity: 1 }];

        case 'INCREASE_QUANTITY':
            const increaseIndex = state.findIndex(item => item.id === action.payload.id);
            
            if (increaseIndex !== -1) {
                const updatedCart = [...state];
                updatedCart[increaseIndex] = {
                    ...updatedCart[increaseIndex],
                    quantity: updatedCart[increaseIndex].quantity + 1,
                };
                return updatedCart;
            }

            return state;
        case 'DECREASE_QUANTITY':
            const decreaseIndex = state.findIndex(item => item.id === action.payload.id);
            
            if (decreaseIndex !== -1) {
                const updatedCart = [...state];
                
                // Check if quantity is 1, if yes, remove the item from the cart
                if (updatedCart[decreaseIndex].quantity === 1) {
                    return state.filter(item => item.id !== action.payload.id);
                }
                
                // Otherwise, decrease the quantity
                updatedCart[decreaseIndex] = {
                    ...updatedCart[decreaseIndex],
                    quantity: updatedCart[decreaseIndex].quantity - 1,
                };
                return updatedCart;
            }

            return state;

        case 'REMOVE_FROM_CART':
            return state.filter(item => item.id !== action.payload.id);

        case 'CLEAR_CART':
            return [];

        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, []);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
