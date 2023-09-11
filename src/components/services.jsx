import React from "react";

export const Services = () => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Nuestros Servicios</h2>
          <p>
          En SEGURIDAD & HIGIENE INDUSTRIAL estamos comprometidos con nuestros clientes y te brindamos la mejor experiencia posible.


          </p>
        </div>
        <div className="row">
        
                <div className="col-md-4">
                  {" "}
                  <i className='fa fa-wordpress'></i>
                  <div className="service-desc">
                    <h3>Capacitaciones</h3>
                    <p>Nuestros cursos están diseñados para proporcionar a su equipo las habilidades y el conocimiento necesarios para mantener un entorno de trabajo seguro y saludable. Con instructores altamente calificados y contenido actualizado, estamos comprometidos en ayudar a su organización a cumplir con las regulaciones y reducir los riesgos. ¡Invierta en la seguridad de su equipo hoy mismo!</p>
                  </div>
                </div>

                <div className="col-md-4">
                  {" "}
                  <i className='fa fa-cart-arrow-down'></i>
                  <div className="service-desc">
                    <h3>Resolución de Conflictos</h3>
                    <p>Los conflictos en el lugar de trabajo pueden tener un impacto significativo en la productividad y el bienestar de los empleados. Ya sea un conflicto interpersonal, un desacuerdo entre departamentos o cualquier otro problema, trabajaremos con usted para encontrar soluciones que promuevan un ambiente laboral armonioso y productivo.</p>
                  </div>
                </div>

                <div className="col-md-4">
                  {" "}
                  <i className='fa fa-cloud-download'></i>
                  <div className="service-desc">
                    <h3>Informes Interactivos</h3>
                    <p>Nuestros informes interactivos ofrecen una visión clara y detallada de los datos relevantes para su organización. Puede explorar tendencias, identificar áreas de riesgo y tomar medidas proactivas para mejorar la seguridad en su lugar de trabajo. Simplifique la gestión de la seguridad con nuestras herramientas de informes personalizadas y tome decisiones informadas para proteger a su equipo y cumplir con los estándares de seguridad.</p>
                  </div>
                </div>
        </div>
      </div>
    </div>
  );
};
