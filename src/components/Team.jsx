
export const Team = () => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Conoce nuestro equipo</h2>
          <p>
            Proyecto Final desarrollado en su totalidad por alumnos del Politécnico Formosa
          </p>
        </div>
        <div  id= 'row' className="center-elements">
          
                <div className="col-md-4 team">
                  <div className="thumbnail">
                    {" "}
                    <img src='img/team/01.jpg' className="team-img" />
                    <div className="caption">
                      <h4 style={{color: "black"}}>Nicolis</h4>
                      <p>Desarrollador Mobile</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 team">
                  <div className="thumbnail">
                    {" "}
                    <img src='img/team/02.jpg' className="team-img" />
                    <div className="caption">
                      <h4 style={{color: "black"}}>Lautis</h4>
                      <p>Desarrollador Web</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 team">
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
