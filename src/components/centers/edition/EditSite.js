import React from 'react'
import NavBarCenter from '../layout/NavBarCenter'
import EditInfoSideBar from '../layout/EditInfoSideBar'

const EditSite = (props) => {


    const openAddService = () => {
        props.history.push('/add-service');
    }
    

    return (
    <div> 
        <NavBarCenter/>
        <div className="row">
            <EditInfoSideBar/>
            <div className="col-md-8">
                <img className="img-banner" src="https://blog.agendapro.com/hubfs/centro%20de%20belleza%20vac%C3%ADo.png"></img>
                <div className="ml-5">
                    <p className="title">Peluqueria La Maria</p>
                    <h4>Este un centro especializado en belleza e imagen. En donde contamos con los mejores profesionales, 
                    especialistas en Color, corte y Novias. Siempre a la Vanguardia, pensando en las ultimas tendencias
                    de Belleza.</h4>
                    <div className="row">
                        <h3 className="col mt-5 mb-4">Servicios</h3>
                        <button className="col btn btn-blue" onClick={openAddService}>Agregar Servicio</button>
                    </div>
                    
                </div> 
            </div>
        </div>

    </div>);
}
export default EditSite