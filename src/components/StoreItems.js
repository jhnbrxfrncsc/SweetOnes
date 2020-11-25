import React, {useContext} from 'react';
import Item from './Item';
import { GlobalContext } from '../context/GlobalContext';

function StoreItems() {
    const { items } = useContext(GlobalContext);
    return (
        <div className="row store-items" id="store-items">
                {
                    items.map( (item) => {
                        return (
                            <div 
                                key={item.id}                 
                                className="col-10 col-sm-6 col-lg-4 mx-auto my-3 store-item sweets"
                            >
                                <Item
                                    name={item.name} 
                                    image={item.image} 
                                    price={item.price} 
                                    category={item.category} 
                                />
                            </div>
                        )
                    })
                }
        </div>
    )
}

export default StoreItems;
