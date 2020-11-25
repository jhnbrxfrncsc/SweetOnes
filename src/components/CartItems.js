import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function CartItem() {
    const { deleteCartItem, cartItems, clearCart, totalPrice } = useContext(GlobalContext);
    return (
        <Fragment>
            {
                cartItems.map((item) => {
                    return (
                        <div key={item.id} className="cart-item d-flex justify-content-between text-capitalize my-3">
                            <img 
                                src={item.image}
                                className="img-fluid rounded-circle" 
                                id="item-img" 
                                alt={item.name} 
                            />
                            
                            <div className="item-text">
                                <p id="cart-item-title" className="font-weight-bold mb-0">
                                    {item.name}
                                </p>
                                <span id="cart-item-price" className="cart-item-price" className="mb-0">
                                    {`₱ ${item.price}`}
                                </span>
                            </div>
                            
                            <a
                                href="#"
                                className="cart-item-remove"
                                onClick={() => deleteCartItem(item.id)}
                            >
                                <i className="fas fa-trash"></i>
                            </a>
                            
                        </div>
                    )
                })
            }
            
            <div className="cart-total-container d-flex justify-content-around text-capitalize mt-5">
                <h5>total</h5>
                <h5>
                    <strong id="cart-total" className="font-weight-bold">
                        {`₱ ${Number(totalPrice)}`}
                    </strong> 
                </h5>
            </div>
            <div className="cart-buttons-container mt-3 d-flex justify-content-between">
                <a 
                    href="#" 
                    className="btn btn-outline-secondary btn-black text-uppercase"
                    onClick={() => clearCart()}
                >
                    clear cart
                </a>
                <button 
                    type="submit" 
                    className="btn btn-outline-secondary text-uppercase btn-pink"
                >
                    checkout
                </button>
            </div>
        </Fragment>
    )
}

export default CartItem;
