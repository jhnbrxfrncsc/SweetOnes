import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

function Filter(props) {
    const { handleFilter } = useContext(GlobalContext);
    return (
        <div>
            <button 
                className="btn btn-outline-secondary btn-black text-uppercase filter-btn m-2" 
                onClick={() => handleFilter(props.name)}
            >
                {props.name}
            </button>
        </div>
    )
}

export default Filter
