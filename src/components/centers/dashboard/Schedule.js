import React, {useEffect, useContext} from 'react'
import ReservationContext from '../../../context/reservations/reservationContext'
import ReservationItem from './ReservationItem';
import AuthContext from '../../../context/auth/authContext';
import { formatHours, formatDay } from '../../../config/utils'

const Schedule = ({user}) => {
    
    const reservationContext = useContext(ReservationContext)
    const {reservations, getReservationsCenter, updateReservation, deleteReservation} = reservationContext;
    const authContext = useContext(AuthContext);
    const {userAuthenticated, loading} = authContext;


    useEffect(() => {
        async function fetchData(){
            await userAuthenticated()
            await getReservationsCenter(user._id)
        }
        fetchData();      
        // eslint-disable-next-line 
    }, [])

    const day = formatDay(new Date())
    const actualHour = formatHours(new Date())

    const changeStateReservation = (reservation) => {
        updateReservation(reservation)
    }
    const cancelReservation = (reservation) => {
        deleteReservation(reservation._id)
    }
    if(reservations.length > 0 && !loading){
        return (
            <div>
                <img alt="" className="img-banner" src={user.banner}></img>
                <h3 className="ml-5 mb-3" > Fecha de hoy {day}</h3>    
                    <div className="ml-4 row">
                        <p className="col-md-8 title-hour">Hora actual: {actualHour}</p>
                    </div>
                    {reservations.map( reservation => (
                            <ReservationItem key={reservation._id} 
                                reservation={reservation}  
                                changeStateReservation={changeStateReservation}
                                cancelReservation={cancelReservation}/>
                            ))}
        
            </div>
            );
    }else if(!loading){
        return (
            <div>
                <img alt="" className="img-banner" src={user.banner}></img>
                <h3 className="ml-5 mb-5" > {}</h3>    
                    <div className="ml-5 row">
                        <h2> No hay clientes para atender</h2>
                    </div>
            </div>
            );
    }

    return (
        <div>
            <img alt="" className="img-banner" src="https://blog.agendapro.com/hubfs/centro%20de%20belleza%20vac%C3%ADo.png"></img>
            <h3 className="ml-5 mb-5" > {day}</h3>    
                <div className="ml-5 row">
                    <h2> No hay clientes para atender</h2>
                </div>
        </div>
        );
    
}
export default Schedule