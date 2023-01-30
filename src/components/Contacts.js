import React,{Component} from 'react';

const contactList = [
    {
        imageUrl: 'user.png',
        name: 'Armany Seary',
        friend: '45',
    },
    {
        imageUrl: 'user.png',
        name: 'Mohannad Zitoun',
        friend: '18',
    },
    {
        imageUrl: 'user.png',
        name: 'Hurin Seary',
        friend: '28',
    },
]

class Contacts extends Component {
    render() {
        return (
            <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
                <div className="card-body d-flex align-items-center p-4">
                    <h4 className="fw-700 mb-0 font-xssss text-white">Miembros Pro</h4>
                    <a href="/defaultmember" className="fw-600 ms-auto font-xssss text-white">Ver todo</a>
                </div>
                {contactList.map((value , index) => (

                <div key={index} className="card-body bg-transparent d-flex p-3 bg-greylight ms-3 me-3 rounded-3 mb-3">
                    <figure className="avatar me-2 mb-0"><img src={`assets/images/${value.imageUrl}`} alt="avater" className="shadow-sm rounded-circle w45" /></figure>
                    <h4 className="fw-700 text-white font-xssss mt-2">{value.name} <span className="d-block font-xssss fw-500 mt-1 lh-3 text-white">{value.friend} Amigos en común</span></h4>
                    <a href="/defaultmember" className="btn-round-sm bg-white ms-auto mt-2"><span className="feather-chevron-right font-xss text-grey-900"></span></a>
                </div>

                ))}

                
            </div>
        );
    }
}

export default Contacts;