import React from 'react'

const Book = () => {

    return (
    <div className="row service-container"> 
        <div className="col-md-10">
            <div className="row">
                <h3 className="col-md-6">Corte de cabello sencillo</h3>
                <span className="col-md-6">40 min</span>
            </div>

            <h4>Peluqueria la Maria</h4>
            <h4>15/03/2020</h4>
        </div>
        <div className="col-md-2">
            <span>$20.000</span>
            <button className="btn btn-blue">Cancelar Reserva</button>
        </div>
    </div>
        );
}
export default Book