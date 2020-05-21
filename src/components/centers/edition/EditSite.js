import React, {useContext, useEffect} from 'react'
import NavBarCenter from '../layout/NavBarCenter'
import EditInfoSideBar from '../layout/EditInfoSideBar'
import ServiceContext from '../../../context/services/serviceContext'
import EditService from '../edition/EditService'
import AuthContext from '../../../context/auth/authContext'

const EditSite = (props) => {

    const authContext = useContext(AuthContext);
    const {user, userAuthenticated} = authContext;
    const serviceContext = useContext(ServiceContext);
    const { servicesCenter, getServices } = serviceContext;

     useEffect( () => {
        async function fetchData(){
            await userAuthenticated();
            getServices(user._id);
        }
        fetchData();
        // eslint-disable-next-line
    }, []);



    const openAddService = () => {
        props.history.push('/add-service');
    }
    

    return (
    <div> 
        <NavBarCenter/>
        <div className="row">
            <EditInfoSideBar/>
            <div className="col-md-8">
                <img alt="" className="img-banner" src="https://blog.agendapro.com/hubfs/centro%20de%20belleza%20vac%C3%ADo.png"></img>
                <div className="ml-5">
                    <p className="title">{user.name}</p>
                    <h4>{user.description}</h4>
                    <div className="row">
                        <h3 className="col mt-5 mb-4">Servicios</h3>
                        <button className="col btn btn-blue" onClick={openAddService}>Agregar Servicio</button>
                    </div> 
                    <div className="mb-5">
                        {servicesCenter.map(service => (
                        <EditService service={service}/>
                    ))}
                    </div>

                </div> 
            </div>
        </div>

    </div>);
}
export default EditSite