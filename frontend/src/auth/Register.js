import React,{useState} from 'react';
import RegisterForm from '../components/RegisterForm';
import axios from 'axios';

import {toast } from 'react-toastify';
import { register } from '../actions/auth';

const Register = ({history}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState('');

    const handleSubmit = async(e) => {
       
        e.preventDefault();
        
        //connecct to register end point
     try { const res = await register({
        name,
        email,
        admin,
        password,
     });
        console.log('register successful',res);
        toast.success("Register successfull. Please Login", res);
        history.push('/login');

    }
        
    catch(err) {
        console.log(err, 'register failed')
        if(err.response.status ===400) toast.error(err.response.data);
  
    }
     }

   

    return(
    <>
        <div className='container-fluid h1  p-5 text-center'>
           <h1>Register</h1> 
        </div>
       
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <RegisterForm 
                    handleSubmit= {handleSubmit}
                    name={name}
                    setName = {setName}
                    email = {email}
                    setEmail = {setEmail}
                    password = {password}
                    setPassword = {setPassword}
                    admin = {admin}
                    setAdmin = {setAdmin}
                    />
                </div>
            </div>
        </div>


    </>

    )
}

export default Register



