import React from 'react'


const SmallCard = ({record}) =>
<>
 {/* {JSON.stringify(record)} */}
 <div className="card mb-3">
     <div className="row no-gutters">
        <div className="col-md-4">
            <img 
            src="https://via.placeholder.com/900x500.png?text=MERN+Booking"
            alt="default record image"
           className="card-image img img-fluid"
           />
        </div>
        <div className="col-md-8">
            <div className="card-body">
                <h3 className="card-title">{record.title}
                <span className="float-right">$ {record.price}</span>
                </h3>
                <p className="alert alert-info">{record.location}</p>
                <p className="card-text">{`${record.description.substring(1, 200)}...`}</p>
            </div>
        </div>
     </div>

 </div>
</>

export default SmallCard ;