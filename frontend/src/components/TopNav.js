import React from "react";
import {Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';


const TopNav = () => {
      
    //  const useSelector = useSelector();
      const {auth} = useSelector((state) => ({...state}));
      const dispatch = useDispatch();
      const history = useHistory();
      const logout =() => {
            dispatch({
                  type : 'LOGOUT',
                  payload : null,
            });
            window.localStorage.removeItem('auth');
            history.push('/login');
      };
      
      return(

    <div className='nav bg-danger d-flex p-4 justify-content-between'>
          <Link to='/' className='nav-link'> Home </Link>
          
          {/* if auth is NOT empty, show below */}
          {
            auth !== null && (<a  className='nav-link' onClick={logout}> Logout </a>)
          }
         
         {
            auth !== null && (
             <>
            <Link to='/dashboard' className='nav-link'> Dashboard </Link>                  
             </>
                )
          }
          
          {/* if auth is empty, show below */}
          {
            auth === null && (
             <>
                  <Link to='/login' className='nav-link'> Login </Link>
                   <Link to='/register' className='nav-link'> Register </Link>
            
             </>
                )
          }
    </div>
  )
}

  export default TopNav