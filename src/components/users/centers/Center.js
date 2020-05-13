import React from 'react'
import Service from '../centers/Service'
import BookService from '../centers/BookService'
import TakeTurnService from '../centers/TakeTurnService'

const Center = () => {

    return (
   /* <div> 
        <img className="img-banner" src="https://blog.agendapro.com/hubfs/centro%20de%20belleza%20vac%C3%ADo.png"></img>
        <div className="ml-5">
            <p className="title">Peluqueria La Maria</p>
            <h4>Este un centro especializado en belleza e imagen. En donde contamos con los mejores profesionales, 
            especialistas en Color, corte y Novias. Siempre a la Vanguardia, pensando en las ultimas tendencias
             de Belleza.</h4>
            <h3>Servicios</h3>
            <Service/>
            <Service/>

        </div> 
    </div>*/
    <div> 
        <img className="img-banner" src="https://blog.agendapro.com/hubfs/centro%20de%20belleza%20vac%C3%ADo.png"></img>
        <div className="ml-5">
            <p className="title">Peluqueria La Maria</p>
            <h4>Este un centro especializado en belleza e imagen. En donde contamos con los mejores profesionales, 
            especialistas en Color, corte y Novias. Siempre a la Vanguardia, pensando en las ultimas tendencias
             de Belleza.</h4>
            <h3 className="mt-5 mb-4">Nombre del servicio</h3>
            <TakeTurnService/>


        </div> 
    </div>);
}
export default Center