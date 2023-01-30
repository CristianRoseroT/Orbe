import React, { Component , Fragment } from "react";
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import Leftnav from '../components/Leftnav';
import Rightchat from '../components/Rightchat';
import Appfooter from '../components/Appfooter';
import Popupchat from '../components/Popupchat';


class Account extends Component {
    render() {
        return (
            <Fragment> 
                <Header />
                <Leftnav />
                <Rightchat />

                <div className="main-content right-chat-active">
                    <div className="middle-sidebar-bottom">
                        <div className="middle-sidebar-left">
                            <div className="middle-wrap">
                                <div className="card w-100 border-0 shadow-xs p-0 mb-4">
                                    <div className="card-body p-4 w-100 border-0 d-flex rounded-3">
                                        <Link to="/defaultsettings" className="d-inline-block mt-2"><i className="ti-arrow-left font-sm text-darkblue "></i></Link>
                                        <h4 className="font-xs fw-600 ms-4 mb-0 mt-2">Cuenta</h4>
                                    </div>
                                    <div className="card-body p-lg-5 p-4 w-100 border-0 ">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-4 text-center">
                                            <figure className="avatar ms-auto me-auto mb-0 mt-2 w100"><img src="https://via.placeholder.com/300x300.png" alt="avater" className="shadow-sm rounded-3 w-100" /></figure>
                                            <h2 className="fw-700 font-sm text-white mt-3">Bryan Gonzalez</h2>
                                            <h4 className="text-white fw-500 mb-3 font-xsss mb-4">Ilustrador</h4>    
                                            
                                        </div>
                                    </div>

                                    <form action="#">
                                        <div className="row ">
                                            <div className="col-lg-6 mb-3 ">
                                                <div className="form-group ">
                                                    <label className="mont-font fw-600 font-xsss mb-2">Nombre</label>
                                                    <input type="text" className="form-control" />
                                                </div>        
                                            </div>

                                        <div className="col-lg-6 mb-3">
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 font-xsss mb-2">Apellido</label>
                                                    <input type="text" className="form-control" />
                                                </div>        
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 mb-3">
                                                <div className="form-group ">
                                                    <label className=" mont-font fw-600 font-xsss mb-2">Email</label>
                                                    <input type="text" className="form-control" />
                                                </div>        
                                            </div>

                                            <div className="col-lg-6 mb-3">
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 font-xsss mb-2">Telefono/celular</label>
                                                    <input type="text" className="form-control" />
                                                </div>        
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-12 mb-3">
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 font-xsss mb-2">País</label>
                                                    <input type="text" className="form-control" />
                                                </div>        
                                            </div>

                                            <div className="col-lg-12 mb-3">
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 font-xsss mb-2">Fecha de Nacimiento</label>
                                                    <input type="text" className="form-control" />
                                                </div>        
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-lg-6 mb-3">
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 font-xsss mb-2">País</label>
                                                    <input type="text" className="form-control" />
                                                </div>        
                                            </div>

                                            <div className="col-lg-6 mb-3">
                                                <div className="form-group">
                                                    <label className="mont-font fw-600 font-xsss mb-2">Género</label>
                                                    <input type="text" className="form-control" />
                                                </div>        
                                            </div>
                                            <div className="col-lg-12">
                                                <a href="/accountinformation" className="bg-black text-center text-white font-xsss fw-600 p-3 w175 rounded-2 d-inline-block">Save</a>
                                            </div>
                                        </div>

                                    </form>
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

export default Account;