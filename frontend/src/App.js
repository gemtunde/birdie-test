import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import TopNav from './components/TopNav';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//components
import Login from './auth/Login';
import Register from './auth/Register';
import Home from './booking/Home';
import Dashboard from './user/Dashboard';
import DashboardSeller from './user/DashboardSeller';
import PrivateRoute from './components/PrivateRoute';
import NewRecord from './records/NewRecord';

function App() {
  return (
    <div>
        <Router>
            <TopNav />
            <ToastContainer/>
            <Switch>
               
               <Route path='/' exact component = {Home} />
               <Route path='/login' exact component = {Login} />
               <Route path='/register' exact component = {Register} />
               <PrivateRoute path='/dashboard' exact component = {Dashboard} />
              {/* change this seller to admin '/dashboard/admin' */}
               <PrivateRoute path='/dashboard/seller' exact component = {DashboardSeller} />
               <PrivateRoute path='/hotels/new' exact component = {NewRecord} />
            </Switch>
        </Router>
      
    </div>
  );
}

export default App;
