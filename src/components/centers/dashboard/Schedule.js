import React, {useEffect, useContext} from 'react'
import ReservationContext from '../../../context/reservations/reservationContext'
import ReservationItem from './ReservationItem';
import AuthContext from '../../../context/auth/authContext';

const Schedule = () => {
    
    const reservationContext = useContext(ReservationContext)
    const {getReservations, reservations} = reservationContext;

    useEffect(() => {
        async function fetchData(){
            await getReservations()
            console.log(reservations)
        }
        fetchData();        
    }, [])


    if(reservations.length > 0){
        return (
            <div>
                <img className="img-banner" src="https://blog.agendapro.com/hubfs/centro%20de%20belleza%20vac%C3%ADo.png"></img>
                <h3 className="ml-5 mb-5" > 14 de Mayo de 2020</h3>    
                    <div className="ml-5 row">
                        <p className="col-md-2"> Hora </p>
                        <p className="col-md-4 ">Nombre</p>
                        <p className="col-md-4 ">Celular</p>
                    </div>
                    {reservations.map( reservation => (
                            <ReservationItem key={reservation._id} reservation={reservation} />
                            ))}
        
            </div>
            );
    }else{
        return (
            <div>
                <img className="img-banner" src="https://blog.agendapro.com/hubfs/centro%20de%20belleza%20vac%C3%ADo.png"></img>
                <h3 className="ml-5 mb-5" > 14 de Mayo de 2020</h3>    
                    <div className="ml-5 row">
                        <h2> No hay clientes para atender</h2>
                    </div>
            </div>
            );
    }
    
}
export default Schedule