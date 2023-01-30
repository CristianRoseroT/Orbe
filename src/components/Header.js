import React,{Component} from 'react';
import { Link , NavLink } from 'react-router-dom';



class Header extends Component {
    state = {
        isOpen: false,
        isActive: false,
        isNoti: false
    };

    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
    toggleActive = () => this.setState({ isActive: !this.state.isActive });
    toggleisNoti = () => this.setState({ isNoti: !this.state.isNoti });

    render() {
        const navClass = `${this.state.isOpen ? " nav-active" : ""}`;
        const buttonClass = `${this.state.isOpen ? " active" : ""}`;
        const searchClass = `${this.state.isActive ? " show" : ""}`;
        const notiClass = `${this.state.isNoti ? " show" : ""}`;

        return (
            
            <div className="nav-header shadow-xs border-0"  >
                <div className="nav-top" >
                    <Link to="/"><img src="assets/images/logo.png" alt="user" className="w65 mt--3 "/></Link>
                    <Link to="/defaultmessage" className="mob-menu ms-auto me-2 chat-active-btn"><i className="feather-message-circle text-grey-900 font-sm btn-round-md bg-greylight"></i></Link>
                    <Link to="/defaultvideo" className="mob-menu me-2"><i className="feather-video text-grey-900 font-sm btn-round-md bg-white"></i></Link>
                    <span onClick={this.toggleActive} className="me-2 menu-search-icon mob-menu"><i className="feather-search text-grey-900 font-sm btn-round-md bg-greylight"></i></span>
                    <button onClick={this.toggleOpen} className={`nav-menu me-0 ms-2 ${buttonClass}`}></button>
                </div>
                
                <form action="#" className="float-left header-search ms-3">
                    <div className="form-group mb-0 icon-input">
                        <i className="feather-search font-sm text-grey-400"></i>
                        <input type="text" placeholder="Buscar en Orbe" className="bg-black border-0 lh-32 pt-2 pb-2 ps-5 pe-3 font-xssss fw-600 rounded-xl w350" />
                    </div>
                </form>
                <NavLink activeClassName="active" to="/home" className="p-2 text-center ms-3 menu-icon center-menu-icon"><i className="feather-home font-lg bg-black btn-round-lg theme-dark-bg text-white "></i></NavLink>
                <NavLink activeClassName="active" to="/defaultvideo" className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-video font-lg bg-black btn-round-lg theme-dark-bg text-white "></i></NavLink>
                <NavLink activeClassName="active" to="/defaultgrups" className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-user font-lg bg-black btn-round-lg theme-dark-bg text-white "></i></NavLink>
                <NavLink activeClassName="active" to="/defaultgroup" className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-shopping-bag font-lg bg-black btn-round-lg theme-dark-bg text-white "></i></NavLink>
                <NavLink activeClassName="active" to="/shop2" className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-monitor font-lg bg-black btn-round-lg theme-dark-bg text-white "></i></NavLink>

                    
                <span className={`p-2 pointer text-center ms-auto menu-icon ${notiClass}`} id="dropdownMenu3" data-bs-toggle="dropdown" aria-expanded="false" onClick={this.toggleisNoti}><span className="dot-count bg-warning"></span><i className="feather-bell font-xl text-current"></i></span>
                <Link to="/defaultmessage" className="p-2 text-center ms-3 menu-icon chat-active-btn"><i className="feather-message-square font-xl text-current"></i></Link>
                <div className={`dropdown-menu bg-darkblue-transparent p-4 right-0 rounded-xxl border-0 shadow-lg ${notiClass}`}  aria-labelledby="dropdownMenu3">
                    <h4 className="fw-700 font-xss mb-4 text-white ">Notificaciones</h4>
                    <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                        <img src="assets/images/user.png" alt="user" className="w40 position-absolute left-0" />
                        <h5 className="font-xsss text-white mb-1 mt-0 fw-700 d-block">Maria Perez <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 3 min</span></h5>
                        <h6 className="text-white fw-500 font-xssss lh-4">Cosas que debemos hacer para ser exitosos</h6>
                    </div>
                    <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                        <img src="assets/images/user.png" alt="user" className="w40 position-absolute left-0" />
                        <h5 className="font-xsss text-white mb-1 mt-0 fw-700 d-block">Goria Coast <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 2 min</span></h5>
                        <h6 className="text-white fw-500 font-xssss lh-4">Requerimos personal</h6>
                    </div>

                    <div className="card bg-transparent-card w-100 border-0 ps-5 mb-3">
                        <img src="assets/images/user.png" alt="user" className="w40 position-absolute left-0" />
                        <h5 className="font-xsss text-white mb-1 mt-0 fw-700 d-block">Surfiya Zakir <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 1 min</span></h5>
                        <h6 className="text-white font-xssss lh-4">La técnología es muy interesante</h6>
                    </div>
                    <div className="card bg-transparent-card w-100 border-0 ps-5">
                        <img src="assets/images/user.png" alt="user" className="w40 position-absolute left-0" />
                        <h5 className="font-xsss text-white mb-1 mt-0 fw-700 d-block">Victor Exrixon <span className="text-grey-400 font-xsssss fw-600 float-right mt-1"> 30 sec</span></h5>
                        <h6 className="text-white fw-500 font-xssss lh-4">Lo mejor del mundo siempre</h6>
                    </div>
                </div>
                
                <NavLink activeClassName="active" to="/defaultsettings" className="p-2 text-center ms-0 menu-icon center-menu-icon"><i className="feather-user font-lg bg-black btn-round-lg theme-dark-bg text-white "></i></NavLink>

                <nav className={`navigation scroll-bar ${navClass}`}>
                    <div className="container ps-0 pe-0">
                        <div className="nav-content">
                            <div className="nav-wrap bg-darkblue rounded-xxl shadow-xss pt-3 pb-1 mb-2 mt-2">
                                <ul className="mb-1 top-content">
                                    <li className="logo d-none d-xl-block d-lg-block"></li>
                                    <li><Link to="/userpage" className="nav-content-bttn open-font"><i className="feather-user bg-black btn-round-md me-3"></i><span>Bryan Gonzalez </span></Link></li>  
                                    <li><Link to="/defaultbadge" className="nav-content-bttn open-font"><i className="feather-award btn-round-md me-3"></i><span>Amigos</span></Link></li>
                                    <li><Link to="/defaultstorie" className="nav-content-bttn open-font"><i className="feather-globe btn-round-md me-3"></i><span>Álbumes</span></Link></li>
                                    <li><Link to="/defaultgroup" className="nav-content-bttn open-font"><i className="feather-zap btn-round-md  me-3"></i><span>Guardados</span></Link></li>
                                                          
                                </ul>
                            </div>

                            <div className="nav-wrap bg-darkblue rounded-xxl shadow-xss pt-3 pb-1 mb-2">
                                <div className="nav-caption fw-600 font-xssss text-grey-500"></div>
                                <ul className="mb-3">
                                    <li><Link to="/defaultemailbox" className="nav-content-bttn open-font"><i className="font-xl text-current feather-inbox me-3"></i><span>Eventos</span><span className="circle-count bg-warning mt-1">14</span></Link></li>
                                    <li><Link to="/defaulthotel" className="nav-content-bttn open-font"><i className="font-xl text-current feather-home me-3"></i><span>Blogs</span></Link></li>
                                    <li><Link to="/defaultevent" className="nav-content-bttn open-font"><i className="font-xl text-current feather-map-pin me-3"></i><span>Entradas Populares</span></Link></li>
                                    <li><Link to="/defaultlive" className="nav-content-bttn open-font"><i className="font-xl text-current feather-youtube me-3"></i><span>Explorar</span></Link></li>        
                                    <li><Link to="/defaultlive" className="nav-content-bttn open-font"><i className="font-xl text-current feather-youtube me-3"></i><span>Encontrar amigos</span></Link></li>                    
                                </ul>
                            </div>
                       </div>
                    </div>
                </nav>
                
                <div className={`app-header-search ${searchClass}`}>
                    <form className="search-form">
                        <div className="form-group searchbox mb-0 border-0 p-1">
                            <input type="text" className="form-control border-0" placeholder="Search..." />
                            <i className="input-icon">
                                <ion-icon name="search-outline" role="img" className="md hydrated" aria-label="search outline"></ion-icon>
                            </i>
                            <span className="ms-1 mt-1 d-inline-block close searchbox-close">
                                <i className="ti-close font-xs" onClick={this.toggleActive}></i>
                            </span>
                        </div>
                    </form>
                </div>
                
            </div>
        );
    }
}

export default Header;