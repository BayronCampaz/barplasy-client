import React from 'react'

const ReservationItem = ({reservation}) => {

    return(
        <div className="ml-5 row">
        <p className="col-md-2 btn-hour"> 9:30 </p>
        <p className="col-md-4 btn-hour">Juan Pedro</p>
        <p className="col-md-4 btn-hour">3184465895</p>
    </div>
    )
}

export default ReservationItem