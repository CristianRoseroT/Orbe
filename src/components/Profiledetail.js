import React,{Component} from 'react';


class Profiledetail extends Component {
    render() {
        return (
            <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                <div className="card-body d-block p-4">
                    <h4 className="fw-700 mb-3 font-xsss text-white">Sobre mi</h4>
                    <p className="fw-500 text-white lh-24 font-xssss mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                </div>
                <div className="card-body border-top-xs d-flex">
                    <i className="feather-lock text-white me-3 font-lg"></i>
                    <h4 className="fw-700 text-white font-xssss mt-0">Ocupación <span className="d-block font-xssss fw-500 mt-1 lh-3 text-white">Diseñador Grafico</span></h4>
                </div>

                <div className="card-body d-flex pt-0">
                    <i className="feather-eye text-white me-3 font-lg"></i>
                    <h4 className="fw-700 text-white font-xssss mt-0">Universidad Graduado <span className="d-block font-xssss fw-500 mt-1 lh-3 text-white">Universidad de los Andes</span></h4>
                </div>
                <div className="card-body d-flex pt-0">
                    <i className="feather-map-pin text-white me-3 font-lg"></i>
                    <h4 className="fw-700 text-white font-xssss mt-1">Bogotá, Colombia</h4>
                </div>
                <div className="card-body d-flex pt-0">
                    <i className="feather-users text-white me-3 font-lg"></i>
                    <h4 className="fw-700 text-white font-xssss mt-1">En una relación con <span className="d-block font-xssss fw-500 mt-1 lh-3 text-white">Gabriela Salazar</span></h4>
                </div>
            </div>
        );
    }
}

export default Profiledetail;