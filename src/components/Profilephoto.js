import React,{Component} from 'react';



const TabOne = [
    {
        image: '01',
        bigImage: 'assets/images/hotel.png',
    },
    {
        image: '02',
        bigImage: 'assets/images/hotel.png',
    },
    {
        image: '03',
        bigImage: 'assets/images/hotel.png',
    },
    {
        image: '04',
        bigImage: 'assets/images/hotel.png',
    },
    {
        image: '05',
        bigImage: 'assets/images/hotel.png',
    },
    {
        image: '06',
        bigImage: 'assets/images/hotel.png',
    },
]

class Profilephoto extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tab1: 0,
            isOpen: false,
        };
    }

    render() {
        const { tab1, isOpen } = this.state;

        return (
            <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                <div className="card-body d-flex align-items-center  p-4">
                    <h4 className="fw-700 mb-0 font-xssss text-white">Fotos</h4>
                    <a href="/home" className="fw-600 ms-auto font-xssss text-white">Ver más</a>
                </div>
                  
               
                <div className="card-body d-block w-100 pt-0">
                    <a href="/home" className="p-2 lh-28 w-100 d-block bg-grey text-grey-800 text-center font-xssss fw-700 rounded-xl"><i className="feather-external-link font-xss me-2"></i>Más</a>
                </div>
            </div>
        );
    }
}

export default Profilephoto;