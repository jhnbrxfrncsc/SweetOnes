import React, { Fragment, useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function Item({name, image, price, category}) {
    const currency = (num) => {
        return `₱ ${Number(num.toFixed().toLocaleString())}`; 
    }

    const { addItemToCart } = useContext(GlobalContext);

    return (
        <Fragment>
                <div className="card">
                    <div className="img-container">
                        <img 
                            src={image} 
                            className="card-img-top store-img" 
                            alt={name} 
                        />
                        <button 
                            style = {{ cursor: "pointer" }}
                            className="store-item-icon"
                            onClick={() => {
                                const cartImage = `img-cart${image.slice(image.indexOf("img")+3)}`
                                addItemToCart(name, cartImage, price);
                            }}
                        >
                            <i 
                                className="fas fa-shopping-cart"
                            />
                        </button>

                    </div>
                    <div className="card-body">
                        <div className="card-text d-flex justify-content-between text-capitalize">
                            <h5 id="store-item-name">
                                {name}
                            </h5>
                            <h5 className="store-item-value">
                                <strong>{ currency(price) }</strong>
                            </h5>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}

export default Item
