import React from 'react'
import ConnectNav from '../components/ConnectNav'
import DashboardNav from '../components/DashboardNav';
import {Link} from 'react-router-dom'
import ShowRecord from './ShowRecord';

function Dashboard() {
    return (
        <>
           <div className="container-fluid h1 bg-secondary">
               <ConnectNav />
            </div> 
            <div className="container-fluid p-4">
                <DashboardNav />
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-10 ">
                        <ShowRecord />
                    </div>
                    <div className="col-md-2 ">
                        <Link to='/' className='btn btn-success p-2'>Dashboard</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard
