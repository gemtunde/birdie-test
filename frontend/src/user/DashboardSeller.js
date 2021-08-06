import React from 'react'
import ConnectNav from '../components/ConnectNav'
import DashboardNav from '../components/DashboardNav';
import {Link} from 'react-router-dom';

function DashboardSeller() {
    return (
        <>
           <div className="container-fluid h1 bg-secondary">
               <ConnectNav/>
            </div> 
            <div className="container-fluid p-4">
                <DashboardNav />
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 ">
                        <p>Add Patient medical records</p>
                    </div>
                    <div className="col-md-2 ">
                        <Link to='/hotels/new' className='btn btn-success p-2'>
                        + Add New Records
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashboardSeller
