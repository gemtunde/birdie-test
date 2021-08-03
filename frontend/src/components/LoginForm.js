import React from 'react'

 export const LoginForm = ({
     email,
     setEmail,
     password,
     setPassword,
     handleLogin
 }) => (
    <form onSubmit={handleLogin}>
        <div className="form-group">
            <label htmlFor="label" className="label-group"> Email</label>
            <input 
            type="email"
            placeholder='Enter Email' 
            className="form-control"
            value={email} 
            onChange={(e)=>setEmail(e.target.value)}
              
              />
        </div>
        <div className="form-group">
            <label htmlFor="label" className="label-group"> Password</label>
            <input 
            type="password"
            placeholder='Enter Password' 
            className="form-control"
            value={password} 
            onChange={(e)=>setPassword(e.target.value)}
              
              />
        </div>
        <button disabled={!email || !password} type='submit' className="btn btn-danger">Login</button>
    </form>
)