import React from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const DashboardNav = () => {
    const active = window.location.pathname;
    const {auth} = useSelector((state)=> ({...state}));
    const {user} = auth  ;
    console.log(user.isAdmin)

    return(
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link className={`nav-link ${active === '/dashboard' && "active"}` } to='/dashboard'>Medical Records</Link>
            </li>
            
        {            user.isAdmin  && (
            <li className="nav-item">
            <Link className={`nav-link ${active === '/dashboard/seller' && "active"}` } to='/dashboard/seller'>Make Bookings</Link>
            </li>
           )
          
        }
        </ul>
    )
}

export default DashboardNav