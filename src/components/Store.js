import React, {Fragment} from 'react';
import Filter from './Filter';
import StoreItems from './StoreItems';

function Store() {
    return (
        <Fragment>
            <section id="store" className="store py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto col-sm-6 text-center">
                            <h1 className="text-capitalize">
                                our <strong className="banner-title ">store</strong>
                            </h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className=" col-lg-8 mx-auto d-flex justify-content-around my-2 sortBtn flex-wrap">
                            <Filter name="All"/>
                            <Filter name="Cakes"/>
                            <Filter name="Cupcakes"/>
                            <Filter name="Sweets"/>
                            <Filter name="Doughnuts"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 mx-auto col-md-6">
                            <form>
                                <div className="input-group mb-3">
                                <div className="input-group-prepend ">
                                    <span className="input-group-text search-box" id="search-icon">
                                        <i className="fas fa-search"></i>
                                    </span>
                                </div>
                                    <input type="text" className="form-control" placeholder='item....' id="search-item" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <StoreItems />
            </section>
        </Fragment>
    )
}

export default Store;
