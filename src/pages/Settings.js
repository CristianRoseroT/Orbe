import React, { Component , Fragment } from "react";
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';


class Settings extends Component {
    render() {
        return (
            <Fragment> 
                <Header />
                <Leftnav />
                <Rightchat />

                <div className="main-content bg-black right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left">
                            <div className="middle-wrap">
                                <div className="card w-100 border-0  bg-darkblue shadow-xs p-0 mb-4">
                                    
                                    <div className="card-body p-lg-5 p-4 w-100 border-0">
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <h4 className="mb-4 font-xxl fw-700 mont-font text-white mb-lg-5 mb-4 font-md-xs">Ajustes de usuario</h4>
                                                <div className="nav-caption fw-600 font-xssss text-white mb-2">General</div>
                                                <ul className="list-inline mb-4">
                                                    <li className="list-inline-item d-block border-bottom me-0"><Link to="/contactinformation" className="pt-2 pb-2 d-flex align-items-center "><i className="btn-round-md  text-white feather-settings font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0 text-white">Ajustes Generales</h4><i className="ti-angle-right font-xsss text-white ms-auto mt-3"></i></Link></li>
                                                    <li className="list-inline-item d-block border-bottom me-0"><Link to="/accountinformation" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md  text-white feather-user font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0 text-white">Perfil</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                                                    <li className="list-inline-item d-block me-0"><Link to="/socialaccount" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md t text-white feather-settings font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0 text-white">Bloqueados</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                                                </ul>

                                                <div className="nav-caption fw-600 font-xsss text-white mb-2">Cuenta</div>
                                                <ul className="list-inline mb-4">
                                                    <li className="list-inline-item d-block border-bottom me-0"><Link to="/payment" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md  text-white feather-credit-card font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0 text-white">Ganancias</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                                                    <li className="list-inline-item d-block  me-0"><Link to="/password" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md  text-white feather-settings font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0 text-white">Seguridad</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                                                    
                                                </ul>

                                                <div className="nav-caption fw-600 font-xsss text-white mb-2">Oros</div>
                                                <ul className="list-inline">
                                                    <li className="list-inline-item d-block border-bottom me-0"><Link to="/defaultnoti" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md text-white feather-bell font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0 text-white">Notificaciones</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></Link></li>
                                                    <li className="list-inline-item d-block border-bottom me-0"><a href="/helpbox" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md text-white feather-help-circle font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0 text-white">Ayuda y soporte</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></a></li>
                                                    <li className="list-inline-item d-block me-0"><a href="/login" className="pt-2 pb-2 d-flex align-items-center"><i className="btn-round-md text-white feather-lock font-md me-3"></i> <h4 className="fw-600 font-xsss mb-0 mt-0 text-white">Cerrar cuenta</h4><i className="ti-angle-right font-xsss text-grey-500 ms-auto mt-3"></i></a></li>
                                                    
                                                </ul>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                    </div>
                </div>

                <Popupchat />
                <Appfooter /> 
            </Fragment>
        );
    }
}

export default Settings;