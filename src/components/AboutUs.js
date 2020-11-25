import React from 'react';

const AboutUs = () => {
    return (
        <div>
            <div className="container" id="about-us">
                <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-5">
                        <h1 className="text-capitalize">about <strong className="banner-title ">us</strong></h1>
                        <p className="my-4 text-muted w-75">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, aliquam voluptas
                            beatae vitae expedita consectetur nesciunt quia deserunt asperiores facere fuga dicta fugiat corrupti et omnis
                            porro at dolorum! Ad!</p>
                        <a href="#" className="btn btn-outline-secondary btn-black text-uppercase ">explore</a>

                    </div>
                    <div className="col-10 mx-auto col-md-6 align-self-center my-5">
                        <div className="about-img__container">
                            <img src="img/sweets-1.jpeg" className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
