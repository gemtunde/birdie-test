import React,{useState} from 'react';
import axios from 'axios';
import { login } from '../actions/auth';
import { LoginForm } from '../components/LoginForm';
import {toast } from 'react-toastify';
import {useDispatch} from 'react-redux';

const Login = ({history}) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleLogin = async (e) => {
        e.preventDefault();
        console.log(email, password);
        try{
            let res = await login({ 
                email,
                password});
        toast.success('login sucessful');
        if(res.data){
            console.log('save response in redux state and localstorage')
           // console.log(res.data);

           //save user to localstorage
           window.localStorage.setItem('auth', JSON.stringify(res.data));

           //save user to redux store
           dispatch({
               type : 'LOGGED_IN',
               payload : res.data,
           });
           history.push('/dashboard');
        }
    }
    catch(err){
        console.log('error login', err);
        if(err.response.status === 400) toast.error('login error')
    }
    }  

    return(
        <>
        <div className='container-fluid h1 p-5 text-center'>
           <h1>Login </h1> 
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <LoginForm 
                    email = {email}
                    setEmail = {setEmail}
                    password = {password}
                    setPassword = {setPassword}
                    handleLogin = {handleLogin}
                    />
                </div>
            </div>
        </div>

        </>
    )
}

export default Login 


