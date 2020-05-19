import React, {useContext, useState, useEffect} from 'react'
import CenterContext from '../../../context/centers/centerContext'
import ServiceContext from '../../../context/services/serviceContext'

const Reservation = ({reservation}) => {

    const [isBusy, setBusy] = useState(true)

    const centerContext = useContext(CenterContext)
    const { center, getCenter} = centerContext;

    const serviceContext = useContext(ServiceContext)
    const {service, getService} = serviceContext;

    useEffect(() => {
        async function fetchData(){

            await getService(reservation.serviceId)
            console.log(service)
            await getCenter(service.centerId)
              
            console.log(reservation._id)
            console.log(center)

            setBusy(false);
        }
        fetchData();
        
    }, [])

    let dateType = new Date(reservation.timeEstimatedStart)
    let dateTypeFinish = new Date(reservation.timeEstimatedFinish)

    let date = ""
    let day = dateType.getDate()
    let month = dateType.getMonth() + 1
    let year = dateType.getFullYear()


    if(month < 10){
        date = `${day}/0${month}/${year}`;
    }else{
        date = `${day}/${month}/${year}`;
    }

    function getFormatHour(date){

        let hour = date.getHours();
        let minutes = date.getMinutes();

        if(minutes < 10){
            return `${hour}:0${minutes}`;
        }else{
            return `${hour}:${minutes}`;
        }

    }

    let startHour = getFormatHour(dateType)
    let endedHour = getFormatHour(dateTypeFinish)

    if(!isBusy){
        return (
            <div className="row service-container"> 
                <div className="col-md-10">
                    <div className="row">
                    <h3 className="col-md-4"> {center.name}</h3>
                        <span className="col-md-2">{service.time} minutos</span>
                    </div>
        
                    <h4>{service.name}</h4>
                    <h4>Inicio a las :{startHour}</h4>
                    <h4>Fin a las :{endedHour}</h4>
                </div>
                <div className="col-md-2">
                    <span>{service.price.$numberDecimal}</span>
                    <button className="btn btn-blue">Cancelar Reserva</button>
                </div>
            </div>
                );
    }else {
        return (
            <div className="row service-container"> 
                <div className="col-md-10">
                    <div className="row">
                    <h3 className="col-md-4"> - </h3>
                        <span className="col-md-2">- minutos</span>
                    </div>
        
                    <h4>-</h4>
                    <h4>Inicio a las : -</h4>
                    <h4>Fin a las : -</h4>
                </div>
                <div className="col-md-2">
                    <span>-</span>
                    <button className="btn btn-blue">Cancelar Reserva</button>
                </div>
            </div>
                );
    }

    
}
export default Reservation