import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function Modal() {
    // (function(){
    //     const cartInfo = document.getElementById("cart-info");
    //     const cart = document.getElementById("cart");

    //     cartInfo.addEventListener("click" , () => {
    //         cart.classList.toggle("show-cart");
    //     });
    // })();
    return (
        <div className="container-fluid">
            <div className="row lightbox-container align-items-center">
                <div className="col-10 col-md-10 mx-auto text-right lightbox-holder">
                    <span className="lightbox-close">
                        <i className="fas fa-window-close"></i>
                    </span>
                    <div className="lightbox-item"></div>
                    <span className="lightbox-control btnLeft">
                        <i className="fas fa-caret-left"></i>
                    </span>
                    <span className="lightbox-control btnRight">
                        <i className="fas fa-caret-right"></i>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Modal;
