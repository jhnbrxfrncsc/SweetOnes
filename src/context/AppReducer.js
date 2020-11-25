import React from 'react';
import items from './state/data.js';

const cartItems = [
        {
            id: 14,
            name: 'Sweet Item',
            image: "img-cart/sweets-1.jpeg",
            price: 30,
        },
        {
            id: 15,
            name: 'Cake Item',
            image: "img-cart/cake-1.jpeg",
            price: 20,
        },
    ]

export const INITIAL_STATE = {
    items: items,
    cartItems: cartItems,
    isCartOpen: false,
}


export const AppReducer = (state, action) => {
    switch (action.type) {
        case "FILTER_ITEM":
            const newItems = items.filter(item => item.category.indexOf(action.payload) >= 0);
            return { ...state,
                items: newItems,
            };

        case "SHOW_CART":
            return { ...state,
                isCartOpen: !state.isCartOpen,
            };

        default:
            return state;
    }
}
