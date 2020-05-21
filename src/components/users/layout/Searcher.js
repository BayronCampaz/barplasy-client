import React from 'react';

const Searcher = () => {
    return ( 
        <aside>
            <img alt="" src="https://i.ibb.co/RgzvMfs/logo-barplasy.png"className="little-img"></img>
            <div className="mb-3">
            <b>Servicios</b>
            </div>
            <label className="checkbox-container">Peluqueria
            <input type="checkbox"/>
            <span className="checkmark"></span>
            </label>

            <label className="checkbox-container">Barberia
            <input type="checkbox"/>
            <span className="checkmark"></span>
            </label>

            <label className="checkbox-container">Uñas 
            <input type="checkbox"/>
            <span className="checkmark"></span>
            </label>

            <label className="checkbox-container">Spa
            <input type="checkbox"/>
            <span className="checkmark"></span>
            </label>


            <div className="mb-3 mt-5">
            <b>Precio</b>
            </div>
            <label className="checkbox-container">Menos de $20.000
            <input type="checkbox"/>
            <span className="checkmark"></span>
            </label>

            <label className="checkbox-container">$20.000 - $50.000
            <input type="checkbox"/>
            <span className="checkmark"></span>
            </label>

            <label className="checkbox-container">$50.000 - $100.000 
            <input type="checkbox"/>
            <span className="checkmark"></span>
            </label>

            <label className="checkbox-container">Más de $100.000
            <input type="checkbox"/>
            <span className="checkmark"></span>
            </label>
            

            <div className="mb-3 mt-5">
            <b>Tipo de agenda</b>
            </div>
            <label className="checkbox-container">Reserva
            <input type="checkbox"/>
            <span className="checkmark"></span>
            </label>

            <label className="checkbox-container">Toma de turnos
            <input type="checkbox"/>
            <span className="checkmark"></span>
            </label>

        </aside>
     );
}
 
export default Searcher;