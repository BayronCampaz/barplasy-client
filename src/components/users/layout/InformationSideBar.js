import React from 'react';

const InformationSideBar = ({center}) => {
    return ( 
        <aside> 
            <img alt="" src="https://i.ibb.co/RgzvMfs/logo-barplasy.png"className="little-img"></img>
            <div><iframe width="100%" height="250" src="https://maps.google.com/maps?width=100%&amp;height=250&amp;hl=en&amp;coord=3.407014, -76.526830&amp;q=+()&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" frameBorder="0" scrolling="no" marginHeight="0" title="map" marginWidth="0"><a href="https://www.maps.ie/draw-radius-circle-map/">Google Maps radius calculator</a></iframe></div><br />
            <div className="container">
                <div className="mb-3">
                    <b>Ubicación</b>
                    <h4>{center.location.address}</h4>
                </div>

                <div className="mb-3">
                    <b>Telefono</b>
                    <h4>{center.cellphone}</h4>
                </div>

                <div className="mb-3">
                    <b>Calificación</b>
                    <div>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                    </div>
                </div>
            </div>

        </aside>
     );
}
 
export default InformationSideBar;