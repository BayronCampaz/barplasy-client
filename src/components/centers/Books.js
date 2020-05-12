import React from 'react'
import Book from './Book'

const Books = () => {

    return (<div> 
        <p className="title mt-5">Reservas o turnos actuales</p>
        <Book/>
        <Book/>
        <p className="title mt-5">Reservas o turnos anteriores</p>
        <Book/>
        <Book/>
         </div>);
}
export default Books