import React from "react";

export const Team = () => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Team</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p>
        </div>
        <div id="row">
          
                <div className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src='img/team/01.jpg' className="team-img" />
                    <div className="caption">
                      <h4 style={{color: "black"}}>Nicolis</h4>
                      <p>Desarrollador Mobile</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src='img/team/02.jpg' className="team-img" />
                    <div className="caption">
                      <h4 style={{color: "black"}}>Lautis</h4>
                      <p>Desarrollador Web</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <img src='img/team/03.jpg' className="team-img" />
                    <div className="caption">
                      <h4 style={{color: "black"}}>Nahuelis</h4>
                      <p>Product Owner</p>
                    </div>
                  </div>
                </div>
            
        </div>
      </div>
    </div>
  );
};
