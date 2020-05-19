import React, {useState, useContext, useEffect} from 'react'
import Service from '../centers/Service'
import ReservationService from '../centers/ReservationService'
import TakeTurnService from '../centers/TakeTurnService'
import CenterContext from '../../../context/centers/centerContext'
import ServiceContext from '../../../context/services/serviceContext'
import ReservationContext from '../../../context/reservations/reservationContext'

const Center = ({user, center, servicesCenter, service}) => {


    const reservationContext = useContext(ReservationContext)
    const {getReservations, reservations} = reservationContext;

    useEffect(() => {
        async function fetchData(){
            await getReservations()
        }
        fetchData();
    }, [])

    const [userComplete, saveUser] = useState({
        user: user,
    })

    if(!service){
        return (
            <div> 
                <img className="img-banner" src="https://blog.agendapro.com/hubfs/centro%20de%20belleza%20vac%C3%ADo.png"></img>
                <div className="ml-5">
                    <p className="title">{center.name}</p>
                    <h4>Este un centro especializado en belleza e imagen. En donde contamos con los mejores profesionales, 
                    especialistas en Color, corte y Novias. Siempre a la Vanguardia, pensando en las ultimas tendencias
                     de Belleza.</h4>
                    <h3>Servicios</h3>
                    <div>
                        {servicesCenter.map(service => (
                        <Service service={service}/>
                        ))}
                    </div>           
        
                </div> 
            </div>);
   
}else {

        return (
    <div> 
        <img className="img-banner" src="https://blog.agendapro.com/hubfs/centro%20de%20belleza%20vac%C3%ADo.png"></img>
        <div className="ml-5">
            <p className="title mt-5 mb-5">{center.name}</p>
                <div className="row service-container mt-5 mb-5"> 
                    <div className="col-md-10">
                        <div className="row">
                            <h3 className="col-md-4">{service.name}s</h3>
                            <span className="col-md-4">{service.time} min</span>
                        </div>
                    <h4>{service.description}</h4>
                    </div>
                <div className="col-md-2">
                    <span>$ {service.price.$numberDecimal}</span>
                </div>
        </div>
            <TakeTurnService user={userComplete.user} service={service} reservations= {reservations}/>


        </div> 
    </div>
        );


    }

}
export default Center