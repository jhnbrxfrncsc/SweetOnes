import React, { createContext, useReducer, useState, useEffect } from 'react';
import {INITIAL_STATE, AppReducer} from './AppReducer';

export const GlobalContext = createContext(INITIAL_STATE);


export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, INITIAL_STATE);
    const [cart, setCart] = useState({
        items: state.cartItems,
        total_price: 0,
    });

    useEffect( () => {
        const itemPrices = cart.items.map( item => {
            return item.price;
        });
        
        const totalMoney = itemPrices.reduce( (total, item) => {
                total += item;
                return total;
        }, 0);

        setCart({
            ...cart,
            total_price: totalMoney,
        });
    }, [cart.total_price]);
    
    const clearCart = () => {
        setCart({
            items: [],
            total_price: 0,
        })
    }

    const deleteCartItem = (idd) => {
        const newData = cart.items.filter((item)=> item.id !== idd);
        setCart({
            items: newData,
        })
    }

    const addItemToCart = (name, image, price) => {
        setCart({
            items: [...cart.items,
                {
                    id: new Date().getTime().toString(),
                    name,
                    image,
                    price,
                }
            ]
        })
    }

    const handleFilter = (name) => {
        dispatch({
            type:"FILTER_ITEM",
            payload: name
        })
    }

    const showCart = () => {
        dispatch({
            type:"SHOW_CART",
        })
    }

    return(
        <GlobalContext.Provider value={
            {
                items: state.items,
                cartItems: cart.items,
                totalPrice: cart.total_price,
                isCartOpen: state.isCartOpen,
                handleFilter,
                addItemToCart,
                deleteCartItem,
                clearCart,
                showCart,
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}


