import React, {useContext, useEffect} from 'react'
import Reservation from './Reservation'
import NavBar from '../layout/NavBar'
import ReservationContext from '../../../context/reservations/reservationContext'

const Reservations = () => {

    const reservationContext = useContext(ReservationContext)
    const {getReservations, reservations} = reservationContext;

    useEffect(() => {
        async function fetchData(){
            await getReservations()
        }
        fetchData();
    }, [])

    if(reservations){
        return (
            <div>
                <NavBar/>
                <div className="container">
                    <p className="title mt-5">Reservas o turnos actuales</p>
                    {reservations.map(reservation => (
                        <Reservation key={reservation._id} reservation={reservation}/>
                        ))}
                    <p className="title mt-5">Reservas o turnos anteriores</p>
                </div>
            </div> 
            );
    }else {
        return (
            <div>
                <NavBar/>
                <div className="container">
                    <p className="title mt-5">Todavia no has realizado ninguna reserva </p>
                </div>
            </div> 
            );

    }

}
export default Reservations