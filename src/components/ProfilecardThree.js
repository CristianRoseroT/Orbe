import React,{Component} from 'react';

class ProfilecardThree extends Component {
    render() {
        return (
            <div className="card w-100 border-0 p-0 bg-darkblue shadow-xss rounded-xxl">
                <div className="card-body h250 p-0 rounded-xxl overflow-hidden m-3"><img src="https://via.placeholder.com/1200x250.png" alt="avater" /></div>
                <div className="card-body p-0 position-relative">
                    <figure className="avatar position-absolute w100 z-index-1" style={{top:'-40px',left:'30px'}}><img src="assets/images/user.png" alt="avater" className="float-right p-1 bg-white rounded-circle w-100" /></figure>
                    <h4 className="fw-700 font-sm mt-2 mb-lg-5 mb-4 pl-15 text-white">Bryan Gonzalez<span className="fw-500 font-xssss text-white mt-1 mb-3 d-block">4,1 mil amigos</span></h4>
                    <div className="d-flex align-items-center justify-content-center position-absolute-md right-15 top-0 me-2">
                        <a href="/defaultmember" className="d-none d-lg-block bg-black p-3 z-index-1 rounded-3 text-white font-xsssss text-uppercase fw-700 ls-3">Añadir amigo</a>
                        <a href="/defaultemailbox" className="d-none d-lg-block bg-black btn-round-lg ms-2 rounded-3 text-white"><i className="feather-mail font-md"></i></a>
                        <a href="/home" id="dropdownMenu4" className="d-none d-lg-block bg-black btn-round-lg ms-2 rounded-3 text-white" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti-more font-md tetx-dark"></i></a>
                        <div className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg" aria-labelledby="dropdownMenu4">
                            <div className="card-body p-0 d-flex">
                                <i className="feather-bookmark text-grey-500 me-3 font-lg"></i>
                                <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-0">Guardar link <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Añadir esto para tus items guardados</span></h4>
                            </div>
                            <div className="card-body p-0 d-flex mt-2">
                                <i className="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                                <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-0">Eliminar post <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Añadir esto para tus items guardados</span></h4>
                            </div>Añadir esto para tus items guardados
                            <div className="card-body p-0 d-flex mt-2">
                                <i className="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                                <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-0">Eliminar todo del grpo <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Añadir esto para tus items guardados</span></h4>
                            </div>
                            <div className="card-body p-0 d-flex mt-2">
                                <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                                <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-0">Ya no me gusta el grupo<span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">Añadir esto para tus items guardados</span></h4>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-body d-block w-100 shadow-none mb-0 p-0 border-top-xs">
                    <ul className="nav nav-tabs h55 d-flex product-info-tab border-bottom-0 ps-4" id="pills-tab" role="tablist">
                        <li className="active list-inline-item me-5"><a className="fw-700 font-xssss text-white pt-3 pb-3 ls-1 d-inline-block active" href="#navtabs1" data-toggle="tab">Cronología</a></li>
                        <li className="list-inline-item me-5"><a className="fw-700 font-xssss text-white pt-3 pb-3 ls-1 d-inline-block" href="#navtabs2" data-toggle="tab">Fotos</a></li>
                        <li className="list-inline-item me-5"><a className="fw-700 font-xssss text-white pt-3 pb-3 ls-1 d-inline-block" href="#navtabs3" data-toggle="tab">Videos</a></li>
                        <li className="list-inline-item me-5"><a className="fw-700 font-xssss text-white pt-3 pb-3 ls-1 d-inline-block" href="#navtabs4" data-toggle="tab">Me gusta</a></li>
                        <li className="list-inline-item me-5"><a className="fw-700 font-xssss text-white pt-3 pb-3 ls-1 d-inline-block" href="#navtabs3" data-toggle="tab">Grupos</a></li>
                        <li className="list-inline-item me-5"><a className="fw-700 font-xssss text-white pt-3 pb-3 ls-1 d-inline-block" href="#navtabs1" data-toggle="tab">Amigos</a></li>
                    </ul>
                </div>
            </div>
             
        );
    }
}

export default ProfilecardThree;