import React, {useState, useContext, useEffect} from 'react'
import Service from '../centers/Service'
import TakeTurnService from '../centers/TakeTurnService'
import ReservationContext from '../../../context/reservations/reservationContext'

const Center = ({user, center, servicesCenter, service}) => {


    const reservationContext = useContext(ReservationContext)
    const {getReservationsCenter, reservations} = reservationContext;

    useEffect(() => {
        async function fetchData(){
            await getReservationsCenter(center._id)
        }
        fetchData();
        // eslint-disable-next-line 
    }, [])

    const [userComplete] = useState({
        user: user,
    })

    if(!service){
        return (
            <div> 
                <img alt="" className="img-banner" src={center.banner}></img>
                <div className="ml-5">
                    <p className="title">{center.name}</p>

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
        <img alt="" className="img-banner" src="https://blog.agendapro.com/hubfs/centro%20de%20belleza%20vac%C3%ADo.png"></img>
        <div className="ml-5">
            <p className="title mt-5 mb-5">{center.name}</p>
                <div className="row service-container mt-5 mb-5"> 
                    <div className="col-md-10">
                        <div className="row">
                            <h3 className="col-md-4">{service.name}</h3>
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