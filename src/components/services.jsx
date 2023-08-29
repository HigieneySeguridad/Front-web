import React from "react";

export const Services = () => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div className="row">
        
                <div className="col-md-4">
                  {" "}
                  <i className='fa fa-wordpress'></i>
                  <div className="service-desc">
                    <h3>Lorem ipsum dolor</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque possimus itaque molestiae nobis unde facere illum ex facilis obcaecati modi consequuntur delectus deserunt reiciendis, quaerat provident cupiditate eaque id! Magnam!</p>
                  </div>
                </div>

                <div className="col-md-4">
                  {" "}
                  <i className='fa fa-cart-arrow-down'></i>
                  <div className="service-desc">
                    <h3>Lorem ipsum dolor</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque possimus itaque molestiae nobis unde facere illum ex facilis obcaecati modi consequuntur delectus deserunt reiciendis, quaerat provident cupiditate eaque id! Magnam!</p>
                  </div>
                </div>

                <div className="col-md-4">
                  {" "}
                  <i className='fa fa-cloud-download'></i>
                  <div className="service-desc">
                    <h3>Lorem ipsum dolor</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque possimus itaque molestiae nobis unde facere illum ex facilis obcaecati modi consequuntur delectus deserunt reiciendis, quaerat provident cupiditate eaque id! Magnam!</p>
                  </div>
                </div>
        </div>
      </div>
    </div>
  );
};
